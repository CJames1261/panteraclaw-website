#!/usr/bin/env python3
"""
Pantera Claw Weekly Blog Agent
Calls the Anthropic API to generate and publish a new blog post every Monday.
"""

import os
import json
import re
from datetime import datetime
import anthropic

BASE = "SEO-Optimized Consulting Framework"
CONFIG_PATH = f"{BASE}/blog-agent.config.json"
INDEX_PATH = f"{BASE}/src/app/pages/blog/posts/index.ts"
POSTS_DIR = f"{BASE}/src/app/pages/blog/posts"
SITEMAP_PATH = f"{BASE}/public/sitemap.xml"
SITE_URL = "https://www.agenticaiutah.com"


def load_config():
    with open(CONFIG_PATH, encoding="utf-8") as f:
        return json.load(f)


def load_index():
    with open(INDEX_PATH, encoding="utf-8") as f:
        return f.read()


def get_existing_slugs(index_content):
    return re.findall(r'slug:\s*["\']([^"\']+)["\']', index_content)


def topic_to_slug(topic):
    slug = topic.lower()
    slug = re.sub(r"[^a-z0-9\s]", "", slug)
    slug = re.sub(r"\s+", "-", slug.strip())
    slug = re.sub(r"-+", "-", slug)
    return slug


def pick_topic(config, existing_slugs):
    for topic in config["topicPool"]:
        slug = topic_to_slug(topic)
        if slug not in existing_slugs:
            return topic, slug
    return None, None


def generate_post(config, topic, slug, today):
    client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])
    style = config["style"]

    prompt = f"""You are writing a blog post for Pantera Claw, an AI and data consulting firm based in Salt Lake City, Utah.

TOPIC: {topic}

STRICT RULES — follow every one exactly:
1. Tone: {style["tone"]}
2. Length: {style["minWords"]} to {style["maxWords"]} words
3. Target audience: {", ".join(config["targetAudiences"])}
4. NEVER use hyphens or dashes (-) anywhere in the content. Use commas, semicolons, or rewrite the sentence instead. This is a hard rule with zero exceptions.
5. Write the post body in JSX (React) inside a fragment (<>...</>)
6. Use <h2> for 2 to 4 major section headings, <h3> for subsections
7. Use <p>, <ul>/<li>, <blockquote>, <strong>, <em>, <hr /> where appropriate
8. Include 1 to 3 inline images at natural breakpoints using this exact JSX format:
   <figure><img src="https://images.unsplash.com/photo-PHOTOID?w=1200&q=80" alt="descriptive alt text" /><figcaption>Caption text. Photo by Photographer Name on Unsplash.</figcaption></figure>
   Use realistic Unsplash photo IDs that are genuinely relevant to the topic.
9. End the post with a practical "Where to Start" or equivalent closing section
10. Include a final paragraph after <hr /> that mentions Pantera Claw by name

OUTPUT FORMAT — return exactly this structure with nothing before or after:

===META===
{{
  "slug": "{slug}",
  "title": "Full Post Title Here",
  "date": "{today}",
  "readTime": "X min read",
  "excerpt": "Two to three sentence SEO-friendly summary with no dashes.",
  "category": "Business Strategy",
  "tags": ["tag1", "tag2", "tag3", "tag4"],
  "heroImage": {{
    "url": "https://images.unsplash.com/photo-PHOTOID?w=1200&q=80",
    "alt": "Descriptive alt text for the hero image",
    "credit": "Photographer Full Name",
    "creditUrl": "https://unsplash.com/@photographerhandle"
  }}
}}
===CONTENT===
export default function Post() {{
  return (
    <>
      ... full JSX post content here ...
    </>
  );
}}
===END===

Category must be exactly one of: Business Strategy, Data Engineering, AI & Automation, Analytics, Technical"""

    message = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=8096,
        messages=[{"role": "user", "content": prompt}],
    )

    return message.content[0].text


