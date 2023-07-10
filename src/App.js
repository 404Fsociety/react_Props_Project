import './App.css';
import Footer from './Footer';
import Navigation from './Navigation';
import PlayerList from './PlayerList';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <img style={{height:"600px",width:"94%",marginTop:"20px",marginBottom:"100px"}} alt='img' src='https://i.dailymail.co.uk/1s/2019/09/02/13/17972248-0-image-a-68_1567426374160.jpg'/>
      <PlayerList/>
      <Footer/>
    </div>
  );
}

export default App;
