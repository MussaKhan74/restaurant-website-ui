import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "/img/featured4.jpg",
    "/img/featured2.jpg",
    "/img/featured3.jpg",
    "/img/featured1.jpg",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 0);
    }
    if (direction === "r") {
      setIndex(index !== 3 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src='/img/arrowl.png' alt='' layout='fill' objectFit='contain' />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translate(${-100 * index}vw)` }}
      >
        {images.map((image, index) => {
          return (
            <div className={styles.imgContainer} key={index}>
              <Image src={image} alt='' layout='fill' objectFit='contain' />
            </div>
          );
        })}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src='/img/arrowr.png' alt='' layout='fill' objectFit='contain' />
      </div>
    </div>
  );
};

export default Featured;
