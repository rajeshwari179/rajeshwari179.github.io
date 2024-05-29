import React from "react";
import Image from "next/image";
import styles from "./Page.module.css"; // Import the CSS module
import dummy from "/src/dummy.jpeg"; // Import your image
import githubIcon from "/src/git.webp"; // Import your GitHub icon
import linkedinIcon from "/src/linkedin.png"; // Import your LinkedIn icon
import cvIcon from "/src/cv.png"; // Import your CV icon
import gt from "/src/gt.png"; // Import your GT icon
import iit from "/src/iit.png"; // Import your IIT icon
const Page = () => {
  const skills = [
    "Python", "C/C++", "HTML", "CSS", "JavaScript", "React", "Node.js", 
    "OpenCV", "CUDA", "OpenMP", "SQL", "MPI", "Git", "Matlab", 
    "Solidworks", "Ansys", "Pytorch", "Tensorflow", "Pandas", "NumPy"
  ]; // Define your skills here

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.left}>
          <Image src={dummy} alt="dummy" priority className={styles.leftImg} />
          <div className={styles.socialIcons}>
            <a href="https://github.com/rajeshwari179" target="_blank" rel="noopener noreferrer">
              <Image src={githubIcon} alt="GitHub" width={65} height={65} />
            </a>
            <a href="https://www.linkedin.com/in/rajeshwari-devaramani-b887891b6/" target="_blank" rel="noopener noreferrer">
              <Image src={linkedinIcon} alt="LinkedIn" width={65} height={65} />
            </a>
            <a href="https://www.linkedin.com/in/rajeshwari-devaramani-b887891b6/" target="_blank" rel="noopener noreferrer">
              <Image src={cvIcon} alt="CV" width={65} height={65} />
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <p>As the zephyr gently whispered through the ziggurat's corridors, a cacophony of razzle-dazzle and hullabaloo erupted among the inhabitants. Squizzles scurried about, their dinglehoppers clinking with each wobble of their gait, while flibbertigibbets fluttered overhead, leaving trails of zonked quokkas in their wake. Amidst the fandango of jibber-jabber and kerfuffle, the snizzle of pizzazz filled the air, blending with the zonk of wumpuses and the occasional fizzle of brouhahas. In this whimsical world of zephyrs and quibbles, every moment was a razzmatazz of zonked zephyrs and flibbertigibbets, a testament to the zany nature of the universe.</p>
        </div>
      </div>
      <div className={styles.educationSection}>
        <h2>Education</h2>
        <div className={styles.educationContainer}>
          
          <div className={styles.educationBox}>
          <Image src={gt} alt="GT" width={65} height={65} />
          <h5>Georgia Institute of Technology</h5>
            <h4>MS, Computaional Science and engineering</h4>
            
            <h1>2023 - 2025</h1>
            <h2>Relevant Courses: </h2> 
            <p>CSE Algorithms, Computational Data Analysis, High performance Parallel Computing Tools, Computer Vision, Modelling Simulation, Computational Problem Solving, Numerical Algorithms for Data Analytics  </p>

          </div>
          <div className={styles.educationBox}>
          <Image src={iit} alt="IIT" width={65} height={65} />
          <h6>Indian Institute of Technology, Dharwad</h6>
            <h4>B Tech, Mechanical engineering     </h4>
            <h4>Minor: Artificial Intelligence and Data Science </h4>
            
            <h3>2019 - 2023</h3>
            <h2>Relevant Courses: </h2>
            <p> Calculus, Linear Algebra, Differential Equations, Mathematics for Data Science Probability Models and Applications, Data Structures and Algorithms, Elements of Programming,Computer Programming, Data Analysis,Artificial Intelligence,Pattern Recognition and Machine Learning,Parallel Computing, </p>
          </div>
        </div>
      </div>
      <div className={styles.skillsSection}>
        <h2>Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillBox}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
