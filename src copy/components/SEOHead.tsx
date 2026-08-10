import { useEffect } from "react";

const SEOHead = () => {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "智信網路科技有限公司",
      "alternateName": "Zhixin Network Technology Co., Ltd.",
      "url": "https://zhixin.com.tw",
      "logo": "https://zhixin.com.tw/logo.png",
      "description": "智信網路科技提供網站SEO優化、AI SEO、GEO生成式引擎優化、AEO答案引擎優化、傳直銷系統及軟硬體安裝等全方位搜尋優化解決方案。",
      "foundingDate": "2014",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+886-2-XXXX-XXXX",
        "contactType": "customer service",
        "availableLanguage": ["Chinese", "English"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TW",
        "addressLocality": "台灣"
      },
      "sameAs": [],
      "areaServed": {
        "@type": "Country",
        "name": "Taiwan"
      }
    };

    // LocalBusiness Schema for better local SEO
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "智信網路科技有限公司",
      "image": "https://zhixin.com.tw/logo.png",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TW"
      },
      "telephone": "+886-2-XXXX-XXXX",
      "url": "https://zhixin.com.tw",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    };

    // Service Schema for each service
    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "智信網路科技服務項目",
      "itemListElement": [
        {
          "@type": "Service",
          "position": 1,
          "name": "網站SEO優化",
          "description": "提升網站搜尋引擎排名，包含關鍵字優化、技術SEO診斷、內容優化策略，增加自然流量，讓潛在客戶輕鬆找到您。",
          "provider": { "@type": "Organization", "name": "智信網路科技" },
          "serviceType": "Search Engine Optimization",
          "areaServed": "Taiwan"
        },
        {
          "@type": "Service",
          "position": 2,
          "name": "AI SEO智能優化",
          "description": "運用人工智慧技術進行SEO分析與優化，包含AI內容生成、智能排名分析、自動化優化流程，提升效率與成效。",
          "provider": { "@type": "Organization", "name": "智信網路科技" },
          "serviceType": "AI-Powered SEO",
          "areaServed": "Taiwan"
        },
        {
          "@type": "Service",
          "position": 3,
          "name": "GEO生成式引擎優化",
          "description": "針對ChatGPT、Perplexity、Google AI Overview等生成式AI搜尋引擎進行優化。運用AI技術建構品牌權威性內容，讓企業在AI搜尋時代獲得最大曝光。",
          "provider": { "@type": "Organization", "name": "智信網路科技" },
          "serviceType": "Generative Engine Optimization",
          "areaServed": "Taiwan"
        },
        {
          "@type": "Service",
          "position": 4,
          "name": "AEO答案引擎優化",
          "description": "優化網站內容以獲得精選摘要與零點擊搜尋結果。針對語音搜尋、知識圖譜與答案引擎進行結構化資料標記與內容優化。",
          "provider": { "@type": "Organization", "name": "智信網路科技" },
          "serviceType": "Answer Engine Optimization",
          "areaServed": "Taiwan"
        },
        {
          "@type": "Service",
          "position": 5,
          "name": "傳直銷系統開發",
          "description": "客製化傳直銷管理系統，包含完整會員管理、獎金自動計算、業績報表分析與追蹤功能。",
          "provider": { "@type": "Organization", "name": "智信網路科技" },
          "serviceType": "MLM System Development",
          "areaServed": "Taiwan"
        },
        {
          "@type": "Service",
          "position": 6,
          "name": "軟硬體安裝服務",
          "description": "專業的軟硬體建置服務，從系統安裝設定、網路架設到設備維護保養，提供一站式解決方案。",
          "provider": { "@type": "Organization", "name": "智信網路科技" },
          "serviceType": "IT Installation Services",
          "areaServed": "Taiwan"
        }
      ]
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "什麼是AI SEO？與傳統SEO有什麼不同？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI SEO是運用人工智慧技術來分析、優化網站搜尋引擎排名的新型態SEO服務。與傳統SEO相比，AI SEO能夠更快速地分析大量數據、自動生成優化內容、預測搜尋趨勢，並針對AI搜尋引擎（如ChatGPT、Perplexity）進行優化，讓您的品牌在新時代搜尋中保持領先。"
          }
        },
        {
          "@type": "Question",
          "name": "什麼是GEO生成式引擎優化？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GEO（Generative Engine Optimization）是針對ChatGPT、Perplexity、Google AI Overview等生成式AI搜尋引擎的優化技術。與傳統SEO針對Google搜尋排名不同，GEO著重於讓AI引擎在生成答案時引用您的品牌內容，建立品牌權威性與可見度。"
          }
        },
        {
          "@type": "Question",
          "name": "什麼是AEO答案引擎優化？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AEO（Answer Engine Optimization）是針對精選摘要（Featured Snippets）、語音搜尋與知識圖譜的優化技術。透過結構化資料標記、FAQ頁面優化與精準答案內容，讓您的網站在零點擊搜尋中獲得曝光，搶占搜尋結果最頂端位置。"
          }
        },
        {
          "@type": "Question",
          "name": "智信網路科技的服務範圍包括哪些？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "我們提供六大核心服務：1. 網站SEO優化 2. AI SEO智能優化 3. GEO生成式引擎優化 4. AEO答案引擎優化 5. 傳直銷系統開發 6. 軟硬體安裝與維護。從諮詢到執行，提供一站式搜尋優化解決方案。"
          }
        },
        {
          "@type": "Question",
          "name": "SEO優化需要多久才能看到成效？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO是長期投資，一般而言，基礎優化後3-6個月可開始看到排名提升，6-12個月可見顯著成效。具體時間取決於競爭程度、網站現況、內容品質等因素。AI SEO、GEO與AEO可加速部分流程，但仍需持續優化以維持排名。"
          }
        }
      ]
    };

    // WebSite Schema for sitelinks search box
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "智信網路科技",
      "url": "https://zhixin.com.tw",
      "description": "智信網路科技有限公司 - 網站SEO優化、AI SEO、GEO生成式引擎優化、AEO答案引擎優化、傳直銷系統開發專家",
      "publisher": {
        "@type": "Organization",
        "name": "智信網路科技有限公司"
      }
    };

    // Add all schemas to head
    const schemas = [organizationSchema, localBusinessSchema, servicesSchema, faqSchema, websiteSchema];
    
    schemas.forEach((schema, index) => {
      const existingScript = document.getElementById(`schema-${index}`);
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement("script");
      script.id = `schema-${index}`;
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`schema-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
};

export default SEOHead;
