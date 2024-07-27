import { useState, useEffect } from "react";
import styles from "./Particle.module.css";

function Particle({ radius }) {
  const [x, setX] = useState(Math.random() * window.innerWidth);
  const [y, setY] = useState(Math.random() * window.innerHeight);

  useEffect(() => {
    const eventListener = window.addEventListener("resize", () => {
      setX(Math.random() * window.innerWidth);
      setY(-(radius * 2));
    });
  }, [x]);

  useEffect(() => {
    setTimeout(() => {
      if (y > window.innerHeight) {
        setX(Math.random() * window.innerWidth);
        setY(-(radius * 2));
      } else {
        setY(y + 1);
      }
    }, 1);
  }, [x, y]);

  return (
    <img
      className={styles.particle}
      src="particle.svg"
      width={radius * 2}
      height={radius * 2}
      style={{ left: `${x}px`, top: `${y}px` }}
    />
  );
}

export default Particle;
