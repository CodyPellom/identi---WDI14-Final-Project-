import React, { Component } from "react";
import styled from "styled-components";

const BuildBox = styled.div`

.grow:hover
{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
}
  .ExamplesBuildBox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 10vh;
    padding-bottom: 10vh;
  }

  #rightBox {
    margin-left: 7.5vw;
    width: 30vw;
    height: 37.5vh;
  }

  #leftBox {
    margin-right: 7.5vw;
    width: 30vw;
    height: 37.5vh;
  }

  #identiDescriptionText1, #identiDescriptionText2 {
    margin-bottom: 10vh;
    margin-left: 2vw;
    max-width: 95vw;
  }
`;

class Examples extends Component {
  render() {
    return (
      <div>
        <BuildBox>
          <div id="examplesBox" class="ExamplesBuildBox">
            <img
              id="leftBox"
              class="grow"
              src="https://i.imgur.com/4SZUMiC.jpg"
              alt="examples"
            />
            <img
              id="rightBox"
              class="grow"
              src="https://i.imgur.com/H4TqRWZ.png"
              alt="examples"
            />
          </div>
          <div id="identiDescriptionText1" class="ui piled segment">
            <p>
              identi uses three IBM Watson APIs to analyze professional
              correspondence, and return feedback about personality (Wants,
              Needs and the Big Five), tone and natural language understanding.
            </p>
          </div>
          <div id="identiDescriptionText2" class="ui piled segment">
            <p>
              The IBM Watson™ Personality Insights service enables applications
              to derive insights from social media, enterprise data, or other
              digital communications.
           
              With IBM Watson™ Natural Language Understanding, developers can
              analyze semantic features of text input, including categories,
              concepts, emotion, entities, keywords, metadata, relations,
              semantic roles, and sentiment.
         
              The Tone Analyzer service analyzes the tone of input content. This
              tutorial shows commands that analyze different sample content. The
              examples demonstrate both the general purpose and the customer
              engagement endpoints.
            </p>
          </div>
        </BuildBox>
        <div class="ui divider" />
      </div>
    );
  }
}

export default Examples;
