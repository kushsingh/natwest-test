import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Header from "./components/organisms/header";
import Payments from "./components/pages/Payments";
import PaymentContext from "./Context/PaymentContext";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main role="page content">
        <PaymentContext>
          <Payments />
        </PaymentContext>
      </main>
    </div>
  );
};

export default App;
