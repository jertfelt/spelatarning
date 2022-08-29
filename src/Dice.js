import { useState } from "react";


const Dice = () => {
  const [firstDie, setDiceResult] = useState(2)
  const [secondDie, setSecondDiceResult] = useState(1);

  const firstDieImg = require(`./assets/dice/${firstDie}.png`)
  const secondDieImg = require(`./assets/dice/${secondDie}.png`)

  const rulla = () => {
    setDiceResult(Math.floor(Math.random()*6)+1);
    setSecondDiceResult(Math.floor(Math.random()*6)+1);
  }
  return ( 
    
     <div>
     
  <button className="knapp"
  onClick={rulla}>Rulla tärningarna!</button>
  
    <article className="content__dice">
    <img src={firstDieImg} alt="Tärning 1" className="tarning" />
    <img src={secondDieImg} alt="Tärning 2" className="tarning" />
    </article>
  <p>Det blir...{firstDie + secondDie}</p>
  
  </div>
   );
}
 
export default Dice;