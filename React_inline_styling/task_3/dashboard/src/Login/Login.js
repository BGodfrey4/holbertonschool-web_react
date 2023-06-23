import React from "react";
import { StyleSheet, css } from "aphrodite";
import { padEnd } from "lodash";

function Login() {
  const style = StyleSheet.create({
    button: {
      '@media (max-width: 900px)': {
        width: '2rem',
        backgroundColor: 'white',
        border: '0',
        paddingTop: '.25rem',
        
      },
    },
    emailPass: {
      marginLeft: '10px',
      border: '0',
    },
    form: {
      '@media (max-width: 900px)': {
        display: 'flex',
        flexDirection: 'column',
      },
    },
    label: {
      marginRight: '25px',
      '@media (max-width: 900px)': {
        marginBottom: '10px',
      },
    },

  });

  return (
    <React.Fragment>
      <div className="login-form">
        <p>Login to access the full dashboard</p>
        <form className={`Login ${css(style.form)}`}>
          <label htmlFor="email" className={css(style.label)} >Email:
            <input className={css(style.emailPass)} type="email" id="email" name="email" />
          </label>
          <label htmlFor="password">Password:
            <input className={css(style.emailPass)}  type="password" id="password" name="password" />
          </label>
          <input type="submit" value="OK" className={css(style.button)} />
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
