import React from "react";

export default function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
