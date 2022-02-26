import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (
      <>
        <h2>
          {this.props.title}
        </h2>
        <p>
          {this.props.description}
        </p>
        <img height='300' src={this.props.imageUrl} alt={this.props.title} />
      </>
    )
  }
}

export default HornedBeast
