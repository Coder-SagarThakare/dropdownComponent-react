import { useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import SelectorDropdown from "./Components/SelectorDropdown.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Option from "./Components/Options";

function App() {
  const [dropdownStatus, setDropdownStatus] = useState(true);
  console.log("parent rendered");

  return (
    <>
      <div className="">
        <SelectorDropdown
          isMulti={true}
          name="fileType"
          // defaultValue="John Cena"
          placeholder={""}
          onChange={(event) => {
            // console.log(event);
          }}
          // setDropdownStatus={setDropdownStatus}
          dropdownStatus={dropdownStatus}
        />

        {/* <SelectorDropdown
          isMulti={false}
          name="fileType"
          // defaultValue="John Cena"
          placeholder={""}
          onChange={(event) => {
            // console.log(event);
          }}
          setDropdownStatus={setDropdownStatus}
          dropdownStatus={dropdownStatus}
        >
          <Option />
          </SelectorDropdown> */}

      </div>
    </>
  );
}

export default App;
