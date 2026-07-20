import { skills } from "../data";

const categoryColors: Record<string, string> = {
  Languages: "from-violet-500/10 to-violet-500/5 border-violet-500/20",
  "Frameworks & Libraries": "from-sky-500/10 to-sky-500/5 border-sky-500/20",
  "State & Data": "from-emerald-500/10 to-emerald-500/5 border-emerald-500/20",
  Testing: "from-amber-500/10 to-amber-500/5 border-amber-500/20",
  "Tools & DevOps": "from-rose-500/10 to-rose-500/5 border-rose-500/20",
  "Backend Basics": "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20",
};

const categoryDot: Record<string, string> = {
  Languages: "bg-violet-400",
  "Frameworks & Libraries": "bg-sky-400",
  "State & Data": "bg-emerald-400",
  Testing: "bg-amber-400",
  "Tools & DevOps": "bg-rose-400",
  "Backend Basics": "bg-cyan-400",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-widest mb-3">
            Skills
          </p>
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold">
            My tech <span className="text-gradient">stack</span>
          </h2>
          <p className="text-[var(--color-muted)] mt-4 max-w-lg mx-auto">
            Tools and technologies I use day-to-day to build great products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group) => {
            const gradient = categoryColors[group.category] ?? "from-[var(--color-accent)]/10 to-transparent border-[var(--color-accent)]/20";
            const dot = categoryDot[group.category] ?? "bg-[var(--color-accent)]";
            return (
              <div
                key={group.category}
                className={`rounded-2xl border bg-gradient-to-br ${gradient} p-6`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full ${dot}`} aria-hidden="true" />
                  <h3 className="font-semibold text-sm text-[var(--color-text)]">{group.category}</h3>
                </div>
                <ul className="flex flex-wrap gap-2" role="list">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs px-3 py-1 rounded-full bg-[var(--color-bg)]/60 text-[var(--color-muted)] border border-[var(--color-border)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
