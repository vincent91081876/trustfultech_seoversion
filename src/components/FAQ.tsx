import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "什麼是 AI SEO？與傳統 SEO 有什麼不同？",
    answer: "AI SEO 是運用人工智慧技術來分析、優化網站搜尋引擎排名的新型態 SEO 服務。與傳統 SEO 相比，AI SEO 能夠更快速地分析大量數據、自動生成優化內容、預測搜尋趨勢，並針對 AI 搜尋引擎（如 ChatGPT、Perplexity、Google AI Overview）進行優化，讓您的品牌在新時代搜尋中保持領先。",
  },
  {
    question: "什麼是 GEO 生成式引擎優化？",
    answer: "GEO（Generative Engine Optimization）是針對 ChatGPT、Perplexity、Google AI Overview 等生成式 AI 搜尋引擎的優化技術。與傳統 SEO 針對 Google 搜尋排名不同，GEO 著重於讓 AI 引擎在生成答案時引用您的品牌內容，建立品牌權威性與可見度。",
  },
  {
    question: "什麼是 AEO 答案引擎優化？",
    answer: "AEO（Answer Engine Optimization）是針對精選摘要（Featured Snippets）、語音搜尋與知識圖譜的優化技術。透過結構化資料標記、FAQ 頁面優化與精準答案內容，讓您的網站在零點擊搜尋中獲得曝光，搶占搜尋結果最頂端位置。",
  },
  {
    question: "智信網路科技的服務範圍包括哪些？",
    answer: "我們提供六大核心服務：1. 網站 SEO 優化 2. AI SEO 智能優化 3. GEO 生成式引擎優化 4. AEO 答案引擎優化 5. 傳直銷系統開發 6. AI 輔助軟體開發。從諮詢到執行，提供一站式搜尋優化解決方案。",
  },
  {
    question: "SEO 優化需要多久才能看到成效？",
    answer: "SEO 是長期投資，一般而言，基礎優化後 3-6 個月可開始看到排名提升，6-12 個月可見顯著成效。具體時間取決於競爭程度、網站現況、內容品質等因素。AI SEO、GEO 與 AEO 可加速部分流程，但仍需持續優化以維持排名。",
  },
  {
    question: "如何針對 AI 搜尋引擎優化我的網站？",
    answer: "AI 搜尋引擎優化需要：1. 提供清晰、結構化的內容 2. 使用 Schema.org 結構化資料 3. 建立專業且可信的品牌聲譽 4. 確保內容準確且有價值 5. 優化 FAQ 頁面讓 AI 能直接引用回答。我們的 GEO 與 AEO 服務會全面協助您完成這些優化。",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden" aria-labelledby="faq-heading">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="faq-heading" className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-wide">常見問題</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            關於我們服務的常見疑問解答
          </p>
        </header>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/80 backdrop-blur-xl border border-border rounded-xl px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-[0_0_20px_hsl(var(--primary)/0.1)] transition-all"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
