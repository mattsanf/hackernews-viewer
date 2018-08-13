import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="main-header flex align-items-baseline w-100 p-medium">
        <h1 className="title pr-medium">HackerNews</h1>
      </header>
    );
  }
}

export default Header;