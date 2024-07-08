import {useState} from 'react';
import Count from './count';
import PlusCount from './pluscount';
import Player from './player';
import './count.css';
import './game.css';

export default function Game() {
    const [count, setCount] = useState(0);
    const [player, setPlayer] = useState(true);

    function handleCount(num) {
        setCount(prevState => prevState + num);
    }

    function handlePlayer() {
        setPlayer(prevState => !prevState);
    }

    function handleClick(num) {
        if (count < 31) {
            handleCount(num);
            handlePlayer();
        }
    }
    
    function handleReset() {
        setCount(0);
        setPlayer(true);
    }

    function handleWin() {
        if (count >= 31) {
            return <h2>{player ? 'Player1' : 'Player2'}が勝ちです</h2>;
        }
    }
  return (
    <div className="game">
        <div>
        <h1>31ゲーム</h1>
        </div>
        <div>
            <Count num={count}/>
        </div>
            <Player player={player}/>
        <div>
            <PlusCount num={1} handleCount={handleClick}/>
            <PlusCount num={2} handleCount={handleClick}/>
            <PlusCount num={3} handleCount={handleClick}/>
        </div>
        <div>
            <button onClick={handleReset}>Reset</button>
        </div>
        <div>
            {handleWin()}
        </div>
    </div>
  )
}