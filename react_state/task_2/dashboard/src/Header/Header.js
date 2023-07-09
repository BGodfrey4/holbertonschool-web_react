import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { css, StyleSheet } from 'aphrodite';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  logo: {
		width: '240px',
		height: '240px'
	},

	header: {
		display: 'block' 
	},

	header_info: {
		display: 'flex',
		alignItems: 'center'
	}
});

export default function Header() {
	const { user, logOut } = React.useContext(AppContext);
  return (
		<React.Fragment>
			<div className={css(styles.header)}>
				<div className={css(styles.header_info)}>
					<img src={logo} className={`App-logo ${css(styles.logo)}`} alt="logo" />
					<h1>School Dashboard</h1>
				</div>
				{user.isLoggedIn ? (
					<div>
						<p id='logoutSection'>
							Welcome {user.email}&nbsp;<a onClick={logOut} href='#'>(logout)</a>
						</p>
					</div> ) : (
						null
					)
				}
			</div>
		</React.Fragment>
  );
}
