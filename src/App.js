import Dice from "./views/Dice";
import Header from "./Header";
import Home from "./views/Home";
import Kontakt from "./views/Kontakt";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom" 

function App() {
  

  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/spela-tarning"
        element={<Dice/>}
        ></Route>
        <Route path="/kontakt"
        element={<Kontakt/>}>
        </Route>
        <Route exact path="/" 
         element={<Home/>}
        >
          
        </Route>
      </Routes>
     
      
       
      </div>
    
      </Router>
  );
}

export default App;
