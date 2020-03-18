import React, { Component } from "react";
import "./tour.scss";

export default class tour extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="imag of the tour" />
          <span className="close-btn" onClick={() => removeTour(id)}>
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h1>{city}</h1>
          <h2>{name}</h2>
          <h3>
            info
            <span>
              {" "}
              <i
                className="fas fa-caret-square-down"
                onClick={this.handleInfo}
              ></i>
            </span>
          </h3>
          {this.state.showInfo && <h5>{info}</h5>}
        </div>
      </article>
    );
  }
}
