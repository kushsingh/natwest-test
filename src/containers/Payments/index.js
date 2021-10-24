import React, { useEffect, useState } from "react";

import { getPaymentList } from "../../services/api.service";

export default function PaymentHOC(ComponentName) {
  return () => {
    const [payments, updatePayments] = useState({ results: [], metaDatal: {} });
    const [oldResultsBkp, updateBkp] = useState([]);

    // Creating back-up of JSON responce to use on page load and for filters
    const updatePaymentState = (newState) => {
      updateBkp([...newState.results]);
      updatePayments(newState);
    };

    // loadMore method will help to get more payment list
    const loadMore = () => {
      getPaymentList(`?nextPageIndex=${payments.metaDatal.nextPageIndex}`)
        .then((response) => response.json())
        .then((json) => {
          const oldResults = [...payments.results, ...json.results];
          updatePaymentState({
            metaDatal: json.metaDatal,
            results: oldResults,
          });
        });
    };

    // handleStatusChange will check complete paymet list is loaded and accordingly diable the "Load More" button
    const handleStatusChange = (event) => {
      const selectedState = event.target.value;

      if (selectedState) {
        const filteredData = oldResultsBkp.filter(
          (data) => data.paymentStatus === event.target.value
        );
        updatePayments({
          metaDatal: payments.metaDatal,
          results: filteredData,
        });
      } else {
        updatePayments({
          metaDatal: payments.metaDatal,
          results: oldResultsBkp,
        });
      }
    };

    // In UseEffect called whent the state has been changed, the will update
    useEffect(() => {
      getPaymentList("")
        .then((response) => response.json())
        .then((json) => updatePaymentState(json));
    }, []);
    return (
      <ComponentName
        payments={payments}
        loadMore={loadMore}
        handleStatusChange={handleStatusChange}
      />
    );
  };
}
