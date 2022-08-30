import { useState } from "react";


const Dice = () => {
  const [firstDie, setDiceResult] = useState(2)
  const [secondDie, setSecondDiceResult] = useState(1);
  
  const [isitTwelve, setIsItTwelve] = useState(false);

  const firstDieImg = require(`../assets/dice/${firstDie}.png`)
  const secondDieImg = require(`../assets/dice/${secondDie}.png`)

  const rulla = () => {
    setDiceResult(Math.floor(Math.random()*6)+1);
    setSecondDiceResult(Math.floor(Math.random()*6)+1);
  }

  const rollAndCheck = () => {
    rulla()
    console.log(firstDie + secondDie)
      if(firstDie + secondDie !== 12){
        console.log("inte tolv")
      }
      //detta läser alltså FÖREGÅENDE värden på firstDie + secondDie, inte nuvarande.
    
  }
  return ( 
    <div className="content__main">
    <div className="content__other">
      <h3>Feeling lucky, punk?</h3>
      {/* <p>Om du lyckas slå siffran 12 så vinner du ett pris!</p>  */}
  
     
  <button className="knapp"
  onClick={rollAndCheck}>Rulla tärningarna!</button>
  
    <article className="content__dice">
    <img src={firstDieImg} alt="Tärning 1" className="tarning" />
    <img src={secondDieImg} alt="Tärning 2" className="tarning" />
    </article>
  <p className="result__dice">
    Det blir...{firstDie + secondDie}</p>
    
  </div>
  </div>
   );
}
 
export default Dice;