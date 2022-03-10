import React from "react";
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'

class BeastSearcher extends React.Component {

  onSubmit = event => {
    event.preventDefault()
    let form = event.target
    let newFilter = form[0].value
    this.props.filterBeasts(newFilter)
    form.reset()
  }

  onHornSelect = key => {
    let result = null
    if(key !== 'no-horn') {
      // in short: "2-horn" => 2
      result = parseInt(key.substring(0, key.indexOf('-')))
    }
    this.props.setHornLevel(result);
  }

  render() {
    const {
      resetBeastFilter,
      removeBeastFilter,
      filters,
      byHorns,
    } = this.props
    return (
      <>
        <div className="searchbar">
          <Nav onSelect={this.onHornSelect} justify variant="tabs" defaultActiveKey="no-horn">
            <Nav.Item>
              <Nav.Link eventKey="no-horn">All Beasts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="1-horn">One Horned</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2-horn">Two Horned</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3-horn">Three Horned</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="100-horn">100 Horned</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form onSubmit={this.onSubmit}>
            <Form.Group className="m-3" controlId="formBasicPassword">
              <Form.Label>Search a beast by name!</Form.Label>
              <Form.Control type="text" placeholder="Name" />
              <Form.Text className="text-muted">
                Will apply on top of filtering by horn count at the top.
              </Form.Text>
            </Form.Group>
            <Button className="mb-3 ml-3" variant="primary" type="submit">
              Submit
            </Button>
            <Button className="mb-3 ml-3" disabled={!filters.length} onClick={() => resetBeastFilter()} variant="warning">
              Remove filters
            </Button>
          </Form>
        </div>
        <span className="filters">
          {(!!filters.length || !!byHorns) && (
            <h3 className="inline-ify">Currently searching {!!byHorns && `${byHorns} horned beasts `}{!!filters.length && 'for'}</h3>
          )}
          {filters.map((filter, index) => (
            <span
              className="filter"
              onClick={() => removeBeastFilter(filter)}
              key={index}>
              {filter}
              <FontAwesomeIcon
                className="remove-filter-icon"
                style={{marginLeft: "0.5rem"}}
                icon={faXmark} />
            </span>
          ))}
        </span>
      </>
    )
  }
}

export default BeastSearcher
