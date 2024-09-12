import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agador Spartacus Development",
  description: "Agador Spartacus is a dynamic, expanding real estate development firm with a portfolio that includes a wealth of office, multifamily, residential, hotel and retail commercial properties.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Insertar el script de Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','G-N9XH694YBL');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Insertar iframe de Google Tag Manager */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-N9XH694YBL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
