import volantino from './assets/volantino.jpg'
import './Home.css'

export default function Home(){
    return(
    <>
        <h1>Benvenuto al PratiCinema!</h1>
        <img src={volantino} className='mainImg'></img> 
    </>);
}