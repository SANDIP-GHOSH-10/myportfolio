import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Sandip Portfolio",
//   description: "Welcome to my portfolio. I am a Front End  Developer with expertise in Next.js, React, and more.",
//   keywords: ["Next.js, React, Web Developer, Portfolio, JavaScript, Front End "],
//   openGraph : {
//     title: "Sandip Ghosh | Front End Developer",
//     description : "Explore the profesonal project and skills of Sandip Ghosh",
//     url:"",
//     siteName:"Sandip Ghosh Portfolio",

//   }
// };


export const metadata: Metadata = {
  title: "Sandip Ghosh | Front End  Developer Portfolio",
  description: "Explore the professional portfolio of Sandip Ghosh, a skilled Front End  developer specializing in Next.js, React, and modern web technologies.",
  keywords: ["Sandip Ghosh", "Portfolio", "Full Stack Developer", "Next.js", "React", "Web Developer"],
  metadataBase: new URL("https://myportfolio-kmub.vercel.app/"),
  openGraph: {
    title: "Sandip Ghosh | Front End  Developer",
    description: "Explore the professional projects and skills of Sandip Ghosh.",
    url: "https://myportfolio-kmub.vercel.app/",
    siteName: "Sandip Ghosh Portfolio",
    images: [
      {
        url: "https://myportfolio-kmub.vercel.app//og-image.png",  
        width: 1200,
        height: 630,
        alt: "Sandip Ghosh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
