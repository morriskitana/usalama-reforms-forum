import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Usalama Reforms Forum — Democratic policing for Kenya",
  description:
    "Usalama Reforms Forum is a Kenyan public policy and research organisation working on security sector governance and reform, police accountability, private security governance and community safety.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
