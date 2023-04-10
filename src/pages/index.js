import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

//components
import GridItem from "@/components/GridItem";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>Stephen Chris | Frontend Developer</title>
        <meta name="description" content="Stephen Chris | Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.gridWrapper}>
        <div className={styles.gridContainer}>
          <GridItem
            gridRowStart={1}
            gridRowEnd={2}
            gridColumnStart={3}
            gridColumnEnd={5}
            className={styles.firstCol}
          >
            <h1>this is a title</h1>
          </GridItem>
          <GridItem
            gridRowStart={1}
            gridRowEnd={2}
            gridColumnStart={1}
            gridColumnEnd={3}
            background="linear-gradient(115.38deg, rgba(255, 255, 255, 0.075) -20.68%, rgba(255, 255, 255, 0.0125) 99.62%)"
          >
            <div className={styles.profileContainer}>
              <Image
                src="/profile.jpg"
                alt="profile"
                height={200}
                width={200}
                className={styles.profileImage}
              />
              <div className={styles.profileInfo}>
                <p className={styles.profileTitle}>FRONTEND DEVELOPER</p>
                <h2 className={styles.profileName}>STEPHEN CHRIS</h2>
                <p className={styles.details}>
                  I am a Frontend Developer based in United Kingdom
                </p>
              </div>
              <Image
                src="/button.png"
                alt="profile button"
                height={35}
                width={35}
                className={styles.profileButton}
              />
            </div>
          </GridItem>
          <GridItem
            gridRowStart={2}
            gridRowEnd={3}
            gridColumnStart={1}
            gridColumnEnd={2}
            background="linear-gradient(115.38deg, rgba(255, 255, 255, 0.075) -20.68%, rgba(255, 255, 255, 0.0125) 99.62%)"
          />
          <GridItem
            gridRowStart={2}
            gridRowEnd={3}
            gridColumnStart={2}
            gridColumnEnd={4}
            background="linear-gradient(115.38deg, rgba(255, 255, 255, 0.075) -20.68%, rgba(255, 255, 255, 0.0125) 99.62%)"
          />
          <GridItem
            gridRowStart={3}
            gridRowEnd={4}
            gridColumnStart={1}
            gridColumnEnd={3}
            background="linear-gradient(115.38deg, rgba(255, 255, 255, 0.075) -20.68%, rgba(255, 255, 255, 0.0125) 99.62%)"
          />
          <GridItem
            gridRowStart={2}
            gridRowEnd={3}
            gridColumnStart={4}
            gridColumnEnd={5}
            background="linear-gradient(115.38deg, rgba(255, 255, 255, 0.075) -20.68%, rgba(255, 255, 255, 0.0125) 99.62%)"
          />
          <GridItem
            gridRowStart={3}
            gridRowEnd={4}
            gridColumnStart={3}
            gridColumnEnd={5}
            background="linear-gradient(115.38deg, rgba(255, 255, 255, 0.075) -20.68%, rgba(255, 255, 255, 0.0125) 99.62%)"
          />
        </div>
      </div>
    </>
  );
}
