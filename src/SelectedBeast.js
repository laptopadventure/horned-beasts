import React from "react";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {
  render() {
    const {
      show,
      hideBeast,
      shownBeast,
    } = this.props;
    if(!shownBeast) {
      return null
    }
    return (
      <Modal centered show={show} onHide={() => hideBeast()} >
        <Modal.Body>
          <img src={shownBeast.imageUrl} alt={shownBeast.title} />
          <h3>
            {shownBeast.title}
          </h3>
          <p>
            {shownBeast.description}
          </p>
          <p>
            ❤️ Favorites: {shownBeast.favorites} | Horn Count: {shownBeast.horn}
          </p>
        </Modal.Body>
      </Modal>
    )
  }
}

export default SelectedBeast
