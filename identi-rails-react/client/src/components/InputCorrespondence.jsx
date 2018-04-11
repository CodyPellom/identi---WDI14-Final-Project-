import React, { Component } from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  #inputField {
    margin-top: 30vh;
    margin-bottom: 30vh;
  }
  #header {
    font-family: "Cute Font";
    font-size: 85px;
  }
`;

const ButtonStyle = styled.div`
#buttonOne, .waves-effect, .waves-light, .btn-large {
background-color: green;
}

#buttonTwo, .waves-effect, .waves-light, .btn-large {
background-color: red;
}
` 

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
        <a id="buttonOne" class="waves-effect waves-light btn-large">save</a>
        <a id="buttonTwo" class="waves-effect waves-light btn-large">submit</a>
        </ButtonStyle>
      </div>
    );
  }
}

export default InputCorrespondence;
