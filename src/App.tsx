import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './component/Page/Home/Home';
import TicketManagement from './component/Page/TicketManagement/TicketManagement';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/TicketManagement' element={<TicketManagement/>}/>
     </Routes>
    </div>
  );
}

export default App;
