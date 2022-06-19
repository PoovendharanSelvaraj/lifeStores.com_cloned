import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import Body from './components/Body';
import WomenCato from './components/Navbar/categories/WomenCato';
import { useContext } from 'react';
import { CategoriesContext } from './Context/CategoriesContext';
import MenCato from './components/Navbar/categories/MenCato';

function App() {
   const {cato}=useContext(CategoriesContext)
  return (
    <div className="App">
      <Navbar/>
 
     {cato.women?<WomenCato/>:<MenCato/>}
   
       <Body/>
      <Footer/>
    </div>
  );
}

export default App;
