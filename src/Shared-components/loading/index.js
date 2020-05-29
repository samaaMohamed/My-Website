import React, { Component } from "react";
import { Facebook } from "react-content-loader";

export default class Loading extends Component {
  render() {
    return (
      <Facebook
        title={this.props.title}
        height={240}
        backgroundColor={"#333"}
        foregroundColor={"#999"}
      />
    );
  }
}
