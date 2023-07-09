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
		marginLeft: '.2rem',
		zIndex: '1000'
	},

	password: {
		marginLeft: '.2rem',
		zIndex: '1000'
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
	const [state, setState] = React.useState({
		isLoggedIn: false,
		email: '',
		password: '',
		enableSubmit: false
	});

	const handleLoginSubmit = (event) => {
		event.preventDefault();
		setState({ isLoggedIn: true });
	}

	const handleChangeEmail = (event) => {
		if (state.email !== '' && state.password !== '') state.enableSubmit = true;
		else state.enableSubmit = false;
		setState({ ...state, email: event.target.value });
	}

	const handleChangePassword = (event) => {
		if (state.email !== '' && state.password !== '') state.enableSubmit = true;
		else state.enableSubmit = false;
		setState({ ...state, password: event.target.value });
	}

	return (
		<React.Fragment>
			<div className={`App-login ${css(styles.login)}`}>
				<p>Login to access the full dashboard</p>
				<form id="Form-body"
					className={`Form-body ${css(styles.formBody)}`}
					onSubmit={ handleLoginSubmit }>
					<label htmlFor="email"
						className={`label ${css(styles.label)}`}>
						Email:
						<input type="email"
							id="email"
							name="email"
							className={`App-email ${css(styles.email)}`}
							value={ state.email }
							onChange={ handleChangeEmail } />
					</label>
					<label htmlFor="password"
						className={`label ${css(styles.label)}`}>
						Password:
						<input type="password"
							id="password"
							name="password"
							className={`App-password ${css(styles.password)}`}
							value={ state.password }
							onChange={ handleChangePassword } />
					</label>
					<input type="submit" value="OK"
						className={`ok-button ${css(styles.okButton)}`}
						disabled={ !state.enableSubmit } />
				</form>
			</div>
		</React.Fragment>
	);
}
