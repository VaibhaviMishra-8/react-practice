import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("child constructor called");
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  componentDidMount(){
    console.log("child mounted");

  }
  render() {
    console.log("child rendered");
    return (
      <div className="user-card">

        <h2>Name:{this.props.name}</h2>
        <h3>location:kolkata</h3>
        <h4></h4>
        <h4>contact: 1223456</h4>
      </div>
    );
  }
}

export default UserClass;
//        <h1>count: {this.state.count}</h1>
//<h1>count2: {this.state.count2}</h1>
//<button
  //onClick={() => {
    //this.setState({
      //count: this.state.count + 1,
    //});
  //}}
//>count increase</button>