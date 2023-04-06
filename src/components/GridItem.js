import { useSpring, animated } from "react-spring";
import styles from "../styles/Home.module.css";

const GridItem = ({
  gridRowStart,
  gridRowEnd,
  gridColumnStart,
  gridColumnEnd,
}) => {
  const [animation, setAnimation] = useSpring(() => ({
    to: { transform: "translateY(0px)" },
    from: { transform: "translateY(-500px)" },
    delay: Math.floor(Math.random() * 1000),
    config: { friction: 20, tension: 100 },
  }));

  return (
    <animated.div
      style={{
        ...animation,
        gridRowStart,
        gridRowEnd,
        gridColumnStart,
        gridColumnEnd,
      }}
      className={styles.gridItem}
    />
  );
};

export default GridItem;
