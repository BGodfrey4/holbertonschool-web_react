import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  const style = StyleSheet.create({
    label: {
      marginRight: "15px",
    },
    ep: {
      marginLeft: "8px",
    },
  });

  return (
    <React.Fragment>
      <div className="login-form">
        <p>Login to access the full dashboard</p>
        <form className="Login">
          <label htmlFor="email" className={css(style.label)} >Email:
            <input className={css(style.ep)} type="email" id="email" name="email" />
          </label>
          <label htmlFor="password">Password:
            <input className={css(style.ep)}  type="password" id="password" name="password" />
          </label>
          <input type="submit" value="OK" />
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
