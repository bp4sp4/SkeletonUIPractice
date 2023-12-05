import React, { useState, useEffect } from "react";
import jsonData from "../../jsondata/dress.json";
import styles from "./dress.module.css";
import defaultImage from "../../img/default.png";
import Nav from "../nav";

const SkeletonLoader = () => {
  // Replace this with your skeleton loading UI
  return (
    <>
      <h1>loading</h1>
      <ul className={styles.skeleton}>
        <li>
          <img className={styles.skitelist} />
          <div className={styles.skeinfo}></div>
        </li>

        <li>
          <img className={styles.skitelist} />
          <div className={styles.skeinfo}></div>
        </li>
        <li>
          <img className={styles.skitelist} />
          <div className={styles.skeinfo}></div>
        </li>
        <li>
          <img className={styles.skitelist} />
          <div className={styles.skeinfo}></div>
        </li>
        <li>
          <img className={styles.skitelist} />
          <div className={styles.skeinfo}></div>
        </li>
        <li>
          <img className={styles.skitelist} />
          <div className={styles.skeinfo}></div>
        </li>

        <div className={styles.info}></div>
      </ul>
    </>
  );
};

const DressList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageError = (event) => {
    event.target.src = defaultImage;
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div>
      <Nav />
      <h1>Dress List</h1>

      <ul className={styles.dress}>
        {jsonData.dress.map((item, index) => (
          <li className={styles.item} key={index}>
            <img
              className={styles.img}
              src={item.image_url}
              alt={`Dress ${index + 1}`}
              onError={handleImageError}
            />
            <div className={styles.info}>
              <p>{item.info_wrap}</p>
              <p>{item.region}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DressList;
