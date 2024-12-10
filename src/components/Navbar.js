import { Component } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  state = { clicked: false };
  handeclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavBarItems">
        <h1 className="navbar-logo">Trip-Planner</h1>

        <div className="menu-icons" onClick={this.handeclick}>
          {/* <i className="fas fa-bars"></i> */}
          {/* <i className="fas fa-times"></i> */}
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
