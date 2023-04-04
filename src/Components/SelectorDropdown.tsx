import { memo, useState } from "react";
import PropTypes from "prop-types";
// import { propTypes } from 'react-bootstrap/esm/Image';
import Select, { components } from "react-select";
import "./SelectorDropdown.css";
import Avatar from "react-avatar";
import search from './Vector.svg'

SelectorDropdown.propTypes = {
  defaultValue: PropTypes.any,
  isMulti: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default  function SelectorDropdown(props: any) {
  //   console.log(props);
  //   console.log(selected);
  // const [selected, setSelected] = useState([]);

  var selected:Array<any> = [];
  // console.log(selected.length);
  const propsCopy = props;
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

  const Option: any = props.isMulti
    ? (props: any) => {
        return (
          <div className="">
            
            <components.Option {...props} className="d-flex align-items-center gap-2 bg-light dropdownMenu ">
            {/* <components.Option {...props} className="flex  align-items-center border bg-light"> */}
              <input
                type="checkbox"
                className="input  pointer"
                // className="border border-danger rounded-circle bg-danger inputBoxStyling"

                // defaultChecked={
                //   props.defaultInputValue === props.label ? true : false
                // }

                // defaultChecked= {true}
                checked={props.isSelected}
                onChange={() => null}
              />

              <Avatar name={props.label} size="20" round={true} className='mx-1'/>
              <label className="name mx-2">{props.label}</label>
            </components.Option>
          </div>
        );
      }
    : (props: any) => {
        return (
          <div>
            <components.Option {...props} className="d-flex gap-2    bg-light ">
              <Avatar name={props.label} size="25" round={true} />
              <label className="name">{props.label}</label>
            </components.Option>
          </div>
        );
      };

      const handleChange = (event:any)=>{console.log(event);
        selected = event;
        console.log(selected.length);
        
      } 
      // console.log(selected);
      


  return (
    <>
      <div className="parentDiv mx-auto p-2 border">
        {/* <img src={search}></img> */}
        <Select
        className=""
          {...props}
          name={props.name}
          controlShouldRenderValue={false}
          options={options}
          defaultInputValue={props.defaultValue}
          placeholder={props.placeholder || <div  className="d-flex gap-1"><img src={search}></img> <span>search</span></div> }
          isMulti={props.isMulti}
          //   menuIs={true}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
            Option,
          }}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          menuIsOpen={true}
          // maxMenuHeight={200}
          onChange={handleChange}
        ></Select>

        <div className=" d-flex justify-content-end align-items-end buttonsDiv gap-4 py-2">
          <button className="btn  btn-secondary-outline border" disabled={true}>
            {" "}
            cancel
          </button>

          <button
            className="btn btn-md btn-success selectButtonColor"
            // disabled={true = bnd krr dakhvaych?}
            disabled= {props.isMulti==true && selected.length == 0 }
          >
            select
          </button>
        </div>
      </div>
    </>
  );
}

// memo(SelectorDropdown);
