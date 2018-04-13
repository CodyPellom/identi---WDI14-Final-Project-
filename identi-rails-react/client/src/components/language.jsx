import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Language extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      users: []
    };
  }

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
  sendTextApi = () => {
    const text = this.refs.text.value;
    console.log("the text sent is" + text + "");
}

  componentDidMount() {
    const text = this.refs.text.value;
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
            users: response.users
          });
          console.log(response.data);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h4>Input Information for IBM Watson to Analyze</h4>

          <ul>
            {users.map(user => (
              <li key={user.usage}>
                {user.keywords} {user.categories}
              </li>
            ))}
          </ul>

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
