import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar/Navbar";
import AppContainer from "./components/AppContainer/AppContainer";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raghav Mattad : Software Developer",
  description: "Welcome to my Professional Software Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <AppContainer>
            <Navbar />
            <div className="px-5 lg:px-20 xl:px-40">{children}</div>
            <Footer />
          </AppContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
