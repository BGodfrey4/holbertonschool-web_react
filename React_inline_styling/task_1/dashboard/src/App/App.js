import logo from '../assets/holberton-logo.jpg';
import React, { Component } from 'react';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from "prop-types";
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { css, StyleSheet } from 'aphrodite';


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

    const style = StyleSheet.create({
      body: {
        // padding: '0px 10px',
        margin: '0px',
        // padding: '0px',
        height: '500px',
        padding: '2% 3%',
        // minWidth: '100%',
      },
      footer: {
        textAlign: 'center',
        fontStyle: 'italic',
        borderTop: 'solid #e0354b',
        bottom: '0',
        position: 'fixed',
        width: '100%',

      },
    });

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <div className={`App-body ${css(style.body)}`}>
            
            {isLoggedIn ?
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
              :
              <BodySectionWithMarginBottom title='Log in to continue'>
                < Login />
              </BodySectionWithMarginBottom>
              }
            <BodySection title='News from the School'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </BodySection>
          </div>
          <footer className={`App-footer ${css(style.footer)}`}>
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
