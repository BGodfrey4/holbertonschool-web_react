import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';



class Notifications extends Component {

  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    const bounce = {  '0%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-5px)' }, '100%': { transform: 'translateY(5px)' },};
    const fade = {  from: { opacity: 0.5 }, to: { opacity: 1 } };
    const style = StyleSheet.create({
      menuItem: {
        marginRight: '1rem',
        ':hover': {
          cursor: 'pointer',
          animationName: [fade, bounce],
          animationDuration: '1s, 0.5s',
          animationIterationCount: 3,
        },
      },
      noteBox: {
        border: '1px red dashed',
        padding: '1rem',
        margin: '1rem',
        // if displayDrawer is true 900 Media Query
        '@media (max-width: 900px)': {
          border: 'none',
          padding: '0',
          margin: '0',
          width: this.displayDrawer ? '0vw' : '100vw',
          height: this.displayDrawer ? '0vw' : '100vw',
          position: this.displayDrawer ? 'absolute' : 'absolute',
          backgroundColor: 'white',
        },
      },
      notes: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        position: 'absolute',
        right: 0,
      },
    });

    const displayDrawer = this.props.displayDrawer;
    const listNotifications = this.props.listNotifications;
    return (
      <div className={`Notfication-menu ${css(style.notes)}`}>
        <div className={`menuItem ${css(style.menuItem)}`}>Your notifications</div>
        {displayDrawer && (
          <div className={`Notifications ${css(style.noteBox)}`}>
            {listNotifications.length ? (
              <p>Here is the list of notifications</p>
            ) : (
              <p>No new notification for now</p>
            )}
            {listNotifications ? (
              listNotifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  type={notif.type}
                  value={notif.value}
                  html={notif.html}
                  markAsRead={() => this.markAsRead(notif.id)}
                />
              ))
            ) : (
              <tr>No course available yet</tr>
            )}

            <button
              style={{
                border: 0,
                background: 'white',
                position: 'absolute',
                right: '35px',
                top: '50px',
              }}
              aria-label='Close'
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src={closeIcon} height='15px' width='15' alt='close icon' />
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};



export default Notifications;
