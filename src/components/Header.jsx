import trollFace from '../assets/troll-face.png'
import './Header.css';

export default function Header() {
    return (
        <header className='header-container'>
            <img src={trollFace} alt="Troll Face Header Logo" className='troll-face-logo' />
            <h2>Meme Generator</h2>
        </header>
    )
}