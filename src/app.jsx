import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Header from "./components/organisms/header";
import Payments from "./components/pages/Payments";
import PaymentContext from "./Context/PaymentContext";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./utils/errorFallback";


const App = () => {
  const errorHandler = (error, errorInfo) => {
    //Use loging service here instead of console
    console.log("Logging", error, errorInfo);
  };

  return (
    <div className="App">
      <Header />
      <main role="page content">
        <PaymentContext>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={errorHandler}
          >
            <Payments />
          </ErrorBoundary>
        </PaymentContext>
      </main>
    </div>
  );
};

export default App;
