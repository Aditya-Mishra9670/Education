import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './components/Login/Login';
import {useState} from 'react';
import About from './components/About/About';
import Terms from './components/TermsServices/Terms';
import PrivacyPolicy from './components/PrivacyPolicy/Privacy';
import SignUp from './components/Signup/Signup';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import Categories from './components/Categories/Categories';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <Footer/>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};
export default App;