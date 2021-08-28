import React from 'react';

// Component imports
import Header from './header';
import Search from './Search';
import GameContainer from './GameContainer';
import Footer from './footer';
import Upcoming from './Upcoming';

class App extends React.Component {
  render() {
    return (
      <div className='body'>
        <Header />
        <Search />
        <Upcoming />
        {/* <GameContainer /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
