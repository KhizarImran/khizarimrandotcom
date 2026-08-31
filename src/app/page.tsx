import Nav from "./nav";

const experience = [
  { company: "MGroup Energy", role: "Software Developer", period: "Jun 2024 – Present", detail: "Full-stack development, AI/ML integration, AWS infrastructure" },
  { company: "Klaro-tech", role: "Founder", period: "2024 – Present", detail: "SaaS for algorithmic traders" },
  { company: "University of Dundee", role: "BSc Biomedical Science", period: "2020 – 2023", detail: "2:1 Honours" },
];

const skills = [
  { group: "Language", items: ["Python", "TypeScript", "SQL", "Rust"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "FastAPI", "PostgreSQL", "Redis"] },
  { group: "AI / ML", items: ["PyTorch", "Claude API", "RAG", "Fine-tuning"] },
  { group: "Infrastructure", items: ["AWS", "Docker", "Proxmox", "Vercel", "Linux"] },
  { group: "Workflow", items: ["Neovim", "Claude Code", "Git", "Arch Linux"] },
];

const projects = [
  { name: "backtestingfx", lang: "Rust", detail: "Backtesting FX strategies on OHLCV data", url: "https://github.com/KhizarImran/backtestingfx" },
];

const links = [
  { name: "GitHub", handle: "@KhizarImran", url: "https://github.com/KhizarImran" },
  { name: "Twitter / X", handle: "@khzrimrn", url: "https://x.com/khzrimrn" },
  { name: "LinkedIn", handle: "/in/khizar-imran-uk", url: "https://linkedin.com/in/khizar-imran-uk" },
  { name: "Medium", handle: "@khizarimran", url: "https://medium.com/@khizarimran" },
];

// ponytail: public proxy for GitHub's contribution calendar (the official one needs a PAT).
// If it ever dies, the graph just disappears. Swap for the GraphQL API + token if that matters.
async function getContributions() {
  try {
    const r = await fetch("https://github-contributions-api.jogruber.de/v4/KhizarImran?y=last", {
      next: { revalidate: 86400 },
    });
    if (!r.ok) return null;
    return (await r.json()) as { total: { lastYear: number }; contributions: { date: string; level: number }[] };
  } catch {
    return null;
  }
}

export default async function Home() {
  const contrib = await getContributions();

  return (
    <div className="wrap">
      <Nav />

      <main>
        <section className="intro">
          <p>
            Software developer based in Newcastle, UK. I build full-stack products, integrate AI/ML systems,
            and design cloud infrastructure on AWS. Currently at{" "}
            <a href="https://mgroupltd.com" target="_blank" rel="noopener noreferrer">MGroup Energy</a>{" "}
            and founder of{" "}
            <a href="https://klaro-tech.com" target="_blank" rel="noopener noreferrer">Klaro-tech</a>,
            a SaaS platform for algorithmic traders.
          </p>
        </section>

        {contrib && (
          <section className="section">
            <div className="graph-head">
              <p className="section-label" style={{ marginBottom: 0 }}>GitHub</p>
              <span className="graph-total">{contrib.total.lastYear} contributions in the last year</span>
            </div>
            <div className="graph-scroll">
              <div className="graph">
                {contrib.contributions.map((d) => (
                  <i key={d.date} data-level={d.level} title={`${d.date}`} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section">
          <p className="section-label">Software</p>
          <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "var(--text-2)", marginBottom: "14px", borderTop: "1px solid var(--border)", paddingTop: "10px" }}>
            I have a background in biology and data science with strong foundations in statistical analysis and experimental design.
          </p>
          <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "var(--text-2)", marginBottom: "14px" }}>
            I run a quant finance lab — building end-to-end pipelines from data gathering and strategy experimentation through to live market deployment.
          </p>
          <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "var(--text-2)", marginBottom: "14px" }}>
            My homelab runs virtual environments for website hosting, machine learning experiments, and infrastructure testing.
          </p>
          <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "var(--text-2)", marginBottom: "14px" }}>
            I enjoy building AI frameworks and exploring new technology as it emerges.
          </p>
          <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "var(--text-2)", marginBottom: "14px" }}>
            Currently running Arch Linux with omarchy as my daily driver.
          </p>
          <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "var(--text-2)", marginBottom: "14px" }}>
            Trying to dabble with Rust 🦀 
          </p>
        </section>

        <section className="section">
          <p className="section-label">Experience</p>
          <ul className="row-list">
            {experience.map((e) => (
              <li key={e.company} className="row-item">
                <div className="row-left">
                  <div className="row-name">
                    {e.company}{" "}
                    <span style={{ fontWeight: 400, color: "var(--text-3)" }}>— {e.role}</span>
                  </div>
                  <div className="row-sub">{e.detail}</div>
                </div>
                <span className="row-right">{e.period}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <p className="section-label">Skills</p>
          <div className="skill-grid">
            {skills.map((s) => (
              <div key={s.group}>
                <p className="skill-group">{s.group}</p>
                <ul className="skill-list">
                  {s.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="section-label">Projects</p>
          <ul className="row-list">
            {projects.map((p) => (
              <li key={p.name} className="row-item">
                <div className="row-left">
                  <div className="row-name">
                    <a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>
                  </div>
                  <div className="row-sub">{p.detail}</div>
                </div>
                <span className="row-right">{p.lang}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <p className="section-label">Elsewhere</p>
          <ul className="row-list">
            {links.map((l) => (
              <li key={l.name} className="row-item">
                <div className="row-name">
                  <a href={l.url} target="_blank" rel="noopener noreferrer">{l.name}</a>
                </div>
                <span className="row-right">{l.handle}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Khizar Imran</p>
      </footer>
    </div>
  );
}
