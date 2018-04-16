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
  #buttonStyle,
  .waves-effect,
  .waves-light,
  .btn {
    width: 15vw;
    height: 5vh;
    font-family: 'Forum';
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
                Categories: {category.label}</p>
                <br/>
               <p>Category Score:{category.score * 100}</p>
              
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
                Concepts Name: {concepts.text}</p>
                <br/>
                 <p>Concept Relevance:{concepts.relevance * 100}</p>
              
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
                Keywords: {keyword.text}</p>
                <br/>
               <p>Relevance to Keyword:{keyword.relevance * 100}</p>
              
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
          <div id="languageInput">
            <LanguageStyle>
              {catagories}
              {concepts}

              <div class="ui message">
                <div class="header">Natural Language Understanding</div>
                <ul class="list">
                  <li>Intended Use: Natural Language Understanding enables advanced text analysis through natural language processing. The service analyzes unstructured text to extract metadata such as entities, general concepts, keywords, categories, relations, sentiment, and emotion. With custom annotation models developed using Watson Knowledge Studio, you can further customize the service to identify domain-specific entities and relations in your content.</li>
                  <li>Example Usage: Natural Language Understanding can be useful in many scenarios that demand rapid analysis of unstructured text without requiring in-depth natural language processing expertise. For example, you can monitor sentiment and emotion in customer support chat transcripts, or you can quickly categorize blog posts and sort them based on general concepts, keywords, and entities.</li>
                </ul>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <input
                    id="inputLineStyle"
                    ref="text"
                  />
                </div>
              </div>
              <br />
              <a
                id="buttonStyle"
                class="waves-effect waves-light btn"
                onClick={this.sendTextApi}
              >
                Analyze Language
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
