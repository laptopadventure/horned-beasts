import React from "react";
import HornedBeast from "./HornedBeast";
import BeastSearcher from "./BeastSearcher";

class Main extends React.Component {
  render() {
    const {
      showBeast,
      removeBeastFilter,
      resetBeastFilter,
      filterBeasts,
      filters,
      displayedBeasts,
    } = this.props;
    return (
      <>
        <BeastSearcher
          filters={filters}
          filterBeasts={filterBeasts}
          resetBeastFilter={resetBeastFilter}
          removeBeastFilter={removeBeastFilter} />
        {!displayedBeasts.length && (
          <h3 className="no-results">No results with those search filters, sorry!</h3>
        )}
        <div className="beast-flex">
          {!!displayedBeasts.length && (
            displayedBeasts.map((beastData, index) => (
              <HornedBeast
                key={index}
                showBeast={showBeast}
                title={beastData.title}
                description={beastData.description}
                imageUrl={beastData.image_url}
                horns={beastData.horns} />
          )))}
        </div>
      </>
    )
  }
}

export default Main
