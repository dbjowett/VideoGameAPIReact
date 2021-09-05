import '../CSS_Files/GameList.css';
// import Skeleton from 'react -loading-skeleton'

const UpcomingGameList = ({ title, gameArray}) => {
  const Games = gameArray.map((game) => {
    console.log(game);
    const cover = game.cover
      ? game.cover.url.replace('t_thumb', 't_cover_big')
      : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

    const dates = game.release_dates.map(rd => new Date(rd.date * 1000));
    const diffInDays = Math.floor((dates[0] - new Date()) / (1000*3600*24));
    
    const releaseDate = (function(){
        if(diffInDays === 0){
          return 'Today'
        }else if(diffInDays === 1){
          return `${diffInDays} Day`
        } else if (diffInDays < 8){
          return `${diffInDays} Days`
        } else {
          return `Err`
        }
    })();

    return (
      <div key={game.id} className='gameItem'>
        <img className='gamePhoto' src={cover} alt={game.name} />
        <div className='gameDesc'>
          <h3>{game.name}</h3>
          <div className='summary'>
            {game.summary ? game.summary.slice(0, 137) : 'No summary available'}
            ...
          </div>
          <div className="gameInfoBox">
            <div className='releaseDate'>{releaseDate}</div>
            {/* <div className='releaseDate'>{}96%</div>
            <div className='releaseDate'>{}RPG</div> */}
          </div>
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

export default UpcomingGameList;
