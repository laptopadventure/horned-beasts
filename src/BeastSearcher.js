import React from "react";
import Button from "react-bootstrap/Button"


class BeastSearcher extends React.Component {

  onSubmit = (event) => {
    event.preventDefault()
    let newFilter = event.target[0].value
    this.props.filterBeasts(newFilter)
  }

  render() {
    const { resetBeastFilter } = this.props
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
          <Button onClick={() => resetBeastFilter()} variant="secondary">
            Remove filters
          </Button>
        </form>
        {!!this.props.filters.length && (<h3>Currently Searching For:</h3>)}
        <div className="filters">
          {this.props.filters.map((filter, index) => (
            <p className="filter" key={index}>
              {filter}
            </p>
          ))}
        </div>
      </>
    )
  }
}

export default BeastSearcher
