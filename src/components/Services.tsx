import {
  Search,
  Bot,
  Brain,
  Target,
  TrendingUp,
  Code2,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "網站 SEO 優化",
    description: "提升網站 Google 搜尋排名，增加自然流量。包含技術 SEO、內容優化、關鍵字研究等完整服務。",
    features: ["關鍵字優化", "技術SEO診斷", "內容優化策略"],
    keywords: "SEO優化, 搜尋引擎優化, Google排名, 網站優化",
    featured: false,
  },
  {
    icon: Bot,
    title: "AI SEO 智能優化",
    description: "運用人工智慧技術自動化分析與優化流程。針對 ChatGPT、Perplexity、Google AI Overview 等 AI 搜尋引擎進行智能優化。",
    features: ["AI 內容生成", "智能排名分析", "AI搜尋引擎優化"],
    keywords: "AI SEO, 人工智慧SEO, ChatGPT優化, AI搜尋優化",
    featured: true,
  },
  {
    icon: Brain,
    title: "GEO 生成式引擎優化",
    description: "針對 ChatGPT、Perplexity、Google AI Overview 等生成式 AI 搜尋引擎進行深度優化，讓您的企業在 AI 搜尋時代獲得最大曝光。",
    features: ["AI 搜尋引擎優化", "生成式內容策略", "品牌 AI 能見度提升"],
    keywords: "GEO, 生成式引擎優化, AI SEO, ChatGPT優化, Perplexity優化",
    featured: false,
  },
  {
    icon: Target,
    title: "AEO 答案引擎優化",
    description: "優化網站內容以獲得精選摘要與零點擊搜尋結果。針對語音搜尋、知識圖譜與答案引擎進行結構化資料標記與內容優化。",
    features: ["精選摘要優化", "結構化資料標記", "語音搜尋優化"],
    keywords: "AEO, 答案引擎優化, 精選摘要, 語音搜尋, 零點擊搜尋",
    featured: false,
  },
  {
    icon: TrendingUp,
    title: "傳直銷系統",
    description: "客製化傳直銷管理系統開發，包含完整會員管理、獎金自動計算與業績追蹤功能，支援多層次行銷運作。",
    features: ["會員管理系統", "獎金自動計算", "業績報表分析"],
    keywords: "傳直銷系統, MLM系統, 直銷軟體, 會員管理",
    featured: false,
  },
  {
    icon: Code2,
    title: "AI 輔助軟體開發",
    description: "運用 AI 技術加速軟體開發流程，從需求分析、程式撰寫到測試部署，提供高效率、高品質的客製化軟體開發服務。",
    features: ["AI 程式生成", "客製化系統開發", "快速原型設計"],
    keywords: "AI軟體開發, AI輔助開發, 客製化軟體, 程式開發, AI編程",
    featured: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden" aria-labelledby="services-heading">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="services-heading" className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-wide">專業服務項目</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            六大核心服務，涵蓋SEO、GEO、AEO優化，全方位滿足您的AI搜尋優化需求
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group relative rounded-xl p-6 transition-all duration-500 ${
                service.featured
                  ? "bg-primary text-primary-foreground border border-primary shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                  : "bg-card/80 backdrop-blur-xl border border-border hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
            >
              {/* Corner accents */}
              <div
                className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-lg transition-all duration-300 group-hover:w-6 group-hover:h-6 ${
                  service.featured ? "border-white/70 group-hover:border-white" : "border-primary/60 group-hover:border-primary"
                }`}
              />
              <div
                className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-lg transition-all duration-300 group-hover:w-6 group-hover:h-6 ${
                  service.featured ? "border-white/70 group-hover:border-white" : "border-primary/60 group-hover:border-primary"
                }`}
              />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  service.featured
                    ? "bg-white/20"
                    : "bg-gradient-to-br from-primary/10 to-accent/10"
                }`}
                aria-hidden="true"
              >
                <service.icon className={`w-6 h-6 ${service.featured ? "text-white" : "text-primary"}`} />
              </div>

              {/* Title */}
              <div className="flex items-center justify-between mb-3">
                <h3 className={`font-display text-xl font-semibold ${service.featured ? "text-primary-foreground" : "text-foreground"}`}>
                  {service.title}
                </h3>
                <ArrowUpRight
                  className={`w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                    service.featured ? "text-white/70 group-hover:text-white" : "text-muted-foreground group-hover:text-primary"
                  }`}
                  aria-hidden="true"
                />
              </div>

              {/* Description */}
              <p className={`mb-4 text-sm leading-relaxed ${service.featured ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                {service.description}
              </p>

              {/* Features */}
              <ul className="flex flex-wrap gap-2" aria-label={`${service.title}功能特色`}>
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-xs px-3 py-1 rounded-full ${
                      service.featured
                        ? "bg-white/20 text-white"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hidden keywords for SEO */}
              <meta itemProp="keywords" content={service.keywords} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
