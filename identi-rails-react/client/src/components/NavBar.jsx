import React, { Component } from "react";
import styled from "styled-components";

const NavStyle = styled.div`
  .nav-wrapper {
    background-color: rgb(1, 73, 188);
    a {
      color: whitesmoke;
    }
    #logo {
      display: flex;
      flex-direction: row;
      font-family: 'Forum';
      font-size: 60px;

    }
    #navLinks {
      font-family: 'Forum';
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
                  <a id="navLinks" class="about"href="#" >about</a>
                </li>
                <li>
                  <a id="navLinks" class="inputNav" href="#">input</a>
                </li>
                <li>
                  <a id="navLinks" class="analyzeNav"href="#">analyze</a>
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
