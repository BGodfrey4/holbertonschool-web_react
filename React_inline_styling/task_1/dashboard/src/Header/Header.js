import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

function Header() {
  const style = StyleSheet.create({
    header: {
      display: "flex",
      alignItems: "center",
      borderBottom: "solid #e1354b",
      width: "100%",
    },
    logo: {
      height: "240px",
      width: "240px",
    },
  });
  return (
    <React.Fragment>
      <header className={css(style.header)}>
        <img className={`App-logo ${css(style.logo)}`} src={logo} alt="logo" />
        <h1>School Dashboard</h1>
      </header>
    </React.Fragment>
  );
}

export default Header;
