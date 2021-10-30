import React from "react";

import Table from "../../molecules/table";
import Button from "../../atoms/button";
import Select from "../../atoms/select";
import Heading from "../../atoms/heading";
import {
  PAYMENT_AMOUNT,
  PAYMENT_CURRENCY,
  PAYMENT_TYPE,
  PAYMENT_STATUS,
  PAYMENT_DATE,
  PAYMENT_PAGE_HEADING,
  PAYMENT_LOAD_MORE,
  FILTER_OPTIONS,
} from "../../../constants";

import "./payment.scss";
import { Context } from "../../../Context/PaymentContext";

const PaymentList = () => {
  const { paymentState, handleStatusChange, loadData } =
    React.useContext(Context);

  const columns = [
    { key: "paymentAmount", label: PAYMENT_AMOUNT },
    { key: "paymentCurrency", label: PAYMENT_CURRENCY },
    { key: "paymentType", label: PAYMENT_TYPE },
    { key: "paymentStatus", label: PAYMENT_STATUS },
    { key: "paymentDate", label: PAYMENT_DATE },
  ];

  return (
    // Use React.Fragment, that help to optimize performace
    // Fragments let you group a list of children without adding extra nodes to the DOM.
    <>
      <div className="row table-header">
        <div className="col-6 pr-2">
          <Heading className="page-heading">{PAYMENT_PAGE_HEADING}</Heading>
        </div>
        <div className="col-6 pl-2 justify-end">
          {/* Select is stateless componenet
           * For stateless component don't have any state at all, which means you can't use this.setState inside this components
           */}
          <Select
            options={FILTER_OPTIONS}
            onChange={handleStatusChange}
            className="form-control select"
          />
        </div>
      </div>

      <div className="data-table">
        {/* Table is stateless componenet
         * same component, use more places and just need to pass "columns" for thead and  "data" for tbody
         */}
        <Table columns={columns} data={paymentState.results} />
      </div>

      <div className="lazy-loading">
        {/* Button is stateless componenet*/}
        <Button
          className="btn btn-secondary btn-sm"
          disabled={!paymentState.metaDatal.hasMoreElements}
          onClick={loadData}
        >
          {PAYMENT_LOAD_MORE}
        </Button>
      </div>
    </>
  );
};

export default PaymentList;
