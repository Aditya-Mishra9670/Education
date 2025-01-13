import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './components/Login/Login';
import {useState} from 'react';
function App(){
  
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
      </Routes>
    </Router>
  )
}
export default App;