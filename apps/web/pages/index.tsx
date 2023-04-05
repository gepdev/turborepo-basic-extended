import Head from "next/head";
import { Button } from "ui";

export default function Web() {
  return (
    <>
    <Head>
      <link rel="canonical" href="https://monorepo-design-system.vercel.app/" />
      <meta name="og:title" content="Title di prova" />
      <meta name="og:url" content="https://monorepo-design-system.vercel.app/" />
    </Head>
      <h1>Web</h1>
      <Button />
    </>
  );
}
