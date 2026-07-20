import { experience } from "../data";

const WorkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  </svg>
);

const EduIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

export default function Experience() {
  return (
    <section id="experience" className="section-padding" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-widest mb-3">
            Background
          </p>
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-[var(--color-border)]"
            aria-hidden="true"
          />

          <ol className="space-y-10" aria-label="Experience and education timeline">
            {experience.map((item, idx) => (
              <li key={idx} className="relative pl-16">
                {/* Icon bubble */}
                <div
                  className={`absolute left-0 w-10 h-10 rounded-full border flex items-center justify-center ${
                    item.type === "work"
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                      : "border-sky-500/50 bg-sky-500/10 text-sky-400"
                  }`}
                  aria-hidden="true"
                >
                  {item.type === "work" ? <WorkIcon /> : <EduIcon />}
                </div>

                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-bold text-base">{item.role}</h3>
                      <p className="text-sm text-[var(--color-accent)] font-medium">{item.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium text-[var(--color-muted)]">{item.period}</p>
                      <p className="text-xs text-[var(--color-muted)]">{item.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5" role="list">
                    {item.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-sm text-[var(--color-muted)] leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/60 flex-shrink-0" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
