import { Link } from "react-router-dom";
import logoAsset from "@/assets/zhixin-logo.png.asset.json";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background" role="contentinfo">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-transparent p-1"
              aria-hidden="true"
            >
              <img
                src={logoAsset.url}
                alt="智信網路科技 Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-display font-semibold text-foreground">
              智信網路科技有限公司
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 智信網路科技有限公司 All rights reserved.
          </p>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6" aria-label="頁尾導覽">
            <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              服務項目
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              關於我們
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              聯絡我們
            </a>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              隱私權政策
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              服務條款
            </Link>
          </nav>
        </div>

        {/* SEO Footer Text */}
        <div className="mt-6 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground/70">
            智信網路科技提供專業的網站SEO優化、AI SEO、GEO生成式引擎優化、AEO答案引擎優化、傳直銷系統開發及AI輔助軟體開發服務。
            服務範圍涵蓋台灣全區，致力於協助企業在AI搜尋時代脫穎而出。
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
