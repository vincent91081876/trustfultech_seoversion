import { Mail, Linkedin } from "lucide-react";

const team = [
  {
    name: "張信之",
    role: "執行長 / 創辦人",
    bio: "擁有超過15年網路科技與數位行銷經驗，帶領團隊深耕SEO與AI搜尋優化領域。",
    initial: "張",
  },
  {
    name: "Antony",
    role: "技術總監",
    bio: "專精於AI技術應用與系統架構設計，主導GEO與AEO核心優化技術研發。",
    initial: "A",
  },
  {
    name: "Jimmy",
    role: "SEO 策略顧問",
    bio: "資深SEO策略專家，協助超過300家企業客戶提升搜尋排名與品牌能見度。",
    initial: "J",
  },
  {
    name: "Vincent",
    role: "AI 內容策略師",
    bio: "專注於生成式AI內容策略，擅長打造符合AI搜尋引擎偏好的優質內容。",
    initial: "V",
  },
  {
    name: "jecy",
    role: "系統開發工程師",
    bio: "全端開發專家，負責客製化傳直銷系統與AI輔助軟體開發專案。",
    initial: "j",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden" aria-labelledby="team-heading">
      <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="team-heading" className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-wide">專業團隊介紹</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            五位核心成員，結合技術與策略，為您提供最專業的AI搜尋優化服務
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6" role="list">
          {team.map((member, index) => (
            <article
              key={member.name}
              className="group bg-card/80 backdrop-blur-xl border border-border rounded-xl p-6 text-center transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
            >
              {/* Avatar frame */}
              <div className="relative w-24 h-24 mx-auto mb-4 p-1 border-2 border-border group-hover:border-primary/60 transition-colors overflow-hidden rounded-lg">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                  <span className="font-display text-3xl font-bold text-primary">
                    {member.initial}
                  </span>
                </div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-primary" />
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-primary mb-3 font-medium">{member.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {member.bio}
              </p>

              <div className="flex justify-center gap-3 pt-3 border-t border-border">
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`聯絡 ${member.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
