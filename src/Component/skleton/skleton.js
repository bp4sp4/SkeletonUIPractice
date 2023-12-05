import React from "react";
import styles from "./Component/skleton.css";

const Skeleton = () => {
  //
  return (
    <li className={styles.skeletontem}>
      <div>
        <div className={styles.skeletonimg}></div>
      </div>
      <div className={styles.skeletoninfo}>
        <p className={styles.skeletonname}></p>
        <p className={styles.skeletonemail}></p>
      </div>
    </li>
  );
};
