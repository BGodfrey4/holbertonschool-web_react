import React, { Component } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';



class Notifications extends Component {

  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const displayDrawer = this.props.displayDrawer;
    const listNotifications = this.props.listNotifications;
    return (
      <div className='notification-menu'>
        <div className='menuItem'>Your notifications</div>
        {displayDrawer && (
          <div className='Notifications'>
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
