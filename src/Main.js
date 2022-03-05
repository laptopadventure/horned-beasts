import React from "react";
import HornedBeast from "./HornedBeast";
import HornedBeastData from "./data.json";

class Main extends React.Component {
  render() {
    return (
      <>
        <h1>
          Welcome to the Sickest Horned Animal Image Collation Site.
        </h1>
        <div className="beast-flex">
          {HornedBeastData.map((beastData, index) => (
            <HornedBeast
              title={beastData.title}
              description={beastData.description}
              imageUrl={beastData.image_url} />
          ))}
        </div>
      </>
    )
  }
}

export default Main
