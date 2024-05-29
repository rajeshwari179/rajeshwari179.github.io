import React from 'react';
import styles from "./page.module.css"; // Import your CSS module
import Image from "next/image";

const Projects = ({ project }) => {
  return (
    <div className={styles.project}>
      <div className={styles.top}>
        <Image
          src={project.image}
          alt={project.name}
          layout="fill" // Use fill layout to cover the parent div
          objectFit="cover" // Ensures the image covers the div without distortion
          className={styles.image} // Apply the image class
          priority
        />
      </div>
      <div className={styles.right}>
        <h1>{project.name}</h1>
      </div>
    </div>
  );
};

export default Projects;
