import React, { Component } from "react";
import styled from "styled-components";

const NavStyle = styled.div`
  .nav-wrapper {
    background-color: rgb(135, 255, 201);
    a {
      color: whitesmoke;
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
              <a href="#" class="brand-logo left">
                identi
              </a>
              <ul id="#" class="right hide-on-med-and-down">
                <li>
                  <a href="#">about</a>
                </li>
                <li>
                  <a href="#">input</a>
                </li>
                <li>
                  <a href="#">analyze</a>
                </li>
                <li>
                  <a href="#">contact</a>
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
