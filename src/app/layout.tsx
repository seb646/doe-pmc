import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from '../app/components/nav';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DOE PMCs",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-gray-900">
      <body className="h-full">
      <div>
        <Nav />

        <div className="xl:pl-72">
            {children}
        </div>
    </div>
        {/* <Nav /> */}
        {/* {children} */}
        
      </body>
    </html>
  );
}
