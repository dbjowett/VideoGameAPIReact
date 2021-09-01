import '../CSS_Files/GameList.css';
// import Skeleton from 'react -loading-skeleton'

const SearchedGameList = ({ title, gameArray}) => {
  
  const filteredGameList = gameArray.filter((game)=>{
    return game.category === 0||1||2||3||4;
  })

  const Games = filteredGameList.map((game) => {
    const release = new Date(game.first_release_date*1000);
    const releaseYear = release.getFullYear();
    
  const cover = game.cover
    ? game.cover.url.replace('t_thumb', 't_cover_big') : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';


    return (
      <div key={game.id} className='gameItem'>
        <img className='gamePhoto' src={cover} alt={game.name} />
        <div className='gameDesc'>
          <h3>{game.name}</h3>
          <div className='summary'>
            {game.summary ? game.summary.slice(0, 137) : 'No summary available'}...
          </div>
          <div className="gameInfoBox">
            <div className='releaseDate'>{releaseYear}</div>
            <div className='releaseDate'>{}96%</div>
            <div className='releaseDate'>{}RPG</div>
          </div>
        </div>
      </div>
    );
  });
  //End of Map Function

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

export default SearchedGameList;
