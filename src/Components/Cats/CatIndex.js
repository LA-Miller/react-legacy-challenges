import React, { Component } from "react";
import CatList from "./CatList";

export default class CatIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [
        "persian",
        "siamese",
        "maine coon",
        "ragdoll",
        "scottish fold",
        "sphynx",
        "british shorthair",
        "bengal",
        "american shorthair",
      ],
    };
  }

  render() {
    return (
      <div className="main">
        <CatList cats={this.state.breeds} />
      </div>
    );
  }
}
