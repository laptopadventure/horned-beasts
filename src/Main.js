import React from "react";
import HornedBeast from "./HornedBeast";
import HornedBeastData from "./data.json"

class Main extends React.Component {
  render() {
    return (
      <>
        <h1>
          Welcome to the Sickest Horned Animal Image Collation Site.
        </h1>
        <div className="beast-flex">
          {/* Horned Beasts I added... */}
          <HornedBeast
            title={"Buffalo"}
            description={"Probably a Water Buffalo, but I'm not confident enough to title it that."}
            imageUrl={"https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?cs=srgb&dl=pexels-harvey-sapir-1054650.jpg&fm=jpg"} />
          <HornedBeast
            title={"Unicorn?"}
            description={"...Are you doubting me?"}
            imageUrl={"https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} />
          <HornedBeast
            title={"Antelope"}
            description={"Elegant, aren't they?"}
            imageUrl={"https://images.pexels.com/photos/52961/antelope-nature-flowers-meadow-52961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} />
          {/* And Horned Beasts Parsed from Data. */}
          {HornedBeastData.map(beastData => {
            return (<HornedBeast
              title={beastData.title}
              description={beastData.description}
              imageUrl={beastData.image_url} />
          )})}
        </div>
      </>
    )
  }
}

export default Main
