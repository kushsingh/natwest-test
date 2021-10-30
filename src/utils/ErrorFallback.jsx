import React from "react";
import "./utilities.scss";

const ErrorFallback = () => {
  return (
    <div className="error-info" role="alert">
      <h1>Something Went Wrong!!!</h1>
    </div>
  );
};

export default ErrorFallback;
