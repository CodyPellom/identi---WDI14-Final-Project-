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
    background-color: rgb(135, 255, 201);
  }

  #logo {
    font-family: "Cute Font";
    font-size: 95.5px;
  }

  #footText {
    font-family: "Crimson Text";
    font-size: 20.5px;
  }

  #resources {
    font-family: "Cute Font";
    font-size: 60px;
  }

  #resourcesText {
    font-family: "Crimson Text";
    font-size: 20.5px;
  }

  #copyrightText {
    font-family: 'Crimson Text';
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
                    identi uses three IBM Watson APIs to analyze professional
                    correspondence, and return feedback about personality
                    (Wants, Needs and the Big Five), tone and natural language
                    understanding.
                    <br />
                    <br />
                    The IBM Watson™ Personality Insights service enables
                    applications to derive insights from social media,
                    enterprise data, or other digital communications.
                    <br />
                    <br />
                    With IBM Watson™ Natural Language Understanding, developers
                    can analyze semantic features of text input, including
                    categories, concepts, emotion, entities, keywords, metadata,
                    relations, semantic roles, and sentiment.
                    <br />
                    <br />
                    The Tone Analyzer service analyzes the tone of input
                    content. This tutorial shows commands that analyze different
                    sample content. The examples demonstrate both the general
                    purpose and the customer engagement endpoints.
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
                © 2018 Buckhead Web Development & Consultation (a Cody Pellom
                LLC)
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
