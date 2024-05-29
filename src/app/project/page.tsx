import React from 'react';
import styles from "../../components/projects/page.module.css"; 
import Projects from "../../components/projects/page.jsx"; // Import your CSS module
import sift from "/src/sift.png";
import graph from "/src/graph.jpg";
import svd from "/src/svd.png";
import modsim from "/src/modsim.png";
import cda from "/src/cda.png";
import particle from "/src/particle.jpeg";
const Project = () => {
    const projects = [
        {
            name: 'Project 1',
            description: 'Description 1',
            image: sift,
        },
        {
            name: 'Project 2',
            description: 'Description 2',
            image: graph,
        },
        ,
        {
            name: 'Project 5',
            description: 'Description 5',
            image: cda,
        },
        {
            name: 'Project 3',
            description: 'Description 3',
            image: particle,
        },
        {
            name: 'Project 3',
            description: 'Description 3',
            image: modsim,
        },
        {
            name: 'Project 4',
            description: 'Description 4',
            image: svd,
        }
    ];

    return (
        <div className={styles.gallery}>
            {projects.map((project, index) => (
                <Projects key={index} project={project} />
            ))}
        </div>
    );
};

export default Project;
