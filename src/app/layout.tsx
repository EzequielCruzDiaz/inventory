import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Inventory",
  description: "app to administration inventorys",
  keywords: "inventory, administration",
};

const NavItems = [
  { path: "/", text: "Home" },
  { path: "/products", text: "Products" },
  { path: "/admin/products", text: "Admin Products" },
  { path: "/contact", text: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <header className="bg-background border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-primary">
                MiTienda
              </Link>
              <nav>
                {NavItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="text-muted-foreground hover:text-primary mr-2 font-bold text-xl"
                  >
                    {item.text}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="flex-grow">{children}</main>

          <footer className="bg-muted mt-auto">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Sobre Nosotros</h3>
                  <p className="text-muted-foreground">
                    MiTienda es la solución perfecta para gestionar tu negocio
                    online de manera eficiente y efectiva.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Enlaces Rápidos
                  </h3>
                  <ul className="space-y-2">
                    {NavItems.map((item) => (
                      <li key={item.path}>
                        <Link
                          href={item.path}
                          className="text-muted-foreground hover:text-primary"
                        >
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                  <p className="text-muted-foreground">
                    Email: info@mitienda.com
                  </p>
                  <p className="text-muted-foreground">
                    Teléfono: (123) 456-7890
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
                <p>&copy; 2024 MiTienda. Todos los derechos reservados.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
