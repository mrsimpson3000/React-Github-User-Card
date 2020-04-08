import React from "react";
import "./App.css";
import Axios from "axios";
import UserCard from "./UserCard";
import FollowerCard from "./FollowerCard";
import { Row } from "reactstrap";

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
        // console.log(response.data);
        this.setState({
          user: response.data,
        });
        // console.log(this.state.user);
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
      <>
        <Row className='mt-2 mb-2'>
          <UserCard user={this.state.user} />
        </Row>
        <Row>
          <FollowerCard follower={this.state.followers} key='1' />
        </Row>
      </>
    );
  }
}

export default App;
