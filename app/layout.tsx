import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sajjad Hossain | Senior Software QA Engineer",
  description: "Professional portfolio of Md Sajjad Hossain — Senior Software QA Engineer.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}