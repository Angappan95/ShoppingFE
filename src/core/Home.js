import React from "react";
// import { API } from "../backend";
import Base from "../core/Base"


const Home = () => {
  return (
    <Base title="Home Page" description="This is Home page" children="Hellow world!">
      <div className="row">
        <div className="col-2">
          <button className="btn-success btn-round-lg btn-lg" style={{ borderRadius: 10 }}>Buy</button>
        </div>
        <div className="col-2">
          <button className="btn-info btn-round-lg btn-lg" style={{ borderRadius: 10 }}>Add to Wishlist</button>
        </div>
      </div>
    </Base>
  );
};
export default Home;