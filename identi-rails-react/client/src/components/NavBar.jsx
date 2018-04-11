import React, { Component } from "react";
import styled from "styled-components";

const NavStyle = styled.div`
  .nav-wrapper {
    background-color: rgb(135, 255, 201);
    a {
      color: whitesmoke;
    }
    #logo {
      font-family: 'Cute Font';
      font-size: 95.5px;
    }
    #navLinks {
      font-family: 'Crimson Text';
      font-size: 30.5px;
    }

  }
`;

class NavBar extends Component {
  render() {
    return (
      <div>
        <NavStyle>
          <nav>
            <div class="nav-wrapper">
              <a id="logo" href="#" class="brand-logo left">
                identi
              </a>
              <ul id="#" class="right hide-on-med-and-down">
                <li>
                  <a id="navLinks" href="#">about</a>
                </li>
                <li>
                  <a id="navLinks" href="#">input</a>
                </li>
                <li>
                  <a id="navLinks" href="#">analyze</a>
                </li>
                <li>
                  <a id="navLinks" href="#">contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </NavStyle>
      </div>
    );
  }
}

export default NavBar;
