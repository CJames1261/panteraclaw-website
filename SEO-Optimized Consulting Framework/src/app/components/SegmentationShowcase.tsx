import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";

// ── Segment data (mirrors segmentation-preview.html exactly) ─────────────────
const SEGMENTS = [
  {
    name: "Balanced Mid-Value Shoppers", pct: "6.4%", color: "#a855f7",
    cx: 0.18, cy: 0.24, sx: 72, sy: 58,
    desc: "Reliable, consistent buyers spending at mid-range prices.",
    customers: [
      { name: "Rachel M.",  spend: "$3.80", orders: "18/mo" },
      { name: "David K.",   spend: "$4.10", orders: "15/mo" },
      { name: "Priya S.",   spend: "$3.55", orders: "20/mo" },
      { name: "Carlos J.",  spend: "$3.90", orders: "16/mo" },
    ],
  },
  {
    name: "High-Price, Low-Frequency Buyers", pct: "26.8%", color: "#3b82f6",
    cx: 0.75, cy: 0.20, sx: 88, sy: 68,
    desc: "Premium spenders — infrequent but high-value purchases.",
    customers: [
      { name: "Margaret T.", spend: "$9.40",  orders: "2/mo" },
      { name: "Steven R.",   spend: "$8.90",  orders: "1/mo" },
      { name: "Diana W.",    spend: "$10.20", orders: "2/mo" },
      { name: "James L.",    spend: "$9.75",  orders: "1/mo" },
    ],
  },
  {
    name: "High-Volume Bargain Buyers", pct: "15.4%", color: "#14b8a6",
    cx: 0.76, cy: 0.76, sx: 80, sy: 62,
    desc: "Bulk purchasers chasing the lowest prices every time.",
    customers: [
      { name: "Tony B.",  spend: "$1.40", orders: "38/mo" },
      { name: "Lisa N.",  spend: "$1.25", orders: "42/mo" },
      { name: "Omar F.",  spend: "$1.55", orders: "35/mo" },
      { name: "Carla D.", spend: "$1.30", orders: "40/mo" },
    ],
  },
  {
    name: "Low-Engagement Budget Shoppers", pct: "31.4%", color: "#f97316",
    cx: 0.22, cy: 0.78, sx: 92, sy: 66,
    desc: "Infrequent, low-spend customers — hard to retain.",
    customers: [
      { name: "Mark P.",  spend: "$1.90", orders: "2/mo" },
      { name: "Susan H.", spend: "$2.10", orders: "3/mo" },
      { name: "Kevin A.", spend: "$1.75", orders: "2/mo" },
      { name: "Nina C.",  spend: "$2.00", orders: "2/mo" },
    ],
  },
  {
    name: "Consistent Value Seekers", pct: "20.0%", color: "#facc15",
    cx: 0.50, cy: 0.50, sx: 84, sy: 70,
    desc: "Steady buyers who balance quality and price reliably.",
    customers: [
      { name: "Angela V.",  spend: "$4.60", orders: "11/mo" },
      { name: "Brian O.",   spend: "$5.10", orders: "10/mo" },
      { name: "Mei L.",     spend: "$4.80", orders: "12/mo" },
      { name: "Samuel G.",  spend: "$4.95", orders: "9/mo"  },
    ],
  },
];
const COUNTS = [45, 90, 60, 100, 75];
const NEUTRAL = "#64748b";
const DELAY_FRAMES = 130;
const MOVE_FRAMES  = 110;
const LABEL_OFFSETS = [
  { dy: -56 }, { dy: -56 }, { dy: 42 }, { dy: 42 }, { dy: -56 },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function hexToRgb(h: string) {
  return [parseInt(h.slice(1,3),16), parseInt(h.slice(3,5),16), parseInt(h.slice(5,7),16)];
}
function lerpColor(a: string, b: string, t: number) {
  const [ar,ag,ab] = hexToRgb(a), [br,bg,bb] = hexToRgb(b);
  return `rgb(${Math.round(ar+(br-ar)*t)},${Math.round(ag+(bg-ag)*t)},${Math.round(ab+(bb-ab)*t)})`;
}
function randNorm() { return (Math.random()+Math.random()+Math.random()+Math.random()-2)/2; }
function easeInOut(t: number) { return t<0.5 ? 2*t*t : -1+(4-2*t)*t; }
function easeOut(t: number)   { return 1-(1-t)*(1-t)*(1-t); }

interface Dot {
  x: number; y: number; tx: number; ty: number; seg: number;
  size: number; phase: number; colorProgress: number; moveProgress: number; delay: number;
}

function buildDots(W: number, H: number): Dot[] {
  const arr: Dot[] = [];
  SEGMENTS.forEach((seg, si) => {
    for (let i = 0; i < COUNTS[si]; i++) {
      const tx = Math.max(10, Math.min(W-10, seg.cx*W + randNorm()*seg.sx));
      const ty = Math.max(10, Math.min(H-10, seg.cy*H + randNorm()*seg.sy));
      arr.push({
        x: Math.random()*W, y: Math.random()*H,
        tx, ty, seg: si,
        size: 2.8 + Math.random()*2.0,
        phase: Math.random()*Math.PI*2,
        colorProgress: 0, moveProgress: 0,
        delay: Math.random()*0.25,
      });
    }
  });
  return arr;
}

function rrect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y);
  ctx.arcTo(x+w,y,x+w,y+r,r); ctx.lineTo(x+w,y+h-r);
  ctx.arcTo(x+w,y+h,x+w-r,y+h,r); ctx.lineTo(x+r,y+h);
  ctx.arcTo(x,y+h,x,y+h-r,r); ctx.lineTo(x,y+r);
  ctx.arcTo(x,y,x+r,y,r); ctx.closePath();
}

