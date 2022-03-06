import React from "react";
import HornedBeast from "./HornedBeast";
import BeastSearcher from "./BeastSearcher";

class Main extends React.Component {
  render() {
    return (
      <>
        <BeastSearcher
          filters={this.props.filters}
          filterBeasts={this.props.filterBeasts}
          resetBeastFilter={this.props.resetBeastFilter} />
        <div className="beast-flex">
          {this.props.displayedBeasts.map((beastData, index) => (
            <HornedBeast
              key={index}
              showBeast={this.props.showBeast}
              title={beastData.title}
              description={beastData.description}
              imageUrl={beastData.image_url}
              horns={beastData.horns} />
          ))}
        </div>
      </>
    )
  }
}

export default Main
