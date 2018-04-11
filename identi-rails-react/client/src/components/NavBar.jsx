import React, { Component } from "react";
import styled from 'styled-components';


class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">
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
      </div>
    );
  }
}

export default NavBar;
