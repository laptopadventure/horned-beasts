import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <>
        <h1>
          Welcome to the Sickest Horned Animal Image Collation Site.
        </h1>
        <HornedBeast
          title={"Buffalo"}
          description={"Probably a Water Buffalo, but I'm not confident enough to title it that."}
          imageUrl={"https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?cs=srgb&dl=pexels-harvey-sapir-1054650.jpg&fm=jpg"} />
        <HornedBeast
          title={"Unicorn?"}
          description={"...Are you doubting me?"}
          imageUrl={"https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} />
      </>
    )
  }
}

export default Main
