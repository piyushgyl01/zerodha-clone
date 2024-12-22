import React from "react";

export default function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="https://zerodha.com/static/images/landing.png"
          alt="heroImg"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in Everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
            Sign up Now
        </button>
      </div>
    </div>
  );
}
