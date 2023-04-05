import Head from "next/head";
import { Button } from "ui";

export default function Web() {
  return (
    <>
    <Head>
      <meta name="og:title" content="Title di prova" />
      <meta name="og:url" content="https://example.com" />
    </Head>
      <h1>Web</h1>
      <Button />
    </>
  );
}
