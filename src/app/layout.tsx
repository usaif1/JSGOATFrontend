// dependencies
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

// imports
import "./globals.css";
import "./components/NavbarPrimary/navbarprimary.css";
import { ThemeProvider } from "./components";

/**
 * defining custom font
 * to be used throughout the whole app hence added to the body
 */
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "JSGOAT",
  description: "Frontend interview preparation",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <main>
          <ThemeProvider>
            {children}
            <footer className="w-full bg-white px-4 sm:pl-64">
              i am the footer
            </footer>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