def parse_response(response_text):
    meta_match = re.search(r"===META===\s*(.*?)\s*===CONTENT===", response_text, re.DOTALL)
    content_match = re.search(r"===CONTENT===\s*(.*?)\s*===END===", response_text, re.DOTALL)

    if not meta_match or not content_match:
        raise ValueError(f"Could not parse Claude response. First 800 chars:\n{response_text[:800]}")

    meta = json.loads(meta_match.group(1).strip())
    content = content_match.group(1).strip()
    return meta, content


def write_post_file(slug, content):
    path = f"{POSTS_DIR}/{slug}.tsx"
    with open(path, "w", encoding="utf-8") as f:
        f.write(content + "\n")
    print(f"Written post file: {path}")


def escape_ts_string(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')


def update_index(index_content, meta):
    slug = meta["slug"]

    # --- Add to POST_COMPONENTS ---
    new_component = f'  "{slug}": lazy(\n    () => import("./{slug}")\n  ),'
    index_content = index_content.replace(
        "export const POST_COMPONENTS: Record<string, React.LazyExoticComponent<ComponentType>> = {",
        f"export const POST_COMPONENTS: Record<string, React.LazyExoticComponent<ComponentType>> = {{\n{new_component}",
    )

    # --- Build new PostMeta entry ---
    hero = meta.get("heroImage", {})
    tags_str = ", ".join([f'"{t}"' for t in meta.get("tags", [])])
    excerpt = escape_ts_string(meta["excerpt"])
    title = escape_ts_string(meta["title"])

    new_meta = f"""  {{
    slug: "{slug}",
    title: "{title}",
    date: "{meta["date"]}",
    readTime: "{meta["readTime"]}",
    excerpt: "{excerpt}",
    category: "{meta["category"]}",
    tags: [{tags_str}],
    heroImage: {{
      url: "{escape_ts_string(hero.get("url", ""))}",
      alt: "{escape_ts_string(hero.get("alt", ""))}",
      credit: "{escape_ts_string(hero.get("credit", ""))}",
      creditUrl: "{escape_ts_string(hero.get("creditUrl", ""))}",
    }},
  }},"""

    # Prepend to POST_META (newest first)
    index_content = index_content.replace(
        "export const POST_META: PostMeta[] = [",
        f"export const POST_META: PostMeta[] = [\n{new_meta}",
    )

    return index_content


def update_sitemap(slug, date):
    with open(SITEMAP_PATH, encoding="utf-8") as f:
        sitemap = f.read()

    new_entry = f"""
  <url>
    <loc>{SITE_URL}/blog/{slug}</loc>
    <lastmod>{date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
"""
    sitemap = sitemap.replace("</urlset>", new_entry + "</urlset>")

    with open(SITEMAP_PATH, "w", encoding="utf-8") as f:
        f.write(sitemap)

    print(f"Updated sitemap.xml with /blog/{slug}")


def main():
    print("=== Pantera Claw Blog Agent ===")

    config = load_config()
    index_content = load_index()
    existing_slugs = get_existing_slugs(index_content)
    print(f"Existing posts ({len(existing_slugs)}): {existing_slugs}")

    topic, slug = pick_topic(config, existing_slugs)
    if not topic:
        print("All topics in the pool are already published. No post generated this week.")
        return

    print(f"Selected topic : {topic}")
    print(f"Slug           : {slug}")

    today = datetime.now().strftime("%Y-%m-%d")
    print(f"Date           : {today}")

    print("\nCalling Anthropic API...")
    response_text = generate_post(config, topic, slug, today)

    print("Parsing response...")
    meta, content = parse_response(response_text)

    write_post_file(slug, content)

    print("Updating posts/index.ts...")
    updated_index = update_index(index_content, meta)
    with open(INDEX_PATH, "w", encoding="utf-8") as f:
        f.write(updated_index)

    print("Updating sitemap.xml...")
    update_sitemap(slug, today)

    print(f"\n✓ Published: {meta['title']}")
    print(f"  Slug     : {meta['slug']}")
    print(f"  Date     : {meta['date']}")
    print(f"  Category : {meta['category']}")
    print(f"  Hero     : {meta.get('heroImage', {}).get('url', 'none')}")


if __name__ == "__main__":
    main()
