import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import { css, StyleSheet } from 'aphrodite';
import AppContext from './AppContext'

const styles = StyleSheet.create({
  body: {
    padding: '2% 3%',
	  fontFamily: 'Arial, Helvetica, sans-serif',
	  borderTop: 'medium solid rgb(221, 72, 72)',
	  borderTopColor: 'rgb(221, 72, 72)'
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: 'rgb(221, 72, 72)'
  },

  footer: {
    textAlign: 'center',
	  borderTop: 'solid rgb(221, 72, 72)',
	  fontStyle: 'italic',
	  fontFamily: 'Arial, Helvetica, sans-serif',
  }
});

const listCourses = [
  { id: '1', name: 'ES6', credit: 60},
  { id: '2', name: 'Webpack', credit: 20},
  { id: '3', name: 'React', credit: 40},
]

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: () => this.logOut(),
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
      ]
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.ctrlKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.ctrlKeyPress);
  }
  
  ctrlKeyPress = (event) => {
    if (event.ctrlKey && event.key === 'h') {
        alert('Logging you out')
        this.state.logOut();
      }
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true
      }
    });
  }

  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      }
    });
  }

  markNotificationAsRead = (id) => {
    let notifList = this.state.listNotifications;
    this.setState({
      listNotifications: notifList.filter((notif) => notif.id !== id)
    });
  }

  render () {
    const {isLoggedIn} = this.state.user;
    const {displayDrawer, listNotifications} = this.state;
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <Notifications listNotifications={listNotifications}
            handleHideDrawer={this.handleHideDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            displayDrawer={displayDrawer}
            markNotificationAsRead={this.markNotificationAsRead} />
          <div className={`App-header ${css(styles.header)}`}>
            <Header />
          </div>
          <div className={`App-body ${css(styles.body)}`}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
              ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn}/>
              </BodySectionWithMarginBottom>)}
            <BodySection title="News from the School">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.</p>
            </BodySection>
          </div>
          <div className={`App-footer ${css(styles.footer)}`}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}