// ── Component ─────────────────────────────────────────────────────────────────
export function SegmentationShowcase() {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const resetRef    = useRef<() => void>(() => {});
  const [status, setStatus]         = useState("Scanning customer data...");
  const [showReplay, setShowReplay] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width, H = canvas.height;

    // mutable state via refs (safe in rAF loop)
    let dots       = buildDots(W, H);
    let phase      = 0, tick = 0, phaseTimer = 0;
    let labelAlpha = 0, hintAlpha = 0, tooltipAlpha = 0, bannerAlpha = 1;
    let hoveredSeg = -1, hasHovered = false, mouseOnCanvas = false;
    let mouseX = -999, mouseY = -999;
    let rafId  = 0, running = false;

    // ── mouse ──────────────────────────────────────────────────────────────────
    function onMove(e: MouseEvent) {
      const r = canvas.getBoundingClientRect();
      mouseX = (e.clientX - r.left) * (W / r.width);
      mouseY = (e.clientY - r.top)  * (H / r.height);
      mouseOnCanvas = true;
      if (phase === 2 && !hasHovered) hasHovered = true;
    }
    function onLeave() { mouseX = -999; mouseY = -999; mouseOnCanvas = false; }
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    // ── draw helpers ───────────────────────────────────────────────────────────
    function drawDot(x: number, y: number, r: number, col: string, glow: number) {
      const [rr,gg,bb] = col.startsWith("rgb") ? col.match(/\d+/g)!.map(Number) : hexToRgb(col);
      const g = ctx.createRadialGradient(x,y,0,x,y,r*5);
      g.addColorStop(0,    `rgba(${rr},${gg},${bb},${glow*0.5})`);
      g.addColorStop(0.45, `rgba(${rr},${gg},${bb},${glow*0.14})`);
      g.addColorStop(1,    `rgba(${rr},${gg},${bb},0)`);
      ctx.beginPath(); ctx.arc(x,y,r*5,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
      ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fillStyle=col; ctx.fill();
    }

    function drawLabel(seg: typeof SEGMENTS[0], si: number, alpha: number, highlighted: boolean) {
      ctx.save(); ctx.globalAlpha = alpha;
      ctx.font = "bold 10.5px 'Segoe UI', sans-serif";
      const tw = ctx.measureText(seg.name).width;
      const bw = tw + 26 + 38, bh = 24;
      const bx = Math.max(4, Math.min(W-bw-4, seg.cx*W - bw/2));
      const by = seg.cy*H + LABEL_OFFSETS[si].dy;
      ctx.shadowColor = seg.color; ctx.shadowBlur = highlighted ? 22 : 14;
      ctx.fillStyle = highlighted ? "#1e293bf8" : "#0f172af2";
      rrect(ctx,bx,by,bw,bh,5); ctx.fill();
      ctx.strokeStyle = highlighted ? seg.color+"ee" : seg.color+"99";
      ctx.lineWidth = highlighted ? 1.5 : 1;
      rrect(ctx,bx,by,bw,bh,5); ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.beginPath(); ctx.arc(bx+13, by+bh/2, 4.5, 0, Math.PI*2);
      ctx.fillStyle = seg.color; ctx.fill();
      ctx.fillStyle = "#f1f5f9"; ctx.fillText(seg.name, bx+22, by+bh/2+4);
      const pw = 34;
      ctx.fillStyle = seg.color+"28"; rrect(ctx,bx+bw-pw-4,by+4,pw,bh-8,4); ctx.fill();
      ctx.fillStyle = seg.color; ctx.font = "bold 9.5px 'Segoe UI', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(seg.pct, bx+bw-pw/2-4, by+bh/2+3);
      ctx.textAlign = "left";
      ctx.restore();
    }

    function drawTooltip(seg: typeof SEGMENTS[0], alpha: number) {
      if (alpha < 0.01) return;
      ctx.save(); ctx.globalAlpha = alpha;
      const rowH = 19, padX = 14, bw = 260, br = 8;
      const bh = 58 + 18 + seg.customers.length * rowH + 10;
      let bx = seg.cx*W + 22, by = seg.cy*H - bh/2;
      if (bx + bw > W - 8) bx = seg.cx*W - bw - 22;
      by = Math.max(8, Math.min(H-bh-8, by));
      ctx.shadowColor = seg.color; ctx.shadowBlur = 18;
      ctx.fillStyle = "#0f172afc"; rrect(ctx,bx,by,bw,bh,br); ctx.fill();
      ctx.strokeStyle = seg.color+"bb"; ctx.lineWidth = 1.5;
      rrect(ctx,bx,by,bw,bh,br); ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.fillStyle = seg.color; rrect(ctx,bx,by+8,3,bh-16,2); ctx.fill();
      ctx.font = "bold 11px 'Segoe UI', sans-serif"; ctx.fillStyle = "#ffffff";
      ctx.fillText(seg.name, bx+padX, by+20);
      ctx.font = "bold 10px 'Segoe UI', sans-serif"; ctx.fillStyle = seg.color;
      ctx.fillText(seg.pct+" of customers", bx+padX, by+35);
      ctx.font = "9.5px 'Segoe UI', sans-serif"; ctx.fillStyle = "#94a3b8";
      ctx.fillText(seg.desc, bx+padX, by+50);
      ctx.strokeStyle = "#ffffff12"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(bx+padX,by+60); ctx.lineTo(bx+bw-padX,by+60); ctx.stroke();
      ctx.font = "bold 9px 'Segoe UI', sans-serif"; ctx.fillStyle = "#475569";
      ctx.fillText("CUSTOMER",  bx+padX,     by+74);
      ctx.fillText("AVG SPEND", bx+padX+120, by+74);
      ctx.fillText("ORDERS",    bx+padX+192, by+74);
      seg.customers.forEach((c, i) => {
        const ry = by + 74 + 6 + (i+1)*rowH;
        if (i%2===0) { ctx.fillStyle="#ffffff05"; rrect(ctx,bx+padX-4,ry-12,bw-padX*2+8,rowH-2,3); ctx.fill(); }
        ctx.font = "10px 'Segoe UI', sans-serif"; ctx.fillStyle = "#e2e8f0";
        ctx.fillText(c.name, bx+padX, ry);
        ctx.font = "bold 10px 'Segoe UI', sans-serif"; ctx.fillStyle = seg.color;
        ctx.fillText(c.spend, bx+padX+120, ry);
        ctx.font = "10px 'Segoe UI', sans-serif"; ctx.fillStyle = "#94a3b8";
        ctx.fillText(c.orders, bx+padX+192, ry);
      });
      ctx.restore();
    }

    function drawHoverHint(alpha: number) {
      if (alpha < 0.01) return;
      ctx.save(); ctx.globalAlpha = alpha;
      const hint = "🖱  Hover over a group to explore";
      ctx.font = "11px 'Segoe UI', sans-serif";
      const hw = ctx.measureText(hint).width;
      const hx = W/2 - hw/2 - 10, hy = 28;
      ctx.fillStyle = "#1e3a5f"; rrect(ctx,hx-8,hy-16,hw+36,22,10); ctx.fill();
      ctx.strokeStyle = "#facc15aa"; ctx.lineWidth = 1.5;
      rrect(ctx,hx-8,hy-16,hw+36,22,10); ctx.stroke();
      const pulse = 0.5 + 0.5 * Math.sin(tick * 0.07);
      ctx.fillStyle = `rgba(250,204,21,${0.7+pulse*0.3})`;
      ctx.beginPath(); ctx.arc(hx+hw+12, hy-5, 4, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = "#ffffff"; ctx.fillText(hint, hx, hy);
      ctx.restore();
    }

    // ── static initial draw ────────────────────────────────────────────────────
    function drawBg() {
      ctx.clearRect(0,0,W,H);
      const bg = ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W*0.8);
      bg.addColorStop(0,"#0f172a"); bg.addColorStop(1,"#020617");
      ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
      ctx.strokeStyle="#ffffff06"; ctx.lineWidth=1;
      for(let gx=0;gx<W;gx+=80){ctx.beginPath();ctx.moveTo(gx,0);ctx.lineTo(gx,H);ctx.stroke();}
      for(let gy=0;gy<H;gy+=80){ctx.beginPath();ctx.moveTo(0,gy);ctx.lineTo(W,gy);ctx.stroke();}
    }

    function drawStatic() {
      drawBg();
      dots.forEach(d => drawDot(d.x, d.y, d.size, NEUTRAL, 0.25));
    }

    function drawAnalysisBanner(alpha: number) {
      ctx.save(); ctx.globalAlpha = alpha;
      const label  = "Performing analysis across all data points...";
      ctx.font = "bold 13px 'Segoe UI', sans-serif";
      const tw = ctx.measureText(label).width;
      const bw = tw + 56, bh = 40, br = 20;
      const bx = W/2 - bw/2, by = H/2 - bh/2;

      // backdrop glow
      ctx.shadowColor = "#4ade80"; ctx.shadowBlur = 24;
      ctx.fillStyle = "#052e16cc";
      rrect(ctx, bx, by, bw, bh, br); ctx.fill();
      ctx.strokeStyle = "#4ade80bb"; ctx.lineWidth = 1.5;
      rrect(ctx, bx, by, bw, bh, br); ctx.stroke();
      ctx.shadowBlur = 0;

      // pulsing dot
      const pulse = 0.5 + 0.5 * Math.sin(tick * 0.1);
      ctx.fillStyle = `rgba(74,222,128,${0.6 + pulse * 0.4})`;
      ctx.beginPath(); ctx.arc(bx + 20, by + bh/2, 5, 0, Math.PI*2); ctx.fill();

      // text
      ctx.fillStyle = "#4ade80";
      ctx.fillText(label, bx + 32, by + bh/2 + 5);
      ctx.restore();
    }

    // ── main loop ──────────────────────────────────────────────────────────────
    function frame() {
      tick++; phaseTimer++;
      drawBg();

      if (phase===0 && phaseTimer>DELAY_FRAMES) { phase=1; phaseTimer=0; setStatus("Identifying customer groups..."); }
      if (phase===1) bannerAlpha = Math.max(0, bannerAlpha - 0.04);
      if (phase===1 && phaseTimer>MOVE_FRAMES)  {
        phase=2; phaseTimer=0;
        setStatus("5 customer groups identified ✓");
        setShowReplay(true);
      }

      if (phase===1 && phaseTimer > MOVE_FRAMES*0.6) labelAlpha = Math.min(1, labelAlpha+0.012);
      if (phase===2) labelAlpha = Math.min(1, labelAlpha+0.018);
      if (phase===2 && !hasHovered) hintAlpha = Math.min(1, hintAlpha+0.015);
      if (hasHovered) hintAlpha = Math.max(0, hintAlpha-0.04);

      // hovered segment detection
      // default to Consistent Value Seekers (index 4) until mouse enters canvas
      let newHovered = -1;
      if (phase===2) {
        if (!mouseOnCanvas) {
          newHovered = 4; // Consistent Value Seekers
        } else {
          let closest = 80*80;
          SEGMENTS.forEach((seg, si) => {
            const dx = mouseX - seg.cx*W, dy = mouseY - seg.cy*H;
            const d2 = dx*dx + dy*dy;
            if (d2 < closest) { closest=d2; newHovered=si; }
          });
        }
      }
      hoveredSeg   = newHovered;
      tooltipAlpha = hoveredSeg>=0 ? Math.min(1,tooltipAlpha+0.08) : Math.max(0,tooltipAlpha-0.08);

      // dots
      dots.forEach(d => {
        const otherHovered = hoveredSeg>=0 && hoveredSeg!==d.seg;
        if (phase===0) {
          d.phase += 0.007;
          d.x += Math.cos(d.phase*0.8)*0.2;
          d.y += Math.sin(d.phase*1.1)*0.2;
          d.x = Math.max(4, Math.min(W-4, d.x));
          d.y = Math.max(4, Math.min(H-4, d.y));
          d.colorProgress = 0; d.moveProgress = 0;
        } else if (phase===1) {
          const t = Math.max(0, phaseTimer/MOVE_FRAMES - d.delay) / (1-d.delay);
          d.moveProgress  = easeInOut(Math.min(1,t));
          d.colorProgress = easeOut(Math.max(0, Math.min(1, (d.moveProgress-0.4)/0.6)));
          d.x += (d.tx - d.x) * 0.025 * (1+d.moveProgress);
          d.y += (d.ty - d.y) * 0.025 * (1+d.moveProgress);
        } else {
          d.phase += 0.005;
          d.x = d.tx + Math.cos(d.phase)*3;
          d.y = d.ty + Math.sin(d.phase)*3;
          d.colorProgress = 1;
        }
        const seg = SEGMENTS[d.seg];
        const col = d.colorProgress < 0.01 ? NEUTRAL : lerpColor(NEUTRAL, seg.color, d.colorProgress);
        const glow = 0.2 + d.colorProgress*0.65;
        drawDot(d.x, d.y, d.size, col, glow);
      });

      // pulse rings
      if (phase===2 && labelAlpha>0.05) {
        SEGMENTS.forEach((seg,si) => {
          const pulse = 0.5+0.5*Math.sin(tick*0.04);
          const dim = 0.28;
          ctx.beginPath(); ctx.arc(seg.cx*W,seg.cy*H,22+pulse*6,0,Math.PI*2);
          ctx.strokeStyle = seg.color+Math.round(labelAlpha*dim*255).toString(16).padStart(2,"0");
          ctx.lineWidth=1.5; ctx.stroke();
        });
      }

      // labels
      if (labelAlpha>0.01) {
        SEGMENTS.forEach((seg,si) => {
          drawLabel(seg, si, labelAlpha, hoveredSeg===si);
        });
      }

      drawHoverHint(hintAlpha);
      if (bannerAlpha > 0.01) drawAnalysisBanner(bannerAlpha);

      if (hoveredSeg>=0 || tooltipAlpha>0.01) {
        drawTooltip(hoveredSeg>=0 ? SEGMENTS[hoveredSeg] : SEGMENTS[0], tooltipAlpha);
      }

      rafId = requestAnimationFrame(frame);
    }

    // expose reset for replay button
    resetRef.current = () => {
      dots = buildDots(W, H);
      phase=0; tick=0; phaseTimer=0;
      labelAlpha=0; hintAlpha=0; tooltipAlpha=0; bannerAlpha=1;
      hoveredSeg=-1; hasHovered=false; mouseOnCanvas=false;
      setStatus("Scanning customer data...");
      setShowReplay(false);
      if (!running) { running=true; frame(); }
    };

    drawStatic();

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !running) {
        running = true;
        observer.disconnect();
        frame();
      }
    }, { threshold: 0.4 });
    observer.observe(canvas);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="py-20 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-yellow-400 text-xs uppercase tracking-widest mb-4 text-center">
          See AI in Action
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            <h2 className="text-3xl md:text-4xl text-white mb-4 leading-tight">
              AI automatically discovers{" "}
              <span className="text-green-400">hidden customer groups</span>{" "}
              in your data
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Most businesses treat all their customers the same way — same emails,
              same promotions, same messaging. Our AI finds the distinct groups
              already hiding in your data so you can target each one with exactly
              what they respond to.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Know which customers spend big vs. browse cheaply",
                "Send the right offer to the right group — not everyone",
                "Turn your existing data into a targeted growth strategy",
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/case-study/customer-segmentation"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              See the Full Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right — canvas */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-sm font-semibold">Customer Profiling</p>
            <p className="text-green-400 text-xs font-semibold mb-1">
              AI automatically discovers hidden customer groups
            </p>
            <p className="text-xs text-yellow-300 bg-yellow-400/10 border border-yellow-400/30 rounded px-3 py-1 mb-2">
              ⚠ Synthetic data — generated for demonstration.
            </p>
            <canvas
              ref={canvasRef}
              width={660}
              height={480}
              className="rounded-xl w-full border border-gray-800 cursor-crosshair"
              style={{ maxWidth: 660 }}
            />
            <div className="flex items-center gap-4 mt-1">
              <p className={`text-sm tracking-wide ${showReplay ? "text-green-400" : "text-gray-500"}`}>
                {status}
              </p>
              {showReplay && (
                <button
                  onClick={() => resetRef.current()}
                  className="text-xs text-gray-500 border border-gray-700 px-3 py-1 rounded hover:border-yellow-400 hover:text-yellow-400 transition-colors uppercase tracking-widest"
                >
                  ↺ Replay
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
