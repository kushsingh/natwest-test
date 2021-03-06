/** @PaymentContext.js
 *  This component is a wrapper which will provide
 *  the PaymentContext Context to other needy components
 *  */

import React, { useState } from "react";
import { FetchWrapper } from "../services/api.service";
import { API_URLS_PAYMENTLIST } from "../services/constant/constants";

const initialState = { results: [], metaDatal: {}, resultsBkp: [], status: "" };
// Creating global context
export const Context = React.createContext(initialState);

const PaymentContext = (props) => {
  const [paymentState, paymentDispatch] = useState(initialState);

  //console.log("paymentStatus has been updated", [...paymentState.results])

  // This method will save payment list according to salected filter
  const filterDataByStatus = (status, items) => {
    if (!status) return items;
    return items.filter((data) => data.paymentStatus === status);
  };

  // This method will call on payment load and click on "loadmore" button
  const loadData = () => {
    FetchWrapper.get(
      `${API_URLS_PAYMENTLIST}${
        paymentState.metaDatal.nextPageIndex
          ? `?nextPageIndex=${paymentState.metaDatal.nextPageIndex}`
          : ""
      }`
    )
      .then((response) => response.json())
      .then((json) => new Promise((resolve, reject) => {
        const oldResults = [...paymentState.results, ...json.results];
        
        /** Here paymentDispatch will updated on page load and load more payment
         *  metaDatal - based on metaDatal, the "Load More" button enable and disable 
         *  results - updaing filter status and updated oldresults
         *  resultsBkp - creating backup original response 
         **/
        paymentDispatch({
          metaDatal: json.metaDatal,
          results: filterDataByStatus(paymentState.status, [...oldResults]), 
          resultsBkp: oldResults,
        });
        
        //console.log("paymentStatus has not updated", [...paymentState.results])
      }))
      .catch(error => console.log(error.message));
  };

  // This method will call on change of filter payment list select box
  const handleStatusChange = (event) => {
    const filteredData = filterDataByStatus(
      event.target.value,
      paymentState.resultsBkp
    );

    paymentDispatch({
      ...paymentState,
      results: filteredData,
      status: event.target.value,
    });
  };

  // useEffect is called when page loads OR when any param provieded in depencency array changes
  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <Context.Provider
      value={{ paymentState, paymentDispatch, loadData, handleStatusChange }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default PaymentContext;
