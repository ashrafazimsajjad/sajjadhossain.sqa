import "./globals.css";

export const metadata = {
  title: "Sajjad Hossain | Senior Software QA Engineer",
  description: "Professional portfolio of Md Sajjad Hossain — Senior Software QA Engineer.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}