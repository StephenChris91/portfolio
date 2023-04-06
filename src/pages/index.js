import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

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
          />
          <GridItem
            gridRowStart={1}
            gridRowEnd={2}
            gridColumnStart={1}
            gridColumnEnd={3}
          />
          <GridItem
            backgroundColor="#7D977E"
            gridRowStart={2}
            gridRowEnd={3}
            gridColumnStart={1}
            gridColumnEnd={2}
          />
          <GridItem
            gridRowStart={2}
            gridRowEnd={3}
            gridColumnStart={2}
            gridColumnEnd={4}
          />
          <GridItem
            gridRowStart={3}
            gridRowEnd={4}
            gridColumnStart={1}
            gridColumnEnd={3}
          />
          <GridItem
            gridRowStart={2}
            gridRowEnd={3}
            gridColumnStart={4}
            gridColumnEnd={5}
          />
          <GridItem
            gridRowStart={3}
            gridRowEnd={4}
            gridColumnStart={3}
            gridColumnEnd={5}
          />
          {isLoaded && [...Array()].map((_, index) => <GridItem key={index} />)}
        </div>
      </div>
    </>
  );
}
