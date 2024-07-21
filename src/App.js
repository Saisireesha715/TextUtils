
// import React,{ useState } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import About from './components/About';
// import Navbar from './components/Navbar';
// import Textarea from './components/Textarea';
// import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {

//   const [mode,Setmode] = useState('light');
//   const [alert,setalert] = useState(null)

//   const showAlert =(msg,type) =>{
//    setalert({ 
//     msg : msg,
//     type : type
//    })
//   }

//   const togglemode = () =>{
//     if(mode === 'light'){
//       Setmode('dark')
//       document.body.style.backgroundColor = 'grey'
//       showAlert('Dark mode is enabled','success');
//       setTimeout(() => {
//         showAlert(null)
//       }, 3000);
//       document.title = 'TextUtils - Dark mode'
//     }

//     else{
//       Setmode('light')
//       document.body.style.backgroundColor = 'white'
//       showAlert('Light mode is enabled','success')
//       setTimeout(() => {
//         showAlert(null)
        
//       }, 3000);
      
//       document.title = 'TextUtils - Light mode'
      
     
     
//     }
//   }
//   return (
  
//    <Router>
//     <Navbar  mode={mode} togglemode={togglemode}/>
//     <Alerts alert = {alert}/>
//     <div className='container my-3'>
//     <Routes>
//     <Route path="/about" element={<About mode ={mode}/>} />
          
//     <Route path="/" element={<Textarea  heading="Enter the text"  mode={mode} showAlert={showAlert} alert={alert} />}/>
          
        
//     </Routes>
  
  
//     </div>


//    </Router>
  
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alerts from './components/Alerts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const enableDarkMode = () => {
    setMode('dark');
    document.body.style.backgroundColor = '#343a40';
    showAlert('Dark mode is enabled', 'success');
    document.title = 'TextUtils - Dark mode';
  };

  const enableLightMode = () => {
    setMode('light');
    document.body.style.backgroundColor = '#f8f9fa';
    showAlert('Light mode is enabled', 'success');
    document.title = 'TextUtils - Light mode';
  };

  const toggleMode = () => {
    if (mode === 'light') {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  };

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<Textarea heading="Enter the text" mode={mode} showAlert={showAlert} alert={alert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

