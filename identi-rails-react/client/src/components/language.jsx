import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Line, Circle } from "rc-progress";
import styled from "styled-components";

const ResponseStyler = styled.div`
  .percentLine {
    width: 50vw;
  }
  h5 {
    font-family: "Forum";
  }
`;

const LanguageStyle = styled.div`
  .ui,
  .message {
    margin-left: 10vw;
    width: 75vw;
  }

  #inputLineStyle {
    margin-top: 35vh;
    width: 50vw;
    height: 3vh;
  }
  #buttonStyle1,
  .waves-effect,
  .waves-light,
  .btn {
    width: 17.5vw;
    height: 5vh;
    font-family: "Forum";
    margin-right: 5vw;
    margin-bottom: 7.5vh;
    background-color: rgb(1, 73, 188);
  }
  #buttonStyle2,
  .waves-effect,
  .waves-light,
  .btn {
    width: 17.5vw;
    height: 5vh;
    font-family: "Forum";
    margin-left: 5vw;
    margin-bottom: 7.5vh;
    background-color: rgb(1, 73, 188);
  }
`;

class Language extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      // isLoaded: false,
      users: ""
    };
  }
  handleChange = event => {
    this.setState({
      users: event.target.value
    });
  };

  ClearFields = () => {
    this.setState({ users: "" });
  };

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
              <h4>Category</h4>
              <h5 key={index}>{category.label}</h5>
              <br />
              <h5>Relevance to Input: {category.score * 100}</h5>

              <Line
                class="percentLine"
                percent={category.score * 100}
                strokeWidth="2"
                strokeColor="#2db7f5"
                trailColor="#D9D9D9"
              />
              <br />
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
              <h4>Concepts</h4>
              <h5 key={index}>Concept: {concepts.text}</h5>
              <br />
              <h5>Relevance to Input: {concepts.relevance * 100}</h5>

              <Line
                class="percentLine"
                percent={concepts.relevance * 100}
                strokeWidth="2"
                strokeColor="#2db7f5"
                trailColor="#D9D9D9"
              />
              <br />
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
              <h4>Keywords</h4>
              <h5 key={index}>Keyword: {keyword.text}</h5>
              <br />
              <h5>Relevance to Keyword:{keyword.relevance * 100}</h5>

              <Line
                class="percentLine"
                percent={keyword.relevance * 100}
                strokeWidth="2"
                strokeColor="#2db7f5"
                trailColor="#D9D9D9"
              />
              <br />
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
          <div id="languageInput">
            <LanguageStyle>
              <div>{catagories}</div>
              <div>{concepts}</div>
              <div>{keywords}</div>

              <div class="ui message">
                <div class="header">Natural Language Understanding</div>
                <ul class="list">
                  <li>
                    Intended Use: Natural Language Understanding enables
                    advanced text analysis through natural language processing.
                    The service analyzes unstructured text to extract metadata
                    such as entities, general concepts, keywords, categories,
                    relations, sentiment, and emotion. With custom annotation
                    models developed using Watson Knowledge Studio, you can
                    further customize the service to identify domain-specific
                    entities and relations in your content.
                  </li>
                  <li>
                    Example Usage: Natural Language Understanding can be useful
                    in many scenarios that demand rapid analysis of unstructured
                    text without requiring in-depth natural language processing
                    expertise. For example, you can monitor sentiment and
                    emotion in customer support chat transcripts, or you can
                    quickly categorize blog posts and sort them based on general
                    concepts, keywords, and entities.
                  </li>
                </ul>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <input
                    type="text"
                    id="inputLineStyle"
                    ref="text"
                    value={users}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <br />
              <a
                id="buttonStyle1"
                class="waves-effect waves-light btn"
                onClick={this.sendTextApi}
              >
                Analyze Language
              </a>
              <a id="buttonStyle2" class="waves-effect waves-light btn"  onClick={this.ClearFields}>
                Clear Input
              </a>
            </LanguageStyle>
            <div class="ui divider" />
          </div>
        </div>
      );
    }
  }
}

export default Language;
