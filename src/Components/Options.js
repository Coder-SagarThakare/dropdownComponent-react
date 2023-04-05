import React from "react";
import Avatar from "react-avatar";
import { components } from "react-select";

export default function Options(props) {
  return (
    <components.Option
      {...props}
      // className="d-flex align-items-center gap-1 bg-light dropdownMenu "
      className="flex items-center gap-0.5 bg-gray-50  dropdownMenu border border-danger  "
    >
      {/* {props.isMulti ? (
          <input
            type="checkbox" 
            // defaultChecked= {true}
            checked={props.isSelected}
            onChange={() => null}
          />
        ) : (
          ""
        )} */}

      {props.isMulti ? (
        <input
          className="checkbox pointer border border-danger"
          type="checkbox"
          id="check"
          checked={props.isSelected}
          onChange={() => null}
        />
      ) : (
        ""
      )}

      <Avatar name={props.label} size="20" round={true} className="mx-1 border border-danger" />
      <label className="name mx-2 underline border border-danger">{props.label}</label>
    </components.Option>
  );
}
