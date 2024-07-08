import './player.css';

export default function Player({ player }) {
    return (
        <div>
            <h2>{player ? 'Player1' : 'Player2'}</h2>
        </div>
    );
}