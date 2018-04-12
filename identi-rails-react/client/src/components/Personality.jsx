import React, { Component } from 'react';
import axios from 'axios';

class Personality extends Component {
    state = {
        personalityInsights: []
    };

    componentDidMount(){
        axios.get("https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze", {
            params: {
               
                username: '{process.env.REACT_APP_PERSONALITY_INSIGHTS_USERNAME}',
                password: '{process.env.REACT_APP_PERSONALITY_INSIGHTS_PASSWORD}',
                header: "Content-Type: application/json",
                Content-Type: "application/json"
            }
        })
        .then((response) => {
            const personalityInsights = response.data;
            this.setState({personalityInsights: personalityInsights});
        })
        .catch((error) => {
        console.error("error": "error");
        });
    }
    render() {
        const personalityInsights = this.state.personalityInsights.map((insights, i) => (
           <div className="insights" key={i}>
            <p>{insights.keywords}</p>
            </div>
        ))
        return (
            <div className="personalityInsightsContainer">
            <h3>Sample Personality Insights</h3>
            <div className="personalityInsightsFlexContainer">
              {personalityInsights}
            </div>
          </div>
        );
    }
}

export default Personality;