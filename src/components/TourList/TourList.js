import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./tourList.scss";
import { tourData } from "../../tourData";

export default class tourList extends Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    const { tours } = this.state;
    const sortedList = tours.filter(newList => newList.id !== id);
    this.setState({
      tours: sortedList
    });
  };
  render() {
    const { tours } = this.state;

    return (
      <section className="tourList">
        {tours.map(tour => (
          <Tour id={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
