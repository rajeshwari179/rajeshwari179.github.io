import React from 'react';
import Timeline from '../../components/Timeline';
import gt from "/src/gt.jpeg";
import at from "/src/at.png";
import iit from "/src/iit.jpeg";


const events = [
  {
    title: 'XYX.',
    date: '2018 - 2019',
    description: 'plorkel. Splatnik hoover drangle zibbity zap quizzle brangwaddle. Frobb',
    image: gt
  },
  {
    title: 'ABC',
    date: '2019 - 2020',
    description: '  plorkel. Splatnik hooverdy floop, zindle snarfle doodleclomp.',
    image: at
  },
  {
    title: 'DEF',
    date: '2020 - 2021',
    description: 'Further details about another significant event in the timeline.',
    image: iit
  },
  {
    title: 'Yet Another Company',
    date: '2020 - 2021',
    description: 'Further details about another significant event in the timeline.',
    image: gt
  },
  {
    title: 'Yet Another Company',
    date: '2020 - 2021',
    description: 'Further details about another significant event in the timeline.',
    image: gt
  },
  {
    title: 'Yet Another Company',
    date: '2020 - 2021',
    description: 'Further details about another significant event in the timeline.'
  },
  {
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
