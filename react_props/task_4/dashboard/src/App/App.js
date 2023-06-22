import logo from '../assets/holberton-logo.jpg';
// import './App.css';
import './App.css'
import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from "prop-types";
import CourseList from '../CourseList/CourseList';


function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className='App-body'>
          {isLoggedIn ? <CourseList /> : < Login />}
        </div>
        <footer className='App-footer'>
          <Footer />
        </footer>
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};


export default App;
