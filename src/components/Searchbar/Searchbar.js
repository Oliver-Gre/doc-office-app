import React, { Component } from "react";
import "./Searchbar.css";

class Searchbar extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div className="searchbarContainer">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Another Button</a>
        <input
          type="text"
          placeholder="Search for a Patient"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    );
  }
}

export default Searchbar;
