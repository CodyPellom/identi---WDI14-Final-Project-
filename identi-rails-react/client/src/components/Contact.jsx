import React, { Component } from "react";
import styled from "styled-components";

const AboutStyler = styled.div`
#pics {
    margin-left: 5vw;
    margin-bottom: 50vh;
}
#pic2{
    margin-left: 15vw;
    margin-bottom: 50vh;
}
#message{
    margin-bottom: 50vh;
}
`;

class Contact extends Component {
  render() {
    return (
      <div id="contactSection">
        <AboutStyler>
          <div class="row">
            <div class="col s4">
              <div id="pics" class="ui small circular rotate reveal image">
                <img
                  src="https://i.imgur.com/QEjo4Bq.jpg"
                  class="visible content"
                />
                <img
                  src="https://i.imgur.com/IGXpK9q.jpg"
                  class="hidden content"
                />
              </div>
            </div>
            <div class="col s4">
              <div id="message" class="ui floating message">
                <h4>Hi! I'm Cody! </h4>
                <p>
                  I hope you enjoyed my final project with General Assembly!
                </p>
                <p>
                  I can be contacted via LinkedIn(link below) and I am currently looking for
                  a great team to work with!
                </p>
                <p>I specialize in:</p>
                <ul>
                    <li>JavaScript</li>
                    <li>Ruby</li>
                    <li>React</li>
                    <li>Express</li>
                    <li>Advanced CSS</li>
                    <li>Animation</li>
                    <li>and more...</li>
                    </ul>
              </div>
            </div>
            <div class="col s4">
              <div id="pic2"class="ui small circular rotate reveal image">
                <img
                  src="https://i.imgur.com/LeX9coB.png"
                  class="visible content"
                />
                <img
                  src="https://i.imgur.com/zMzozMk.jpg"
                  class="hidden content"
                />
              </div>
            </div>
          </div>
        </AboutStyler>
      </div>
    );
  }
}

export default Contact;
