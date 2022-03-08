import React from "react";
import Button from "react-bootstrap/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'

class BeastSearcher extends React.Component {

  onSubmit = (event) => {
    event.preventDefault()
    let form = event.target
    let newFilter = form[0].value
    this.props.filterBeasts(newFilter)
    form.reset()
  }

  render() {
    const {
      resetBeastFilter,
      removeBeastFilter,
    } = this.props
    return (
      <>
        <form className="searchbar" onSubmit={this.onSubmit}>
          <p>
            Search a beast by name!
          </p>
          <input type="text" id="searchTerm" name="name" required />
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button disabled={!this.props.filters.length} onClick={() => resetBeastFilter()} variant="warning">
            Remove filters
          </Button>
        </form>
        <span className="filters">
          {!!this.props.filters.length && (
            <h3 className="inline-ify">Currently searching for</h3>
          )}
          {this.props.filters.map((filter, index) => (
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
