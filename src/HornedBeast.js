import React from "react";
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  bumpCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img style={{ width: '18rem' }} variant="top" src={this.props.imageUrl} onClick={this.bumpCounter} />
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Body>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Card.Text>
            ❤️ Favorites: {this.state.counter}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast
