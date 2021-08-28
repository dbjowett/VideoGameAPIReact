import React, { useEffect, useState } from 'react';
import igdb from '../api/igdb';
import GameList from './GameList';

const Search = () => {
  const [term, setSearch] = useState('');
  const [results, setResult] = useState([]);

  const options = {
    method: 'POST',
    data: `search "${term}"; fields name, summary, cover.*; limit 20;`,
    url: '/v4/games/',
  };

  /// Start of UseEffect
  useEffect(() => {
    const search = async () => {
      const { data } = await igdb(options);
      setResult(data);
    };

    let timeoutID = 0;
    if (term && !results.length) {
      search();
    } else {
      const timeoutID = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);
    }

    return () => {
      clearTimeout(timeoutID);
    };
  }, [term]);
  ///End of UseEffect

  return (
    <div>
      <div>
        <form className='searchBox'>
          <input
            type='text'
            placeholder='Search for games..'
            value={term}
            onChange={(e) => setSearch(e.target.value)}
          />
          <a href='foo.com'>
            <i className='fa fa-search fa-lg'></i>
          </a>
        </form>
      </div>
      <GameList title='Search Results' gameArray={results} />
    </div>
  );
};

export default Search;
