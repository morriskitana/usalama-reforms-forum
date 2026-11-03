import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <span className="eyebrow">Kenya · East Africa · Est. 2008</span>
          <h1>Democratic policing for Kenya: our security, our agenda.</h1>
          <p className="lede">
            Usalama Reforms Forum brings citizens, civil society and security
            institutions together so that security agencies serve the people —
            and are accountable to them.
          </p>
          <div className="btn-row">
            <Link href="/about" className="btn btn-primary">Who we are</Link>
            <Link href="/focus-areas" className="btn btn-ghost">What we work on</Link>
          </div>
          <div className="hero-meta">
            <div><strong>2008</strong>Founded as a coalition</div>
            <div><strong>2016</strong>Registered as an organisation</div>
            <div><strong>Nairobi</strong>Based in Kenya, working regionally</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="quote">
            <p>“Reformed Kenyan security agencies serve the people and are accountable to them.”</p>
            <cite>— Vision of Usalama Reforms Forum</cite>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Our mission</h2>
          <p className="section-intro">
            Ensure citizens&apos; participation in security sector reform and its
            implementation — through policy development, strategic partnerships,
            research, innovation and community engagement.
          </p>
          <div className="grid-3">
            <div className="card">
              <div className="icon">⚖️</div>
              <h3>Police reform &amp; accountability</h3>
              <p>Advocating for professional, accountable policing and effective oversight mechanisms.</p>
            </div>
            <div className="card">
              <div className="icon">🛡️</div>
              <h3>Private security governance</h3>
              <p>Working for responsible private security, including implementation of the Private Security Regulation Act, 2016.</p>
            </div>
            <div className="card">
              <div className="icon">🤝</div>
              <h3>Community safety</h3>
              <p>A people-centred Community Safety Model that strengthens the bond between police and the public.</p>
            </div>
            <div className="card">
              <div className="icon">🔍</div>
              <h3>Evidence-based research</h3>
              <p>Studies on police stations and the criminal justice system, perception surveys and baselines on community satisfaction.</p>
            </div>
            <div className="card">
              <div className="icon">⚖️</div>
              <h3>Human rights in security</h3>
              <p>Promoting human rights, accountability and responsible security practice — including in extractive and high-risk sectors.</p>
            </div>
            <div className="card">
              <div className="icon">🌍</div>
              <h3>Policy &amp; partnership</h3>
              <p>Building partnerships with oversight bodies, government, the private sector and civil society across East Africa.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>How we work</h2>
          <p className="section-intro">
            Usalama is a coordination and campaigning space for Kenyan and
            international civil society actors interested in security sector
            and police reform — not a security provider itself.
          </p>
          <div className="grid-2">
            <div className="card">
              <h3>With communities</h3>
              <p>Community policing programmes, community safety forums and engagement with police stations, community organisations and special interest groups.</p>
            </div>
            <div className="card">
              <h3>With institutions</h3>
              <p>Engagement with the National Police Service, the National Police Service Commission, the Independent Policing Oversight Authority, the Internal Affairs Unit and other oversight and policy actors.</p>
            </div>
            <div className="card">
              <h3>With the private security sector</h3>
              <p>Training, awareness and monitoring around international standards, and harmonising the training curriculum for Kenya&apos;s private security industry.</p>
            </div>
            <div className="card">
              <h3>With evidence</h3>
              <p>Research that feeds policy — from submissions on policing legislation to studies on the capacity of police stations to provide services.</p>
            </div>
          </div>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link href="/community-safety" className="btn btn-primary">Explore the Community Safety Model</Link>
            <Link href="/contact" className="btn" style={{ border: "1px solid var(--line)" }}>Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
