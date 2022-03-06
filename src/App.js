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
    }
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

  resetBeastFilter = () => {
    this.setState({
      displayedBeasts: HornedBeastData,
      filters: [],
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          filters={this.state.filters}
          filterBeasts={this.filterBeasts}
          resetBeastFilter={this.resetBeastFilter}
          displayedBeasts={this.state.displayedBeasts}
          showBeast={this.showBeast} />
        <SelectedBeast show={this.state.show} hideBeast={this.hideBeast} shownBeast={this.state.shownBeast} />
        <Footer />
      </div>
    );
  }
}

export default App;
