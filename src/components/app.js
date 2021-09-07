import React from 'react';
import Header from './header';
import Search from './Search';
// import GameContainer from './GameContainer';
import Footer from './footer';
import Upcoming from './Upcoming';
// import GamePage from './GamePage';

class App extends React.Component {
  render() {
    return (
      <div className='body'>
        <Header />
        {/* <GamePage/> */}
        <Search />
        <Upcoming />
        {/* <GameContainer /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
