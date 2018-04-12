import React, { Component } from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  #inputField {
    margin-top: 30vh;
    margin-bottom: 15vh;
  }
  #header {
    font-family: "Cute Font";
    font-size: 85px;
  }
`;

const ButtonStyle = styled.div`
#buttonOne, .waves-effect, .waves-light, .btn-large {
width: 20vw;
margin-right: 2.5vw;
margin-bottom:5vw;
font-family: "Crimson Text";
background-color: rgba(56, 255, 162, 0.75);
}

#buttonTwo, .waves-effect, .waves-light, .btn-large {
width: 20vw;
margin-left: 2.5vw;
margin-bottom:5vw;
font-family: "Crimson Text";
background-color: rgba(56, 255, 162, 0.75);
}

#buttonThree, .waves-effect, .waves-light, .btn-large {
width: 20vw;
margin-left: 2.5vw;
margin-bottom:5vw;
font-family: "Crimson Text";
background-color: rgba(56, 255, 162, 0.75);
}
`;

class InputCorrespondence extends Component {
  render() {
    return (
      <div>
        <StyledInput>
          <h1 id="header">input</h1>
          <div id="inputField" class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <textarea id="textarea1" class="materialize-textarea" />
                  <label for="textarea1">paste your correspondence here</label>
                </div>
              </div>
            </form>
          </div>
        </StyledInput>
        <ButtonStyle>
        <a id="buttonOne" class="waves-effect waves-light btn-large">personality traits</a>
        <a id="buttonTwo" class="waves-effect waves-light btn-large">underlying tone</a>
        <a id="buttonThree" class="waves-effect waves-light btn-large">natural language</a>
        </ButtonStyle>
      </div>
    );
  }
}

export default InputCorrespondence;
