import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
	login: {
		marginLeft: '2.5rem',
		marginTop: '5rem',
		'@media (max-width: 900px)': {
			marginLeft: '0'
		}
	},

  email: {
		marginLeft: '.2rem'
	},

	password: {
		marginLeft: '.2rem'
	},
	
	formBody: {
		display: 'flex',
		flexDirection: 'column'
	},

	okButton: {
		width: '40px',
		marginTop: '.2rem',
		backgroundColor: 'white'
	},

	label: {
		display: 'grid',
		gridTemplateColumns: '75px 200px',
		margin: '.2rem 0 .2rem 0'
	}
});

export default function Login() {
  return (
		<React.Fragment>
			<div className={`App-login ${css(styles.login)}`}>
				<p>Login to access the full dashboard</p>
				<form id="Form-body"
					className={`Form-body ${css(styles.formBody)}`}>
					<label htmlFor="email"
						className={`label ${css(styles.label)}`}>
						Email:
						<input type="email"
							id="email"
							name="email"
							className={`App-email ${css(styles.email)}`} />
					</label>
					<label htmlFor="password"
						className={`label ${css(styles.label)}`}>
						Password:
						<input type="password"
							id="password"
							name="password"
							className={`App-password ${css(styles.password)}`} />
					</label>
					<input type="submit" value="OK"
						className={`ok-button ${css(styles.okButton)}`} />
				</form>
			</div>
		</React.Fragment>
  );
}
