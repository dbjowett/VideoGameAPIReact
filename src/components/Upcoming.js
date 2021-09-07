import igdb from '../api/igdb';
import React, { useState, useEffect } from 'react';
import UpcomingGameList from './UpcomingGameList';

const oneWeek = 604800;
const timeNow = Math.floor(Date.now() / 1000);
const Upcoming = () => {
  const [games, setGames] = useState([]);

  const options = {
    method: 'POST',
    data: `
          fields name, release_dates.*, summary, cover.*; where platforms= (6,48,49,130, 169,167) & cover != null &category = 0 & first_release_date != n & first_release_date >${timeNow} & first_release_date < ${timeNow + oneWeek}; sort first_release_date asc; limit 100;
              `,
    url: 'https://api.igdb.com/v4/games/',
  };
  useEffect(() => {
    igdb(options).then((res) => {
      const filteredList = res.data.filter((game) => game.cover !== undefined);
      setGames(filteredList);
    });
  }, []);

  return (
    <div>
      <UpcomingGameList title='Upcoming (7 days)' gameArray={games} />
    </div>
  );
};

export default Upcoming;

// "proxy": "https://api.igdb.com",
