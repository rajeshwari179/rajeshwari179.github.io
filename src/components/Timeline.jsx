import React from 'react';
import Image from 'next/image';
import styles from './Timeline.module.css';

const TimelineEvent = ({ title, date, description, image, position }) => {
  return (
    <div className={`${styles.container} ${position === 'left' ? styles.left : styles.right}`}>
      <Image src={image} alt={title} className={styles.Image} width={60} height={60} />
      <div className={styles.textBox}>
        <h2>{title}</h2>
        <small>{date}</small>
        <p>{description}</p>
        
      </div>
    </div>
  );
};

const Timeline = ({ events }) => {
  return (
    <div className={styles.timeline}>
      {events.map((event, index) => (
        <TimelineEvent 
          key={index}
          title={event.title}
          date={event.date}
          description={event.description}
          image={event.image}
          position={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
};

export default Timeline;
