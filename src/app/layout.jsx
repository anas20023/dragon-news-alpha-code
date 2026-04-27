import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Dragon News",
  description: "Journalism Without Fear or Favour",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
