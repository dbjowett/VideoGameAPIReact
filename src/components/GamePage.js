import React from 'react';

const GamePage = () => {
    return (
    <div>
        <div className="hero">
            <img src="" alt="" />
            <img src="" alt="" />
            <div className="gameTitle">The Witcher 3: The Wild Hunt</div>
        </div>
        <div className="gameInfo">
            <ul className="gameInfoItems">
                <li className="info">Rating: 95%</li>
                <li className="info">Release: Sept 2017</li>
                <li className="info">Players: 1</li>
                <li className="info">Genre: Role-Playing Game</li>
            </ul>
            <ul className="platformInfo">
                Platforms
                <li className="gamePlatform">PS5</li>
                <li className="gamePlatform">Xbox</li>
                <li className="gamePlatform">PS4</li>
                <li className="gamePlatform">Xbox Series</li>
                <li className="gamePlatform">PC</li>
            </ul>
        </div>
        <div className="mediaInfo">
            <div className="screenshots">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div className="videos">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    </div>
    )
}

export default GamePage;