import './plusCount.css';

export default function PlusCount({ num, handleCount }) {
    return (
        <button onClick={() => handleCount(num)}>{num}</button>
    )
}