import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import styles from './App.css';
import ToDo from './features/todo/ToDo';
import { 
  BrowserRouter as Router, 
  Link,  
  Route, 
  Routes
} from 'react-router-dom';
import Done from './features/todo/Done';
import Deleted from './features/todo/Deleted';
import { useSelector } from 'react-redux';

function App() {

  const state = useSelector(state => state.todo);

  const [navStatus, setNavStatus] = useState(1);

  const active = {
    backgroundColor: 'lightblue', 
    textDecoration: 'none', 
    color: 'whitesmoke',
  }
  const inactive = {textDecoration: 'none', color: 'whitesmoke' }
  
  const handleClick = (num) => () => {
    setNavStatus(num)
  }
  return (

    <Router>
      <div>
        <nav className='nav-bar'>
          <ul>
            <li style={navStatus == 1 ? active : inactive} onClick={handleClick(1)}>
              <Link style={navStatus == 1 ? active : inactive} onClick={handleClick(1)} to="/">Home</Link>
              {state.task.length > 0 ? 
              <div className='number-banner'>{state.task.length}</div>
              : 
              ''
              }
            </li>
            <li style={navStatus == 2 ? active : inactive} onClick={handleClick(2)}>
              <Link style={navStatus == 2 ? active : inactive} onClick={handleClick(2)} to="/done">Done</Link>
              {state.done.length > 0 ? 
              <div className='number-banner'>{state.done.length}</div>
              : 
              ''
              }
            </li>
            <li style={navStatus == 3 ? active : inactive} onClick={handleClick(3)}>
              <Link style={navStatus == 3 ? active : inactive} onClick={handleClick(3)} to="/deleted">Deleted</Link>
              {state.deleted.length > 0 ? 
              <div className='number-banner'>{state.deleted.length}</div>
              : 
              ''
              }
            </li>
            <li style={navStatus == 4 ? active : inactive} onClick={handleClick(4)}>
              <Link style={navStatus == 4 ? active : inactive} onClick={handleClick(4)} to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<ToDo/>} />
          <Route path='/done' element={<Done/>} />
          <Route path='/deleted' element={<Deleted/>} />
          <Route path='/counter' element={<Counter/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
