import React, { Component } from "react";
import styled from "styled-components";

const BuildBox = styled.div`
  .ExamplesBuildBox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 10vh;
    padding-bottom: 10vh;
  }

  #rightBox {
    margin-left: 7.5vw;
    min-width: 30vw;
    min-height: 37.5vh;
  }

  #leftBox {
    margin-right: 7.5vw;
    min-width: 30vw;
    min-height: 37.5vh;
  }

  #identiDescriptionText {

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
          <div class="ExamplesBuildBox">
            <img
              id="leftBox"
              src="https://i.imgur.com/L1yrlaZ.png"
              alt="examples"
            />
            <img
              id="rightBox"
              src="https://i.imgur.com/L1yrlaZ.png"
              alt="examples"
            />
          </div>
        <div id="identiDescriptionText" class="ui piled segment">
          <p>
            identi uses three IBM Watson APIs to analyze professional
            correspondence, and return feedback about personality (Wants, Needs
            and the Big Five), tone and natural language understanding.
            <br />
            <br />
            The IBM Watson™ Personality Insights service enables applications to
            derive insights from social media, enterprise data, or other digital
            communications.
            <br />
            <br />
            With IBM Watson™ Natural Language Understanding, developers can
            analyze semantic features of text input, including categories,
            concepts, emotion, entities, keywords, metadata, relations, semantic
            roles, and sentiment.
            <br />
            <br />
            The Tone Analyzer service analyzes the tone of input content. This
            tutorial shows commands that analyze different sample content. The
            examples demonstrate both the general purpose and the customer
            engagement endpoints.
          </p>
        </div>
        </BuildBox>
      </div>
    );
  }
}

export default Examples;
