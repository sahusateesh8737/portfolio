import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Satish Sahu | Full Stack Engineer",
  description: "Portfolio of Satish Sahu, a Full Stack Engineer and B.Tech CSE student at LPU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background text-foreground selection:bg-neon-cyan selection:text-black">
        <Loader />
        <Background />
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
