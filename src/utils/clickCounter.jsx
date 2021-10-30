/** @PaymentContext.js
 *  Currently this component is not used
 *  the PaymentContext Context to other needy components
 *  */
import React, { useState } from "react";
import { useErrorHandler } from "react-error-boundary";

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const handlerError = useErrorHandler()
  const MAX_COUNT_ALLOWED = 5;

  const handleclick = () => {
    try {
      if (count === MAX_COUNT_ALLOWED) {
        throw new Error("Count limit exceeded");
      } else {
        setCount((c) => c + 1);
      }
    } catch (e) {
        handlerError(e)
    }
  };

  return (
    // Use React.Fragment, that help to optimize performace
    // Fragments let you group a list of children without adding extra nodes to the DOM.
    <>
      <button className="btn btn-warning" onClick={handleclick}>
        Counter {count}
      </button>
    </>
  );
};

export default ClickCounter;
