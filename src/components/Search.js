import React, { useEffect, useState } from 'react';
import igdb from '../api/igdb';
import SearchedGameList from './SearchedGameList';

const Search = () => {
  const [term, setSearch] = useState('');
  const [results, setResult] = useState([]);
  const [visible, setVisible] = useState(true);

  const options = {
    method: 'POST',
    data: `search "${term}"; fields name, first_release_date, total_rating, summary, category, cover.url; where rating != null & category = 0;  limit 20;`,
    url: '/v4/games/',
  };

  /// Start of UseEffect
  useEffect(() => {
    term.length && results.length > 0 ? setVisible(true) : setVisible(false);

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
      }, 100);
    }

    return () => {
      clearTimeout(timeoutID);
    };
  }, [term]);
  ///End of  UseEffect

  return (
    <div>
      <div>
        <form
          className='searchBox'
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(term);}}
          >
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
      {visible ? <SearchedGameList title='Search' gameArray={results} /> : null}
    </div>
  );
};

export default Search;
