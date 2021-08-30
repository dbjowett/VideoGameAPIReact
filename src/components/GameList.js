import '../CSS_Files/GameList.css';
// import Skeleton from 'react -loading-skeleton'

const GameList = ({ title, gameArray }) => {
  const Games = gameArray.map((game) => {
    const cover = game.cover
      ? game.cover.url.replace('t_thumb', 't_cover_big')
      : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

    const timeNow = Math.floor(Date.now() / 1000);
    const dates = game.release_dates.map((rd) => {
      // let multi = rd.date * 1000;
      console.log(rd.date - timeNow);
      return new Date(rd.date * 1000);
    });

    console.log(dates[0]);

    const release = game.release_dates[0].human
      ? game.release_dates[0].human.split(',')[0]
      : 'Hello';
    console.log('//////////////////////NEW game');
    return (
      <div key={game.id} className='gameItem'>
        <img className='gamePhoto' src={cover} alt={game.name} />
        <div className='gameDesc'>
          <h3>{game.name}</h3>
          <div className='summary'>
            {game.summary ? game.summary.slice(0, 137) : 'No summary available'}
            ...
          </div>
          <div className='releaseDate'>{release}</div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className='gameContainerTitle'>
        <span className='line'></span>
        <h1>{title}</h1>
      </div>
      <div className='gameContainer'>{Games}</div>
    </div>
  );
};

export default GameList;
