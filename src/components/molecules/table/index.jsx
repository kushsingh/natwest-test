import React from "react";
import { PropTypes } from "prop-types";

const Table = ({ columns, data }) => {
  return (
    <table className="table table-striped table-bordered m-0">
      <thead className="thead-dark">
        <tr>
          {columns.map((item) => (
            <th key={item.key}>{item.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((dataItem, index) => {
          return (
            <tr key={`row-${index}`}>
              {columns.map((item) => (
                <td key={`row-column-${item.key}`}>{dataItem[item.key]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
};

export default Table;
