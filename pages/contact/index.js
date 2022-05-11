import Head from "next/head";
import { Navbar } from "../../components/Navbar";
import styles from "../../styles/Home.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Jan Pierre</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1>Contact page</h1>
        <h1>Contact</h1>
      </main>
    </div>
  );
}
