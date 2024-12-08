import React from "react";
//import User from "./user";
import UserClass from "./UserClass";
import UserContext from "../utilis/UserContext";

class About extends React.Component {
  constructor() {
    super();
    console.log("parent constructor called");
  }
  componentDidMount() {
    console.log("parent mounted");
  }
  render() {
    console.log("parent rendered");
    return (
      <div>
        <h1 className="text-4xl font-bold">About Us</h1>
        <div>
          LoggedIn user
          <UserContext.Consumer>
            {({ loggedInUSer }) => (
              <h1 className="text-xl font-bold"> {loggedInUSer} </h1>
            )}
          </UserContext.Consumer>
        </div>

        <UserClass name={" Trisha(class)"} />
      </div>
    );
  }
}
export default About;
