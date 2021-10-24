import React from "react";
import { PropTypes } from "prop-types";

const Select = (props) => {
  const { options, ...otherProps } = props;

  return (
    <select {...otherProps}>
      <option value="" key="-1">
        -- Select --
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  otherProps: PropTypes.any,
};

export default Select;
