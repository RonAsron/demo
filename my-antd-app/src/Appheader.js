import './App.css';
import Navbar from './Navbar';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import SimpleSlider from './SimpleSlider';
function AppHeader() {
  const[showNav, setshowNav] = useState(false)
  
  return ( 
    <div className="App">
      <header className="App-header">
        <GiHamburgerMenu onClick={() => setshowNav(!showNav)}/>
        <Navbar show={showNav} />
        <SimpleSlider />
      </header>

      
    </div>
  );
}

export default AppHeader;