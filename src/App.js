import {useState} from "react";
function App() {
  const [firstDie, setDiceResult] = useState(2)
  const [secondDie, setSecondDiceResult] = useState(1);

  const firstDieImg = require(`./assets/dice/${firstDie}.png`)
  const secondDieImg = require(`./assets/dice/${secondDie}.png`)

  const rulla = () => {
    setDiceResult(Math.floor(Math.random()*6)+1);
    setSecondDiceResult(Math.floor(Math.random()*6)+1);
  }

  return (
    <div className="App">

      <div className="content__main">
        <div className="content__dice">
        <img src={firstDieImg} alt="Tärning 1" className="tarning" />
        <img src={secondDieImg} alt="Tärning 2" className="tarning" />
      </div>
      <span><p>Det blir...{firstDie + secondDie}</p></span>
      <button className="knapp"
      onClick={rulla}>Rulla tärningarna!</button>
      
      </div>
    </div>
  );
}

export default App;
