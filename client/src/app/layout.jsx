import localFont from "next/font/local";
import "./globals.css";
import { UserProvider } from "@/provider/UserProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "income and expence",
  description: "income and expence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
