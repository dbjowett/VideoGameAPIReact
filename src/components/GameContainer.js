import React from 'react';

class GameContainer extends React.Component {
    render(){
        return (
        <div className="gameContainer">
            <div className="gameItem">
                <img className="gamePhoto" src="https://static2.thegamerimages.com/wordpress/wp-content/uploads/2020/01/Witcher-3-Geralt-1.jpg" alt="witcher3" srcset=""/>
                <div className="gameDesc">
                    <h3>Witcher 3</h3>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo voluptates ullam, fugiat dolorem sunt! Repellat natus qui quasi debitis?</div>
                </div>
            </div>

            <div className="gameItem">
                <img className="gamePhoto" src="https://nintendotimes.com/wp-content/uploads/2017/06/Zelda-BOTW-DLC-Art-4.jpg" alt="zelda" srcset=""/>
                <div className="gameDesc">
                    <h3>Zelda</h3>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo voluptates ullam, fugiat dolorem sunt! Repellat natus qui quasi debitis?</div>
                </div>
            </div>

            <div className="gameItem">
                <img className="gamePhoto" src="https://cdn.ome.lt/6lwKW5wuznlCqzVmSagPLQb8RBY=/1200x630/smart/extras/conteudos/mbope_full.jpg" alt="fifa20" srcset=""/>
                <div className="gameDesc">
                    <h3>FIFA 21</h3>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo voluptates ullam, fugiat dolorem sunt! Repellat natus qui quasi debitis?
                        
                    </div>
                </div>
            </div>

            <div className="gameItem">
                <img className="gamePhoto" src="https://assets1.ignimgs.com/2019/05/17/slay-the-spire---button-fin-1558131878931.jpg?fit=bounds&dpr=1&quality=75&width=188px" alt="slay-the-spire" srcset=""/>
                <div className="gameDesc">
                    <h3>Slay the Spire</h3>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo voluptates ullam, fugiat dolorem sunt! Repellat natus qui quasi debitis?</div>
                </div>
            </div>
        </div>
    )
        }
    }

export default GameContainer;