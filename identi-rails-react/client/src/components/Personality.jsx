import React, { Component } from "react";
import axios from "axios";

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
      .then(response => {
        console.log("API RETURNED!", response.data);

          this.setState({
            needs: response.data.needs,
            personality: response.data.personality,
            values: response.data.values,
           
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
        return(
          <div>
      <h1>Personality Category</h1>
          <p key={index}>
             Personality Name: {need.name} Personality Catagory: {need.category} Percentile: {need.percentile} Significance: {need.significant}
          </p>
          </div>
        );
      });
    }

    const { error, traits } = this.state;
    if (error) {
      return <div> Error: {error.message}</div>;
    } else {
      return (
        <div>
          {needs}

          
        
          <input
            ref="text"
            placeholder="example: emailed correspondence or social media snippets"
          />
          <button onClick={this.sendTraitsApi}>
            Analyze Personality Traits
          </button>
        </div>
      );
    }
  }
}

export default Personality;

// state = {
//     personalityInsights: []
// };

// componentDidMount(){
//     axios({
//             url: 'https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze',
//             method: 'get',
//             username: process.env.REACT_APP_PERSONALITY_INSIGHTS_USERNAME,
//             password: process.env.REACT_APP_PERSONALITY_INSIGHTS_PASSWORD,
//             header: "Content-Type: application/json",
//             data_binary: "We observe today not a victory of party but a celebration of freedom, symbolizing an end as well as a beginning, signifying renewal as well aschange. For I have sworn before you and Almighty God the same solemn oath our forbears prescribed nearly a century and three-quarters ago."

//         })

//     .then((response) => {
//         const personalityInsights = response.data;
//         console.log(response.data);
//         this.setState({personalityInsights: personalityInsights});
//     })
//     .catch((error) => {
//     console.error("error": "error");
//     });
// }
// render() {
//     const personalityInsights = this.state.personalityInsights.map((insights, i) => (
//        <div className="insights" key={i}>
//         <p>{insights.keywords}</p>
//         </div>
//     ))
//     return (
//         <div className="personalityInsightsContainer">
//         <h3>Sample Personality Insights</h3>
//         <div className="personalityInsightsFlexContainer">
//           {personalityInsights}
//         </div>
//       </div>
//     );
// }
