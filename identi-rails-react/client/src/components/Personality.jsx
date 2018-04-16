import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Line, Circle } from "rc-progress";

const InputStyler = styled.div`
  #personalityInput {
    margin-top: 35vh;
    width: 50vw;
    height: 5vh;
  }

  .ui,
  .message {
    margin-left: 10vw;
    width: 75vw;
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

const ResponseStyler = styled.div`
.percentLine{
  width: 50vw;
}
`

class Personality extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      text: []
    };
  }

  sendTraitsApi = () => {
    const text = this.refs.text.value;
    console.log("The text sample you sent: " + text + " ");
    axios
      .post(`/api/users/pi`, {
        text: text

        //response from Personality controller. route is api/users/pi
      })
      .then(
        response => {
          console.log("API RETURNED!", response.data);

          this.setState({
            needs: response.data.needs,
            personality: response.data.personality,
            values: response.data.values
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  };
  //match the key with what you want ton the state end: this.state.response.data.trait_id etc. make sure to specify which category Im referring to whether its personality, needs or values in this fashion.

  render() {
    let needs = "";
    if (this.state.needs) {
      needs = this.state.needs.map((need, index) => {
        return (
          <div>
            <h6>Personality Insights: Needs</h6>
            <p key={index}>Need Name:{need.name}</p>
            <br />
            <p>Need Percentile:</p>
            <Line
              class="percentLine"
              percent={need.percentile * 100}
              strokeWidth="1"
              strokeColor="#2db7f5"
              trailColor="#D9D9D9"
            />
          </div>
        );
      });
    }
    let personality = "";
    if (this.state.personality) {
      personality = this.state.personality.map((personality, index) => {
        return (
          <div>
            <p key={index}>Personality Name: {personality.name} </p>
            <br />
            <p>Personality Percentile:</p>
            <Line
              class="percentLine"
              percent={personality.percentile * 100}
              strokeWidth="1"
              strokeColor="#2db7f5"
              trailColor="#D9D9D9"
            />
          </div>
        );
      });
    }
    let values = "";
    if (this.state.values) {
      values = this.state.values.map((value, index) => {
        return(
          <div>
            <p key={index}>Value Name: {value.name}</p>
            <br/>
            <p>Value Percentile:</p>
            <Line
              class="percentLine"
              percent={value.percentile * 100}
              strokeWidth="1"
              strokeColor="#2db7f5"
              trailColor="#D9D9D9"
            />
          </div>
        )
      })
    }

    const { error, traits } = this.state;
    if (error) {
      return <div> Error: {error.message}</div>;
    } else {
      return (
        <div>
          <InputStyler>
            {needs}

            <div class="ui message">
              <div class="header">Personality Insights </div>
              <ul class="list">
                <li>
                  Enables deeper understanding of people's personality
                  characteristics, needs, and values to help engage users on
                  their own terms
                </li>
                <li>
                  You can input: JSON, or Text or HTML (such as social media,
                  emails, blogs, or other communication) written by one
                  individual
                </li>
                <li>
                  And the service will output: A tree of cognitive and social
                  characteristics in JSON or CSV format
                </li>
              </ul>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input id="personalityInput" ref="text" type="text" />
              </div>
            </div>
            <br />
            <a
              id="buttonStyle"
              class="waves-effect waves-light btn"
              onClick={this.sendTraitsApi}
            >
              Analyze Personality Traits
            </a>
          </InputStyler>
          <div class="ui divider" />
        </div>
      );
    }
  }
}

export default Personality;
