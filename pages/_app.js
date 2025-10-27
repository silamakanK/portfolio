import "@/styles/globals.css";
import Head from "next/head";
import { Inter, Fira_Code } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { LocaleProvider } from "@/context/LocaleContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Silamakan KAMISSOKO | Lead Développeur Full Stack</title>
        <meta
          name="description"
          content="Portfolio de Silamakan KAMISSOKO, Lead Développeur Full Stack en alternance à l’EEMI Paris."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LocaleProvider>
        <ThemeProvider>
          <div
            className={`${inter.variable} ${firaCode.variable} bg-[var(--background)] text-[var(--foreground)]`}
          >
            <Navbar />
            <main className="mx-auto min-h-screen w-full max-w-6xl px-4 pb-16 pt-28 font-sans md:px-8">
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </LocaleProvider>
    </>
  );
}
