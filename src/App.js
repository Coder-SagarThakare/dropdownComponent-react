import { useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import SelectorDropdown from "./Components/SelectorDropdown.js";
import Options from "./Components/Options";
// import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [dropdownStatus, setDropdownStatus] = useState(true);
  console.log("parent rendered");

  return (
    <>
      <div className="">
        <SelectorDropdown
        optionsChildren = {Options}
          isMulti={true}
          name="fileType"
          // defaultValue="John Cena"
          placeholder={""}
          onChange={(event) => {
            // console.log(event);
          }}
          setDropdownStatus={setDropdownStatus}
          dropdownStatus={dropdownStatus}
        />

        <SelectorDropdown
        optionsChildren = {Options}
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
          </SelectorDropdown>

      </div>
    </>
  );
}

export default App;
