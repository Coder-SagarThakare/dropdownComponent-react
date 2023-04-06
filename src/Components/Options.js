import React from "react";
import Avatar from "react-avatar";
import { components } from "react-select";
import './SelectorDropdown.css'


export default function Options(props) {
  return (
    // <div className="flex items-center gap-0.5 bg-gray-50  dropdownMenu "> = bs
    <components.Option
      {...props}
      className=" bg-black border-1 border-gray-900 pl-0 bg-white dropdownMenu "

    >
      <div className="flex items-center px-0 " > 
        {props.isMulti ? (
          <input
            // className="checkbox pointer "   
            className="checkbox cursor-pointer "   
            type="checkbox"
            id="check"
            checked={props.isSelected}
            onChange={() => null}
          />
        ) : (
          ""
        )}

        {/* <Avatar name={props.label} size="20" round={true} className="mx-1 " /> */}
        <Avatar name={props.label} size="20" round={true} className="mx-1 " />  

        {/* <label className="name mx-2 ">{props.label}</label> */}
        <label className="font-medium text-[#09090b] mx-2 ">{props.label}</label>
      </div>
    </components.Option>
    // </div>
  );
}
