import React from "react";
import "./App.css";
import Axios from "axios";
import UserCard from "./UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
    };
  }

  componentDidMount() {
    Axios.get("https://api.github.com/users/mrsimpson3000")
      .then((response) => {
        console.log(response.data);
        this.setState({
          user: response.data,
        });
        console.log(this.state.user);
      })
      .catch((error) => {
        console.log(`There was an error: ${error}`);
      });

    Axios.get("https://api.github.com/users/mrsimpson3000/followers")
      .then((response) => {
        // console.log(response.data);
        this.setState({
          followers: response.data, // This is an array of objects. Use .map()
        });
        // console.log(this.state.followers);
      })
      .catch((error) => {
        console.log(`There was an error: ${error}`);
      });
  }

  render() {
    return (
      <div>
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;
