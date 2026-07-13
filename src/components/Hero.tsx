import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.18)_0%,transparent_70%)] opacity-70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 grid-pattern opacity-[0.07]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <article className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-muted-foreground">台灣領先的數位轉型專家</span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-heading"
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="gradient-text-wide">智信網路科技</span>
            <br />
            <span className="text-foreground">SEO・GEO・AEO 優化專家</span>
          </h1>

          {/* Subheadline */}
          <p
            className="font-mono text-sm md:text-base text-primary/80 tracking-[0.2em] uppercase mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            // AI-Powered Search Optimization for the Next Era //
          </p>

          <p
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "0.25s" }}
          >
            從傳統 SEO 到 GEO 生成式引擎優化，從 AEO 答案引擎到 AI 智能排名。
            智信網路科技提供全方位搜尋優化解決方案，助您的企業在 AI 搜尋時代脫穎而出。
          </p>

          {/* CTA Buttons */}
          <nav
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
            aria-label="主要行動"
          >
            <Button variant="cyber" size="xl" asChild>
              <a href="#contact">
                <span className="inline-block skew-x-[12deg]">
                  免費諮詢
                  <ArrowRight className="w-5 h-5 inline-block ml-2" aria-hidden="true" />
                </span>
              </a>
            </Button>
            <Button variant="cyber-outline" size="xl" asChild>
              <a href="#services">
                <span className="inline-block skew-x-[12deg]">了解服務項目</span>
              </a>
            </Button>
          </nav>

        </article>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </section>
  );
};

export default Hero;
