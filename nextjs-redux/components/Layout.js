import React from "react";
import Header from "./Header";
import Menu from "./Menu";

const style = {
  content: {
    display: "flex"
  },
  page: {
    padding: 20
  }
};

const Layout = ({ children }) => (
  <div>
    <Header />
    <div style={style.content}>
      <Menu />
      <div style={style.page}>{children}</div>
    </div>
    <style global jsx>{`
      body {
        margin: 0;
        font-size: 22px;
        font-family: sans-serif;
      }

      h1 {
        margin: 0;
      }

      a {
        text-decoration: none;
      }

      input,
      button,
      textarea,
      select {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
      }
    `}</style>
  </div>
);

export default Layout;
