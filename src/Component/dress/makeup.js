import React, { useState, useEffect } from "react";
import jsonData from "../../jsondata/makeup.json";
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
const MakeupList = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = (event) => {
    event.target.src = defaultImage;
  };

  useEffect(() => {
    // Simulate loading data (replace with actual data fetching logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        // Load the entire dataset when scrolled to the bottom
        // Modify this logic based on your actual data fetching mechanism
        // e.g., you may need to implement pagination or fetch more data from an API
        console.log("Load more data...");

        // For the example, let's simulate loading the entire dataset after 2 seconds
        setTimeout(() => {
          // Replace this with actual data fetching logic if needed
          console.log("Data loaded!");
        }, 2000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) {
    // Render skeleton UI while loading
    return <SkeletonLoader />;
  }

  return (
    <div>
      <Nav />
      <h1>Makeup List</h1>

      <ul className={styles.dress}>
        {jsonData.makeup.map((item, index) => (
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

export default MakeupList;
