import { aboutText } from "../data";

const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "30+", label: "Projects delivered" },
  { value: "10+", label: "Happy clients" },
  { value: "∞", label: "Cups of coffee" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-[var(--color-surface)]" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-widest mb-3">
              About me
            </p>
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Crafting interfaces that{" "}
              <span className="text-gradient">people love</span>
            </h2>
            <div className="space-y-4">
              {aboutText.map((para, i) => (
                <p key={i} className="text-[var(--color-muted)] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
            >
              Let's work together
              <svg
                className="group-hover:translate-x-1 transition-transform"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6"
              >
                <p className="text-4xl font-extrabold text-gradient mb-1">{stat.value}</p>
                <p className="text-sm text-[var(--color-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
