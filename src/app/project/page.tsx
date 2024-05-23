import React from 'react';
import styles from "../../components/projects/page.module.css"; 
import Projects from "../../components/projects/page.jsx" // Import your CSS module


const Project = () => {
    const projects = [
        {
            name: 'Project 1',
            description: 'Description 1',
            image: '/src/dummy.jpeg',
        },
        {
            name: 'Project 2',
            description: 'Description 2',
            image: '/src/dummy.jpeg',
        },
        {
            name: 'Project 3',
            description: 'Description 3',
            image: '/src/dummy.jpeg',
        },
        {
            name: 'Project 4',
            description: 'Description 4',
            image: '/src/dummy.jpeg',
        },
        {
            name: 'Project 5',
            description: 'Description 5',
            image: '/src/dummy.jpeg',
        }
    ];
    
return (
  <div className={styles.gallery}>
  
  <Projects project={projects[0]} />
  <Projects project={projects[1]} />
  <Projects project={projects[2]} />
  <Projects project={projects[3]} />
  <Projects project={projects[4]} />
  
  
  </div>

);
};
export default Project;