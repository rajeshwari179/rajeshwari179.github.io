import React from 'react';
import styles from "./page.module.css"; // Import your CSS module
import Image from "next/image";
import dummy from "/src/dummy.jpeg";
const Projects = (project) => {
  return (
    <div className={styles.project}>
      <div className={styles.top}>
          {/* <Image
            src={dummy}
            alt="dummy"
            priority
          /> */}
      </div>
      <div className={styles.right}>
        <h1>project title</h1>
      </div>
    </div>
  )
};
export default Projects;