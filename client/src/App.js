import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route exact path ="/" element={<Login/>}>
          
          </Route>

          <Route exact path='/Home' element={<Home/>}>
              
          </Route>

          <Route exact path='/detail/:id' element={<Details/>}>
              
          </Route>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
