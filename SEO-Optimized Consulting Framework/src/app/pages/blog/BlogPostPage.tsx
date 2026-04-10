import { Suspense } from "react";
import { useParams } from "react-router";
import { BlogLayout } from "../../components/BlogLayout";
import { POST_META, POST_COMPONENTS } from "./posts/index";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

function PostLoadingFallback() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function PostNotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-yellow-400 text-sm uppercase tracking-widest mb-3">404</p>
          <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-6">This article doesn't exist or may have moved.</p>
          <a href="/blog" className="text-yellow-400 hover:underline text-sm">← Back to Blog</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const meta = POST_META.find(p => p.slug === slug);
  const PostComponent = slug ? POST_COMPONENTS[slug] : undefined;

  if (!meta || !PostComponent) return <PostNotFound />;

  return (
    <Suspense fallback={<PostLoadingFallback />}>
      <BlogLayout meta={meta}>
        <PostComponent />
      </BlogLayout>
    </Suspense>
  );
}
