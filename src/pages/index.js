import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Stephen Chris</title>
        <meta name="description" content="Stephen Chris | Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.gridContainer}>
        <div className={styles.item1}>1</div>
        <div className={styles.item2}>2</div>
        <div className={styles.item3}>3</div>
        <div className={styles.item4}>4</div>
        <div className={styles.item5}>5</div>
        <div className={styles.item6}>6</div>
        <div className={styles.item7}>6</div>
      </div>
    </>
  );
}
