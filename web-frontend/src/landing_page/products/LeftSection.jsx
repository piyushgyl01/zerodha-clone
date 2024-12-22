import React from "react";

export default function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} className="img-fluid" alt="" />
        </div>
        <div className="p-5 mt-5 col-6">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              {" "}
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <div className="row">
              <div className="col-3">
                <a href={googlePlay}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>{" "}
              <div className="col-3">
                <a href={appStore}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>{" "}
              <div className="col-3"></div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
