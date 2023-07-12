import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  login: {
    marginTop: '3rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  input: {
    fontSize: '1rem',
    border: '1px solid lightgrey',
    ':focus': {
      outline: 'none',
      border: '1px solid #e11d3f',
      padding: '0.5rem',
    },
    '@media (min-width: 900px)': {
      margin: '0 1rem',
    },
  },
  button: {
    border: '1px solid lightgrey',
    borderRadius: '0.5rem',
    width: '2.5rem',
    ':hover': {
      outline: 'none',
      border: '1px solid #e11d3f',
    },
    '@media (min-width: 900px)': {
      padding: '0.5rem .5rem',
    },
  },
});

export default function Login({ logIn }) {
  const [state, setState] = React.useState({
    email: '',
    password: '',
    enableSubmit: false,
  });
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    logIn(state.email, state.password);
  };

  const handleChangeEmail = (e) => {
    if (state.password !== '' && state.email !== '') state.enableSubmit = true;
    setState({ ...state, email: e.target.value });
  };

  const handleChangePassword = (e) => {
    if (state.password !== '' && state.email !== '') state.enableSubmit = true;
    setState({ ...state, password: e.target.value });
  };

  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.form)} onSubmit={handleLoginSubmit}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            value={state.email}
            placeholder="email"
            onChange={handleChangeEmail}
            className={css(styles.input)}
            name="email"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            placeholder="password"
            value={state.password}
            onChange={handleChangePassword}
            className={css(styles.input)}
            name="password"
          />
        </label>
        <button
          disabled={!(state.email !== '' && state.password !== '')}
          className={css(styles.button)}
          type="submit"
        >
          OK
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  logIn: PropTypes.func,
};

Login.defaultProps = {
  logIn: () => {},
};
