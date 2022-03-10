import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import HornedBeastData from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      shownBeast: null,
      displayedBeasts: HornedBeastData,
      filters: [],
      byHorns: null,
    }
  }

  setHornLevel = level => {
    this.setState({byHorns: level})
  }

  showBeast = (shownBeast) => {
    this.setState({
      show: true,
      shownBeast: shownBeast,
    })
  }

  hideBeast = () => {
    this.setState({
      show: false,
      shownBeast: null,
    })
  }

  filterBeasts = (newFilter) => {
    if(this.state.filters.includes(newFilter)) {
      return //don't dupe labels!
    }
    const newFilters = [...this.state.filters]
    newFilters.push(newFilter)
    this.setState({
      displayedBeasts: this.state.displayedBeasts.filter(beast => {
        let sanitized = beast.title.toLowerCase()
        return sanitized.includes(newFilter.toLowerCase())
      }),
      filters: newFilters,
    })
  }

  // removes all beast filters
  resetBeastFilter = () => {
    this.setState({
      displayedBeasts: HornedBeastData,
      filters: [],
    })
  }

  removeBeastFilter = (target) => {
    const newFilters = [...this.state.filters]
    const index = newFilters.indexOf(target);
    newFilters.splice(index, 1)
    this.setState({
      filters: newFilters
    })
    this.updateDisplayedBeasts(newFilters)
  }

  // We have to send through the updated filter list because state hasn't updated yet.
  updateDisplayedBeasts = (newFilters) => {
    let newDisplayedBeasts = HornedBeastData
    for(let filter of newFilters) {
      newDisplayedBeasts = newDisplayedBeasts.filter(beast => {
        let sanitized = beast.title.toLowerCase()
        let result = sanitized.includes(filter.toLowerCase())
        return result
      })
    }
    this.setState({
      displayedBeasts: newDisplayedBeasts
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          setHornLevel={this.setHornLevel}
          byHorns={this.state.byHorns}
          filters={this.state.filters}
          filterBeasts={this.filterBeasts}
          resetBeastFilter={this.resetBeastFilter}
          removeBeastFilter={this.removeBeastFilter}
          displayedBeasts={this.state.displayedBeasts}
          showBeast={this.showBeast} />
        <SelectedBeast show={this.state.show} hideBeast={this.hideBeast} shownBeast={this.state.shownBeast} />
        <Footer />
      </div>
    );
  }
}

export default App;
