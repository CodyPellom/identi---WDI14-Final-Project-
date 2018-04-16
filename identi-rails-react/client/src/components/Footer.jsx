import React, { Component } from "react";
import styled from "styled-components";

const FootTextStyle = styled.div`
  .nav-wrapper {
    background-color: rgb(135, 255, 201);
    a {
      color: whitesmoke;
    }
  }
`;

const FootStyler = styled.div`
  .page-footer {
    background-color: rgb(1, 73, 188);
  }

  #logo {
    font-family: "Forum";
    font-size: 95.5px;
  }

  #footText {
    font-family: "Forum";
    font-size: 20.5px;
  }

  #resources {
    font-family: "Forum";
    font-size: 60px;
  }

  #resourcesText {
    font-family: "Forum";
    font-size: 20.5px;
  }

  #copyrightText {
    font-family: "Special Elite";
    font-size: 30.5px;
  }
`;

class Footer extends Component {
  render() {
    return (
      <div>
        <FootStyler>
          <footer class="page-footer">
            <div class="container">
              <div class="row">
                <div class="col l6 s12">
                  <h5 id="logo" class="white-text">
                    i d e n t i
                  </h5>
                  <p id="footText" class="grey-text text-lighten-4">
                    identi helps clients make business decisions by analyzing
                    professional correspondence. identi uses IBM Watson's
                    Personality Insights, Tone Analyzer, and Natural Language
                    Understanding APIs to return insightful information and
                    reccomendations instantly.
                    <br />
                    <br />
                    With identi, you can be certain your correspondence will be
                    interpreted as you intended.
                  </p>
                </div>
                <div class="col l4 offset-l2 s12">
                  <br />
                  <h5 id="resources" class="white-text">
                    resources
                  </h5>
                  <ul>
                    <li>
                      <br />
                      <a
                        id="resourcesText"
                        class="grey-text text-lighten-3"
                        href="https://www.ibm.com/watson/"
                      >
                        IBM Watson
                      </a>
                    </li>
                    <li>
                      <br />
                      <a
                        id="resourcesText"
                        class="grey-text text-lighten-3"
                        href="https://github.com/CodyPellom/identi---WDI14-Final-Project-"
                      >
                        identi on GitHub
                      </a>
                    </li>
                    <li>
                      <br />
                      <a
                        id="resourcesText"
                        class="grey-text text-lighten-3"
                        href="https://reactjs.org/"
                      >
                        React
                      </a>
                    </li>
                    <li>
                      <br />
                      <a
                        id="resourcesText"
                        class="grey-text text-lighten-3"
                        href="https://www.linkedin.com/in/cody-pellom/"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div id="copyrightText" class="container">
                © 2018 Cody Pellom
                <a class="grey-text text-lighten-4 right" />
              </div>
            </div>
          </footer>
        </FootStyler>
      </div>
    );
  }
}

export default Footer;
