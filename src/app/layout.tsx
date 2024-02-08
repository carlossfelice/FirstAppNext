import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My first App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>
        <Navigation />
        <div className="container p-4">

          {children}
        </div>
      </body>

    </html>

  );
}
