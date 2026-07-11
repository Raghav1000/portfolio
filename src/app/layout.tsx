import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/Navbar/Navbar";
import AppContainer from "./components/AppContainer/AppContainer";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raghav Mattad — Full Stack Developer",
  description:
    "Full-stack developer with 3+ years of experience building scalable web and cloud-based solutions. React, Node.js, Go, GCP & AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
          <AppContainer>
            <Navbar />
            <main className="w-full min-w-0 max-w-content mx-auto px-5 lg:px-12">
              {children}
            </main>
            <Footer />
          </AppContainer>
      </body>
    </html>
  );
}
