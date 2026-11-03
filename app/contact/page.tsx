"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General enquiry");
  const [message, setMessage] = useState("");

  const mailto = `mailto:info@usalamaforum.org?subject=${encodeURIComponent(
    `[Website] ${subject} — ${name}`
  )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;

  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero-inner">
          <h1>Contact us</h1>
          <p>We&apos;d like to hear from communities, partners, researchers and the media.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid-2">
          <div>
            <h2>Get in touch</h2>
            <p><strong>Email:</strong> <a href="mailto:info@usalamaforum.org">info@usalamaforum.org</a></p>
            <p><strong>Location:</strong> Nairobi, Kenya</p>
            <p>
              Public directories have listed different office addresses for
              Usalama over the years, so this site does not publish a street
              address as current — please use email until the Forum confirms
              its present office.
            </p>
            <p>
              Usalama Reforms Forum is a civil society organisation working on
              security sector governance and reform. It is not the government&apos;s
              Jukwaa la Usalama county forums initiative, and it is not
              Usalama Africa (ACSGRE) — a separate organisation.
            </p>
          </div>
          <form className="form card" onSubmit={(e) => { e.preventDefault(); window.location.href = mailto; }}>
            <h3 style={{ marginTop: 0 }}>Send a message</h3>
            <p style={{ color: "var(--muted)", marginTop: 0 }}>This opens your email app addressed to info@usalamaforum.org. No message is stored on this site.</p>
            <label htmlFor="name">Your name</label>
            <input id="name" required value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="email">Your email</label>
            <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="subject">Subject</label>
            <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option>General enquiry</option>
              <option>Partnership</option>
              <option>Research / media</option>
              <option>Community safety programme</option>
            </select>
            <label htmlFor="message">Message</label>
            <textarea id="message" required value={message} onChange={(e) => setMessage(e.target.value)} />
            <button className="btn btn-primary" style={{ marginTop: 20, border: "none", cursor: "pointer", font: "inherit" }} type="submit">Send via email</button>
          </form>
        </div>
      </section>
    </>
  );
}
