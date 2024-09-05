import { Inter } from "next/font/google";
import "./globals.css";

import {GoogleTagManager} from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agador Spartacus Development",
  description: "Agador Spartacus is a dynamic, expanding real estate development firm with a portfolio that includes a wealth of office, multifamily, residential, hotel and retail commercial properties.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <GoogleTagManager gtmId="G-N9XH694YBL" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
