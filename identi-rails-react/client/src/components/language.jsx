import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Line, Circle } from "rc-progress";
import styled from "styled-components";

const ResponseStyler = styled.div`
  .percentLine {
    width: 50vw;
  }
`;

const LanguageStyle = styled.div`
#inputLineStyle{
margin-top: 35vh;

}
#buttonStyle, .waves-effect, .waves-light, .btn {
background-color: red;
margin-bottom: 7.5vh;
}
`

class Language extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      // isLoaded: false,
      users: []
    };
  }

  sendTextApi = () => {
    // const text = this.refs.text.value;

    const text = this.refs.text.value;
    console.log("the text sent is" + text + "");
    axios
      .get(`/api/users/nlp`, {
        params: {
          text: text
        }
        //response from controller (and api)
      })
      .then(
        response => {
          this.setState({
            // isLoaded: true,
            categories: response.data.categories,
            concepts: response.data.concepts,
            entities: response.data.entities,
            keywords: response.data.keywords,
            usage: response.data.usage
          });
          console.log(response.data);
        },
        error => {
          this.setState({
            error
          });
        }
      );
  };

  render() {
    let catagories = "";
    if (this.state.categories) {
      catagories = this.state.categories.map((category, index) => {
        return (
          <div>
            <ResponseStyler>
              <p key={index}>
                Categories: {category.label}
                Category Score:
              </p>
              <Line
                class="percentLine"
                percent={category.score * 100}
                strokeWidth="1"
                strokeColor="#2db7f5"
                trailColor="#D9D9D9"
              />
            </ResponseStyler>
          </div>
        );
      });
    }

    let concepts = "";
    if (this.state.concepts) {
      concepts = this.state.concepts.map((concepts, index) => {
        return (
          <div>
            <ResponseStyler>
              <p key={index}>
                Concepts Name: {concepts.text} Concept Relevance:
              </p>
              <Line
                class="percentLine"
                percent={concepts.relevance * 100}
                strokeWidth="1"
                strokeColor="#2db7f5"
                trailColor="#D9D9D9"
              />
            </ResponseStyler>
          </div>
        );
      });
    }

    let keywords = "";
    if (this.state.keywords) {
      keywords = this.state.keywords.map((keyword, index) => {
        return (
          <div>
            <ResponseStyler>
              <p key={index}>
                Keywords: {keyword.text}
                Relevance to Keyword:
              </p>
              <Line
                class="percentLine"
                percent={keyword.relevance * 100}
                strokeWidth="1"
                strokeColor="#2db7f5"
                trailColor="#D9D9D9"
              />
            </ResponseStyler>
          </div>
        );
      });
    }

    const { error, users } = this.state;
    if (error) {
      return <div> Error: {error.message}</div>;
    } else {
      return (
        <div>
          <LanguageStyle>
            {catagories}
            {concepts}

            <input id="inputLineStyle"
              ref="text"
              placeholder="example: emailed correspondence / social media samples"
            />
            <a id="buttonStyle" class="waves-effect waves-light btn" onClick={this.sendTextApi}>Analyze Language</a>
          </LanguageStyle>
          <div class="ui divider" />
        </div>
      );
    }
  }
}

export default Language;
