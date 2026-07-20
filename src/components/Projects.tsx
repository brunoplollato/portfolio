import { useState } from "react";
import { projects } from "../data";

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.021C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

type Filter = "all" | "featured";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="section-padding bg-[var(--color-surface)]" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-widest mb-3">
            Projects
          </p>
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold">
            Things I've <span className="text-gradient">built</span>
          </h2>
          <p className="text-[var(--color-muted)] mt-4 max-w-lg mx-auto">
            A selection of personal and professional projects. Each one was an opportunity to solve a real problem.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-3 mb-10" role="group" aria-label="Filter projects">
          {(["all", "featured"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${
                filter === f
                  ? "bg-[var(--color-accent)] text-white"
                  : "border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-accent)]/50"
              }`}
              aria-pressed={filter === f}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 card-hover"
            >
              {project.featured && (
                <span className="self-start text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/30 mb-4">
                  Featured
                </span>
              )}
              <h3 className="font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1 mb-5">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 mb-5" role="list" aria-label="Technologies used">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-muted)]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
                >
                  <GitHubIcon />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
                >
                  <ExternalLinkIcon />
                  Live demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
