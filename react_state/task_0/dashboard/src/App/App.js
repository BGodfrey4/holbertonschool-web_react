import React from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import { css, StyleSheet } from 'aphrodite';

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
    this.state = {
      displayDrawer: false,
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
        window.alert('Logging you out')
        this.props.logOut();
      }
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  render () {
    const {isLoggedIn} = this.props;
    const {displayDrawer} = this.state;
    return (
      <React.Fragment>
        <div className="App">
          <Notifications listNotifications={listNotifications}
            handleHideDrawer={this.handleHideDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            displayDrawer={this.state.displayDrawer} />
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
                <Login />
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
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};
