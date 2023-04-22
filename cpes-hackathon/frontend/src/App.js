import './App.css';
import NavBar from './components/navbar/navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const currentUser = false;
  console.log(currentUser);
  return (
    <div className='App'>
      <NavBar/>
    </div>
  );
}

export default App;
