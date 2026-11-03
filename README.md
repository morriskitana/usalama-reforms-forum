# Usalama Reforms Forum — Website

A modern Next.js website for Usalama Reforms Forum, a Kenyan public policy
and research organisation working on security sector governance and reform.

## What this site is

A draft rebuild, built from public sources (see below). It is **not** an
official publication of the Forum until the Forum confirms its current
leadership, programmes, publications and contact details.

- Home, About, Focus areas, Community Safety Model, Research, Contact
- No backend, no database, no tracking. The contact form composes a mailto
  link to `info@usalamaforum.org` — nothing is stored on the site.
- Logo: the wordmark in the header is a placeholder. Replace it with the
  Forum's official logo file when supplied. The low-resolution image uploaded
  for this build (300×169, black background) was not used as a logo.

## Deliberate non-claims

- No street address is published: public directories list at least two
  different historical office addresses (Nine Planets Apartments, Kabarnet
  Road; and Hurlingham Plaza, Argwings Kodhek Road). Email + Nairobi is used
  until the Forum confirms its present office.
- No current staff list or team size is published: the ICoCA profile's
  "four officers" figure is dated and may no longer hold.
- Usalama Reforms Forum is **not** the government's Jukwaa la Usalama county
  forums initiative (2025), **not** Usalama Africa / ACSGRE, and **not** the
  2014 MPs' Usalama Kenya Forum. The Contact page says this explicitly.

## Sources

- ICoCA, "USALAMA REFORMS FORUM, KENYA" (2020): https://icoca.ch/2020/01/07/pillar-profile-usalama-reforms-forum-kenya/
- ICoCA, "USALAMA REFORMS FORUM – CSO PROFILE" (2023): https://icoca.ch/2023/06/01/usalama-reforms-forum-cso-profile/
- Grassroots Justice Network profile (vision, mission, values): https://grassrootsjusticenetwork.org/connect/organization/usalama-reforms-forum/
- Private Security Observatory member profile: https://www.privatesecurityobservatory.org/fr/about/members/usalama-reforms-forum.html
- Voluntary Principles 2025 annual report (PDF): https://www.voluntaryprinciples.org/wp-content/uploads/2026/07/Usalama-Reformsn-Forum-Annual-Report-2025.pdf
- Akvo RSR organisation listing: http://rsr.akvo.org/en/organisation/2441/

## Develop

```bash
npm install
npm run dev
npm run build
```

## Deploy

Deployed on Vercel from this repository. No environment variables required.
