import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand" aria-label="Usalama Reforms Forum — home">
          <img src="/logo.webp" alt="The Usalama Reforms Forum" className="brand-logo" />
        </Link>
        <nav className="nav" aria-label="Main navigation">
          <Link href="/about">About</Link>
          <Link href="/focus-areas">Focus areas</Link>
          <Link href="/community-safety">Community safety</Link>
          <Link href="/research">Research</Link>
          <Link href="/contact" className="cta">Contact us</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <h4>Usalama Reforms Forum</h4>
          <p>
            Democratic policing for Kenya: our security, our agenda.
            A Kenyan public policy and research organisation working on
            security sector governance and reform in Kenya and East Africa.
          </p>
          <p>Nairobi, Kenya · <a href="mailto:info@usalamaforum.org">info@usalamaforum.org</a></p>
        </div>
        <div>
          <h4>Explore</h4>
          <p><Link href="/about">About Usalama</Link></p>
          <p><Link href="/focus-areas">Focus areas</Link></p>
          <p><Link href="/research">Research &amp; publications</Link></p>
          <p><Link href="/community-safety">Community Safety Model</Link></p>
        </div>
        <div>
          <h4>Frameworks</h4>
          <p>UN Guiding Principles on Business and Human Rights</p>
          <p>Montreux Document</p>
          <p>International Code of Conduct for Private Security Providers</p>
          <p>Voluntary Principles on Security and Human Rights</p>
          <p>Private Security Regulation Act, 2016</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Usalama Reforms Forum. All rights reserved.</span>
          <span>Content drawn from public profiles — see About page sources.</span>
        </div>
      </div>
    </footer>
  );
}
