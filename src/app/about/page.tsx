import React from 'react';
import Timeline from '../../components/Timeline';
import gt from "/src/gt.jpeg";
import at from "/src/at.png";
import iit from "/src/iit.jpeg";


const events = [
  { 
    role: 'Computational Neuroscience Researcher',
    title: 'Georgia Institute of Technology',
    date: 'May 2024 - Present',
    description: 'plorkel. Splatnik hoover drangle zibbity zap quizzle brangwaddle. Frobb',
    image: gt
  },
  {
    role: 'Teaching Assistant,CSE Algorithms',
    title: 'Georgia Institute of Technology',
    date: 'Jan 2024 - May 2024',
    description: '  plorkel. Splatnik hooverdy floop, zindle snarfle doodleclomp.',
    image: at
  },
  {
    role: 'Machine Learning and Simulations, Coop',
    title: 'Altair Engineering',
    date: 'August 2022 - May 2023',
    description: 'Further details about another significant event in the timeline.',
    image: iit
  },
  {
    role: 'Summer Internship, Machine Learning',
    title: 'Altair Engineering',
    date: 'May 2022 - July 2022',
    description: 'Further details about another significant event in the timeline.',
    image: gt
  },
  {
    role: 'Computaional Mechanics Researcher',
    title: 'Indian Institute of Science',
    date: '2020 - 2021',
    description: 'Further details about another significant event in the timeline.',
    image: gt
  },
  {
    role: 'Software Engineer',
    title: 'Yet Another Company',
    date: '2020 - 2021',
    description: 'Further details about another significant event in the timeline.'
  },
  {
    role: 'Software Engineer',
    title: 'Yet Another Company',
    date: '2020 - 2021',
    description: 'Flibberty floo jabberwocky wibble wazzle. Gloober snazzle frindle bork glimsnatch, trabble fizzy plorkel. Splatnik hoover drangle zibbity zap quizzle brangwaddle. Frobble snoozle wogglesnort cribbledy floop, zindle snarfle doodleclomp.details about another significant event in the timeline.'
  },

  // Add more events as needed
];

const Home: React.FC = () => {
  return (
    <div>
      <Timeline events={events} />
    </div>
  );
};

export default Home;
