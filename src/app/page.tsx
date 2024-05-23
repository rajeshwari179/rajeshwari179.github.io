import React from "react";
import styles from "./page.module.css"; // Import your CSS module
import dummy from "/src/dummy.jpeg"; // Import your image
import githubIcon from "/src/git.webp"; // Import your GitHub icon
import linkedinIcon from "/src/linkedin.png"; // Import your LinkedIn icon
import cvIcon from "/src/cv.png"; // Import your LinkedIn icon
import Image from "next/image";


const Page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <Image src={dummy} alt="dummy" priority />
        <div className={styles.socialIcons}>
          <a href="https://github.com/rajeshwari179" target="_blank" rel="noopener noreferrer">
            <Image src={githubIcon} alt="GitHub" width={65} height={65} />
          </a>
          <a href="https://www.linkedin.com/in/rajeshwari-devaramani-b887891b6/" target="_blank" rel="noopener noreferrer">
            <Image src={linkedinIcon} alt="LinkedIn" width={65} height={65} />
          </a>
          <a href="https://www.linkedin.com/in/rajeshwari-devaramani-b887891b6/" target="_blank" rel="noopener noreferrer">
            <Image src={cvIcon} alt="LinkedIn" width={65} height={65} />
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <p>Hello, whatsup?</p>
      </div>
    </div>
  );
};

export default Page;
