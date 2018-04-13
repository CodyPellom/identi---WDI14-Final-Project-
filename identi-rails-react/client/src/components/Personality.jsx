import React, { Component } from 'react';
import axios from 'axios';


class Personality extends Component {
    state = {
        personalityInsights: []
    };

    componentDidMount(){
        axios({
                url: 'https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze',
                method: 'get',
                username: process.env.REACT_APP_PERSONALITY_INSIGHTS_USERNAME,
                password: process.env.REACT_APP_PERSONALITY_INSIGHTS_PASSWORD,
                header: "Content-Type: application/json",
                data_binary: "We observe today not a victory of party but a celebration of freedom, symbolizing an end as well as a beginning, signifying renewal as well aschange. For I have sworn before you and Almighty God the same solemn oath our forbears prescribed nearly a century and three-quarters ago."
               
            })
       
        .then((response) => {
            const personalityInsights = response.data;
            console.log(response.data);
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