import { useRef, useState } from "react";
import PropTypes from "prop-types";
// import { propTypes } from 'react-bootstrap/esm/Image';
import Select, { components } from "react-select";
import "./SelectorDropdown.css";
import Avatar from "react-avatar";
import search from "./Vector.svg";
import Option from "./Options";

SelectorDropdown.propTypes = {
  defaultValue: PropTypes.any,
  isMulti: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  dropdownStatus: PropTypes.bool,
  setDropdownStatus: PropTypes.func,
  optionsChildren : PropTypes.any
};

export default function SelectorDropdown(props) {
  const refElement = useRef();
  const refInput = useRef();

  console.log("child rendered");
  const styles = {
    fontSize: 50,
    color: "red",
  };

  const options = [
    "Marketing group",
    "John Cena",
    "All user",
    "Engeeneeering group",
    "John Week",
  ].map((label) => ({
    label,
    value: label,
  }));

  // const Option: any = props.isMulti
  //   ? (props: any) => {
  //       return (
  //         <div className="">
  //           <components.Option
  //             {...props}
  //             className="d-flex align-items-center gap-2 bg-light dropdownMenu "
  //           >
  //             {/* <components.Option {...props} className="flex  align-items-center border bg-light"> */}
  //             <input
  //               type="checkbox"
  //               className="input  pointer"
  //               // defaultChecked={
  //               //   props.defaultInputValue === props.label ? true : false
  //               // }

  //               // defaultChecked= {true}
  //               checked={props.isSelected}
  //               onChange={() => null}
  //             />

  //             <Avatar
  //               name={props.label}
  //               size="20"
  //               round={true}
  //               className="mx-1"
  //             />
  //             <label className="name mx-2">{props.label}</label>
  //           </components.Option>
  //         </div>
  //       );
  //     }
  //   : (props: any) => {
  //       return (
  //         <div>
  //           <components.Option {...props} className="d-flex gap-2    bg-light ">
  //             <Avatar name={props.label} size="25" round={true} />
  //             <label className="name">{props.label}</label>
  //           </components.Option>
  //         </div>
  //       );
  //     };

  const handleChange = (event) => {
    console.log(event);
    if (event.length > 0) {
      refElement.current.removeAttribute("disabled");
    } else {
      refElement.current.setAttribute("disabled", true);
    }
  };

  const onKeyDown = (e) => {

    if (e.which === 8 && !e.target.value.length) {    //!e.target.value.length = input should not be empty. its opposite of length of element.
      e.preventDefault();       // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    }
  };

  return (
    <>
      {/* <div className="parentDiv mx-auto p-2 border "> */}
      {/* <div className="parentDiv "> */}
      <div className="parentDiv mx-auto p-2 border border-gray-400"> 
        <Select
          {...props}
          ref={refInput}
          name={props.name}
          controlShouldRenderValue={false}
          options={options}         // array options[value,label]
          defaultInputValue={props.defaultValue}
          placeholder={
            props.placeholder || (
              <div className="flex gap-1">
                <img src={search}></img> <span>Search</span>
              </div>
            )
          }
          isMulti={props.isMulti}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
            Option:props.optionsChildren ,         // UI OF options (from new Options component )
          }}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          menuIsOpen={true}
          isClearable={false}
          // maxMenuHeight={200}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          
        ></Select>

        {/* <div className=" d-flex justify-content-end align-items-end buttonsDiv gap-4 py-2"> BS */}
        <div className="flex justify-end items-end  gap-4 py-2  mt-56 ">

          {/* <button className="btn  btn-secondary-outline border" onClick={()=>{}}> cancel</button>  = bs */}
          <button className="rounded border px-3 py-1" onClick={()=>{}}> cancel</button>

          <button
            ref={refElement}
            // className="btn selectButtonColor" = bs
            // className="rounded  border-t-4 border-gray-500 border-l-12 border-r-12 border-b-5  selectButtonColor"
            className="px-3 py-1 rounded cursor-pointer disabled:opacity-25 bg-[#0e9f6e] text-white" disabled 
          >
            {" "} 
            select
          </button>
        </div>
      </div>
    </>
  );
}

// memo(SelectorDropdown);
