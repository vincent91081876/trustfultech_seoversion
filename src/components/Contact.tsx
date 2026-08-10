import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* CTA Card */}
          <article className="relative bg-card/80 backdrop-blur-xl border-2 border-primary rounded-xl p-8 md:p-12 overflow-hidden shadow-[0_0_40px_hsl(var(--primary)/0.15)]">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-primary/40 uppercase tracking-widest">
              Terminal_Input: v4.2.0
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Info */}
              <div>
                <h2
                  id="contact-heading"
                  className="font-display text-3xl md:text-5xl font-black mb-6 uppercase leading-tight"
                >
                  準備好提升
                  <br />
                  <span className="text-primary">您的數位競爭力？</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  無論您是想提升 Google 搜尋排名、優化 GEO 生成式引擎曝光，還是強化 AEO 答案引擎能見度，
                  智信網路科技的專業團隊都能為您量身打造最適合的解決方案。
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 font-mono text-sm">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-primary/60 text-xs uppercase">[TEL]</div>
                      <a href="tel:0918953119" className="text-foreground hover:text-primary transition-colors">
                        0918-953-119
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 font-mono text-sm">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-primary/60 text-xs uppercase">[COM]</div>
                      <a href="mailto:trustfultech8899@gmail.com" className="text-foreground hover:text-primary transition-colors">
                        trustfultech8899@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 font-mono text-sm">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-primary/60 text-xs uppercase">[LOC]</div>
                      <span className="text-foreground">臺中市北區忠明路502-1號7樓</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 font-mono text-sm">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-primary/60 text-xs uppercase">[AREA]</div>
                      <span className="text-foreground">台灣全區服務</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: CTA */}
              <div className="flex flex-col justify-center">
                <div className="p-8 bg-secondary/50 rounded-xl border border-border">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    立即預約免費諮詢
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    留下您的聯絡方式，我們的專業顧問將在24小時內與您聯繫。
                  </p>
                  <Button variant="cyber" size="xl" className="w-full" asChild>
                    <a href="mailto:trustfultech8899@gmail.com">
                      <span className="inline-block skew-x-[12deg]">
                        <Send className="w-5 h-5 inline-block mr-2" aria-hidden="true" />
                        立即聯繫我們
                      </span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
