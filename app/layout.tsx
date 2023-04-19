import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "./providers";

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: "Movie Theater",
  description: "A movie theater app built with Next.js and Tailwind CSS",
};

const inter = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
