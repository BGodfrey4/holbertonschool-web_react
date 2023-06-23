import logo from '../assets/holberton-logo.jpg';
// import './App.css';
import './App.css'
import React, { Component } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from "prop-types";
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';


class App extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      const { logOut } = this.props;
      logOut();
    }
  };
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ];

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <div className='App-body'>
            {isLoggedIn ? <CourseList listCourses={listCourses} /> : < Login />}
          </div>
          <footer className='App-footer'>
            <Footer />
          </footer>
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { }
};


export default App;
