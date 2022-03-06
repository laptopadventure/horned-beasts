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
    const {
      title,
      description,
      imageUrl,
      showBeast,
      horns,
    } = this.props;
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageUrl} onClick={this.bumpCounter} />
        <Card.Body
          onClick={() => showBeast({
            title: title,
            description: description,
            imageUrl: imageUrl,
            favorites: this.state.counter,
            horn: horns,
          })} >
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
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
