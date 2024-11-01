import type { Metadata } from "next";
import "./globals.css";
import { titlefont } from "./fonts/titlefonts";
import Header from "./components/nav/header";
import Footer from "./components/nav/footer";

export const metadata: Metadata = {
  title: "Inventory",
  description: "app to administration inventorys",
  keywords: "Inventory, Administration, Users,Shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lang">
      <body className={titlefont.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
