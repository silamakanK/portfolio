import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr" data-theme="dark">
      <Head>
        <meta name="theme-color" content="#020617" />
      </Head>
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
