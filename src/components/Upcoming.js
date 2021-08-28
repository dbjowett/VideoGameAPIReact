import igdb from '../api/igdb';
import React, { useState, useEffect } from 'react';
import GameList from './GameList';

const oneWeek = 604800;
const timeNow = Math.floor(Date.now() / 1000);

const Upcoming = () => {
  const [games, setGames] = useState([]);

  const options = {
    method: 'POST',
    data: `
          fields name, release_dates.human, summary, cover.*; where platforms= (48,49,130) & first_release_date != n & first_release_date >${timeNow} & first_release_date < ${
      timeNow + oneWeek
    }; sort first_release_date asc; limit 100;
              `,
    url: '/v4/games/',
  };
  useEffect(() => {
    igdb(options).then((res) => {
      console.log(res.data);
      setGames(res.data);
    });
  }, []);

  return (
    <div>
      <GameList title='Upcoming' gameArray={games} />
    </div>
  );
};

export default Upcoming;
