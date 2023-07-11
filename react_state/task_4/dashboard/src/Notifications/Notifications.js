import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import NotificationItemShape from './NotificationItemShape';
import { css, StyleSheet } from 'aphrodite';

export default class Notifications extends React.Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}
	
	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

	shouldComponentUpdate(newProps) {
		if (this.props.displayDrawer !== newProps.displayDrawer) {
			return (
				newProps.listNotifications.length > 0 &&
				newProps.listNotifications.length >=
				this.props.listNotifications.length
			);
		}
		return false;
	}

	render () {
		const { displayDrawer, handleDisplayDrawer, 
						handleHideDrawer, listNotifications } = this.props;

		const floatDirection = displayDrawer ? 'left' : 'right';

		const styles = StyleSheet.create({
			notifications: {
				border: '1px rgb(221, 72, 72) dashed',
				padding: '5px',
				'@media (max-width: 900px)': {
					height: '100%',
					width: '100%',
					backgroundColor: 'white',
					position: 'absolute',
					border: 'none'
				}
			},
		
			notificationDiv: {
				display: 'flex',
				flexDirection: 'column',
				float: 'right',
				marginRight: '1rem',
				'@media (max-width: 900px)': {
					float: floatDirection
				}
			},
		
			button: {
				float: 'right',
				border: '0',
				background: 'white',
				'@media (max-width: 900px)': {
					marginTop: '10px',
					position: 'absolute'
				}
			},
		
			menuItem: {
				textAlign: 'right',
				paddingBottom: '0.5rem',
				fontWeight: 'bold',
				backgroundColor: '#fff8f8',
				display: displayDrawer ? 'none' : 'block',
				':hover': {
					cursor: 'pointer',
					animationName: [
						{ 
							'0%': {transform: 'translateY(0px)'},
					 		'10%': {transform: 'translateY(-5px)'},
							'35%': {transform: 'translateY(5px)'},
							'60%': {transform: 'translateY(0px)'}
						},
						{
							from: {opacity: 0.5},
							to: {opacity: 1}
						}],
					animationDuration: '0.5s, 1s',
					animationIterationCount: 3
				}
			},

			p_text: {
				marginLeft: '30px'
			}
		});

		return (
			<div id="notificationDiv"
				className={`notificationDiv ${css(styles.notificationDiv)}`}>
				<div className={`menuItem ${css(styles.menuItem)}`}
					id='menuItem'
					onClick={ handleDisplayDrawer }>
					Your Notifications
				</div>
				{displayDrawer && (
					<div className={`Notifications ${css(styles.notifications)}`}
						id='Notifications'>
						<button
							className={`button ${css(styles.button)}`}
							aria-label="Close"
							onClick={ handleHideDrawer }>
								<img src={closeIcon}
									id="close-icon"
									height="15px"
									width="15px"
									alt="close icon" />
						</button>
						{listNotifications.length ?
							(<p className={`${css(styles.p_text)}`}>
								Here is the list of notifications</p>) : 
							(<p className={`${css(styles.p_text)}`}>
								No new notification for now</p>)}
						{listNotifications ? (
							listNotifications.map((notification) => (
								<NotificationItem key={notification.id}
									type={notification.type}
									value={notification.value}
									html={notification.html}
									markAsRead={() => this.markAsRead(notification.id)} />))) :
								(<tr>No course available yet</tr>)}
					</div>
				)}
			</div>
		);
	}
}

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
	handleHideDrawer: PropTypes.func,
	handleDisplayDrawer: PropTypes.func
};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
	handleHideDrawer: () => {},
	handleDisplayDrawer: () => {}
}
