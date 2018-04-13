import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
            isLoaded: true,
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
            isLoaded: true,
            error
          });
        }
      );
  };

  render() {
    let catagories = "DEFAULT"
    if (this.state.categories) {
      catagories = this.state.categories.map((category, index) => {
        return (<p key={index}>
          Hello, {category.label} from {category.score}!
        </p>);
      });
    }

    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div> Error: {error.message}</div>;
    } else {
      return (
        <div>
         {catagories}

          <input
            ref="text"
            placeholder="example: emailed correspondence / social media samples"
          />
          <button onClick={this.sendTextApi}>Analyze Language</button>
        </div>
      );
    }
  }
}

export default Language;

//   componentWillMount() {
//     this.fetchUsers();
//   }

//   fetchUsers = async () => {
//     try {
//       const res = await axios.get("/api/users/nlp");
//       await this.setState({ users: res.data });
//       return res.data;
//     } catch (err) {
//       console.log(err);
//       await this.setState({ error: err.message });
//       return err.message;
//     }
//   };
//sending input from user to api
//   sendTextApi = () => {

// };

// {/* const catagory =     {this.state.catagories.map(category =>) */}

//  {this.state.catagories.map((catagory, index) => (
//     <p>This is the Catagory: {catagory.label}</p>
//     <p>The relevence score is: {category.score}</p>

// </ul>

//     {/* <p>{this.state.categories}</p>
//     <p>{this.state.concepts}</p>
//     <p>{this.state.entities}</p>
//     <p>{this.state.keywords}</p>
//     <p>{this.state.usage}</p> */}

// {/* //<li>{this.state.keywords}</li> */}

//                                                                                 {/* {users.map(user => (
//                                                         this.state.catagories.map <li key={user.usage}>
//                                                {user.keywords} {user.categories}
//                                                                            </li>
//                                                                          ))} */}

// <ul>
// {this.state.categories.map((catagory, index) => (
// <li><p>Catagory: {categoty.label}</p></li>
// <li><p>relevence: {category.score}</p></li>

// </ul>

// ))}
