import React from "react";
import HornedBeast from "./HornedBeast";
import BeastSearcher from "./BeastSearcher";

class Main extends React.Component {
  render() {
    const {
      showBeast,
      removeBeastFilter,
      resetBeastFilter,
      setHornLevel,
      byHorns,
      filterBeasts,
      filters,
      displayedBeasts,
    } = this.props;
    // I know, bad naming, but this takes horns into consideration.
    const finalDisplayedBeasts = !byHorns ?
      displayedBeasts
      : displayedBeasts.filter(beast => {
      return beast.horns === byHorns
    })
    return (
      <>
        <BeastSearcher
          filters={filters}
          filterBeasts={filterBeasts}
          resetBeastFilter={resetBeastFilter}
          removeBeastFilter={removeBeastFilter}
          setHornLevel={setHornLevel}
          byHorns={byHorns} />
        {!finalDisplayedBeasts.length && (
          <h3 className="no-results">No results with those search conditions, sorry!</h3>
        )}
        <div className="beast-flex">
          {!!finalDisplayedBeasts.length && (finalDisplayedBeasts.map((beastData, index) => (
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
