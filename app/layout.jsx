import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sup Buah Soeltan",
  description: "Sup Buah Soeltan - Food are the most precious thing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-900"}>{children}</body>
    </html>
  );
}
