const items = [
  { title: "Annual Report to the Voluntary Principles on Security and Human Rights Initiative — 2025", body: "Community engagement in resource-rich regions, capacity building for security actors, and policy advocacy to align national frameworks with international human rights standards; advocacy on violations from mining sites in western Kenya; training for community leaders, civil society, public security personnel and private security providers.", link: "https://www.voluntaryprinciples.org/wp-content/uploads/2026/07/Usalama-Reformsn-Forum-Annual-Report-2025.pdf", label: "Read the 2025 VPI report (PDF)" },
  { title: "Communities and their Police Station — study report", body: "A study on the state of police stations and the criminal justice system in Kenya, shedding light on the capacity of police stations to provide services." },
  { title: "Submissions on policing legislation", body: "Submissions to the Constitution Implementation Commission on the National Police Service Act, the National Police Service Commission Act, the Independent Policing Oversight Authority Act and the Private Security Regulation Act." },
  { title: "Perception surveys & baselines", body: "Perception surveys and baselines on community satisfaction in selected communities in Kenya." },
  { title: "Review of police Service Standing Orders", body: "A review of the Service Standing Orders of the police, listed among Usalama's achievements in its member profile." },
];

const sources = [
  { label: "ICoCA — Usalama Reforms Forum, Kenya (2020)", href: "https://icoca.ch/2020/01/07/pillar-profile-usalama-reforms-forum-kenya/" },
  { label: "ICoCA — Usalama Reforms Forum CSO Profile (2023)", href: "https://icoca.ch/2023/06/01/usalama-reforms-forum-cso-profile/" },
  { label: "Grassroots Justice Network — Usalama Reforms Forum (vision, mission, values)", href: "https://grassrootsjusticenetwork.org/connect/organization/usalama-reforms-forum/" },
  { label: "Private Security Observatory — Usalama Reforms Forum member profile", href: "https://www.privatesecurityobservatory.org/fr/about/members/usalama-reforms-forum.html" },
  { label: "Akvo RSR — Usalama organisation listing", href: "http://rsr.akvo.org/en/organisation/2441/" },
];

export default function Research() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero-inner">
          <h1>Research &amp; publications</h1>
          <p>Evidence that feeds policy — from police stations to parliament.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="grid-2">
            {items.map((i) => (
              <div className="card" key={i.title}>
                <h3>{i.title}</h3>
                <p>{i.body}</p>
                {i.link ? <p style={{ marginTop: 12 }}><a href={i.link} target="_blank" rel="noreferrer">→ {i.label}</a></p> : null}
              </div>
            ))}
          </div>
          <h2 style={{ marginTop: 48 }}>Sources</h2>
          <p className="section-intro">The public profiles this site was built from. The Forum should confirm or replace these with its own publications list before launch.</p>
          <ul>
            {sources.map((s) => (
              <li key={s.href}><a href={s.href} target="_blank" rel="noreferrer">{s.label}</a></li>
            ))}
          </ul>
          <div className="source-note">
            Note: this page deliberately does not claim a publications list the Forum has not
            supplied. Reports named here are those referenced in the public profiles above.
          </div>
        </div>
      </section>
    </>
  );
}
