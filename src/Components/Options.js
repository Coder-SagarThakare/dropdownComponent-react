import React from "react";
import Avatar from "react-avatar";
import { components } from "react-select";

export default function Options(props) {
  return (
      <components.Option
        {...props}
        className="d-flex align-items-center gap-1 bg-light dropdownMenu "
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
            className="checkbox pointer"
            type="checkbox"
            id="check"
            checked={props.isSelected}
            onChange={() => null}
          />
        ) : (
          ""
        )}
        
        <Avatar name={props.label} size="20" round={true} className="mx-1" />
        <label className="name mx-2">{props.label}</label>
      </components.Option>
  );
}
