import Nav from "./nav";

const experience = [
  { company: "MGroup Energy", role: "Software Engineer", period: "Jun 2024 – Present", detail: "Full-stack development, AI/ML integration, AWS infrastructure" },
  { company: "Klaro-tech", role: "Founder", period: "2024 – Present", detail: "SaaS for algorithmic traders" },
  { company: "University of Dundee", role: "BSc Biomedical Science", period: "2020 – 2023", detail: "2:1 Honours" },
];

const links = [
  { name: "GitHub", handle: "@KhizarImran", url: "https://github.com/KhizarImran" },
  { name: "Twitter / X", handle: "@khizarimran_", url: "https://twitter.com/khizarimran_" },
  { name: "LinkedIn", handle: "/in/khizarimran", url: "https://linkedin.com/in/khizarimran" },
  { name: "Medium", handle: "@khizarimran", url: "https://medium.com/@khizarimran" },
];

export default function Home() {
  return (
    <div className="wrap">
      <Nav />

      <main>
        <section className="intro">
          <p>
            Software engineer based in Newcastle, UK. I build full-stack products, integrate AI/ML systems,
            and design cloud infrastructure on AWS. Currently at{" "}
            <a href="https://mgroupltd.com" target="_blank" rel="noopener noreferrer">MGroup Energy</a>{" "}
            and founder of{" "}
            <a href="https://klaro-tech.com" target="_blank" rel="noopener noreferrer">Klaro-tech</a>,
            a SaaS platform for algorithmic traders.
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
        <p>© 2025 Khizar Imran</p>
      </footer>
    </div>
  );
}
