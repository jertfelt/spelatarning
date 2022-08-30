import { useRef, useState, useEffect } from "react";

const DropdownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false)
  const clickDrop=() => setIsActive(!isActive);
  const clickClose=() => setIsActive(false)
  

  useEffect(() => {

    const clickOutsideDrop = (e) => {
      console.log(e.target)
      console.log(dropdownRef.current)
      //*! Får detta ej att fungera:
      // if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
      //   setIsActive(!isActive);
      // }
    
      
    }
    const handleEsc = (e) => {
        if (e.keyCode === 27) {
        console.log('Close')
        if (isActive){
          setIsActive(false)
        }
        }
    };
    
      if (isActive){
      
      document.addEventListener("keydown", handleEsc)
      document.addEventListener("click", clickOutsideDrop)
   
      }
      return () => {
        document.removeEventListener("keydown", handleEsc)
        document.removeEventListener("click", clickOutsideDrop)
      }
      
  }, [isActive])



  return ( 
    <div className="menu-container">
      <button className="menu-button"
      onClick={clickDrop}>
        <p>Meny</p>
      </button>
      <nav 
      ref={dropdownRef}
      className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul className="dropdown">
          <img 
          onClick={clickClose}
          src="https://cdn0.iconfinder.com/data/icons/octicons/1024/x-512.png"
          alt="Stäng"></img>
          <li><a href="/">Start</a></li>
          <li><a href="/spela-tarning">Spela tärning</a></li>
          <li><a href="/att-gora">Att göra</a></li>
          
        </ul>

      </nav>
    </div>
   );
}
 
export default DropdownMenu;