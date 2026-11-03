const areas = [
  { title: "Police reform & accountability", body: "Advocating for police reforms, professionalism and accountability, and for oversight mechanisms that make reform stick." },
  { title: "Oversight mechanisms", body: "Working with and alongside oversight institutions — including IPOA, the National Police Service Commission and the Internal Affairs Unit." },
  { title: "Private security governance", body: "Promoting responsible private security: the ICoCA Code, the Montreux Document and effective implementation of the Private Security Regulation Act, 2016, including a harmonised training curriculum." },
  { title: "Community safety", body: "The Community Safety Model: people-centred policing, community policing policies and stronger police–public trust." },
  { title: "Crime & violence prevention", body: "Evidence-based research on crime and violence prevention, and on strengthening community safety models and access to justice." },
  { title: "Human rights & responsible security", body: "The UN Guiding Principles on Business and Human Rights and the Voluntary Principles on Security and Human Rights — including training and engagement in extractive and high-risk sectors." },
  { title: "Policy development", body: "Submissions and advocacy on policing legislation, and policy work to align national frameworks with international human rights standards." },
  { title: "Countering violent extremism", body: "Community resilience work — including the 2016 pilot in Eastleigh (Nairobi), Garissa town and Kondele (Kisumu) on reducing radicalisation and strengthening institutional engagement." },
];

export default function FocusAreas() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero-inner">
          <h1>Focus areas</h1>
          <p>Security sector governance and reform, pursued from the community level to national policy.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="grid-2">
            {areas.map((a) => (
              <div className="card" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
          <h2 style={{ marginTop: 48 }}>International frameworks we work with</h2>
          <ul className="pill-list">
            <li>UN Guiding Principles on Business and Human Rights (UNGPs)</li>
            <li>Montreux Document on Private Military and Security Companies</li>
            <li>International Code of Conduct for Private Security Service Providers (ICoCA Code)</li>
            <li>Voluntary Principles on Security and Human Rights (VPs)</li>
            <li>Private Security Regulation Act, 2016 (Kenya)</li>
          </ul>
        </div>
      </section>
    </>
  );
}
