import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import Aurora from "@/components/Aurora";
import NavBar from "@/components/NavBar";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cat-Moments",
  description: "Web Title in layout.tsx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
       <NavBar/>
        <div
          className="absolute inset-0 top-0 z-[-1]"
          style={{ maxHeight: "60vh" }}
        >
          <Aurora
            colorStops={["#eed875", "#dff250", "#ea7d61"]}
            speed={0.2}
            blend={1.3}
          />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
