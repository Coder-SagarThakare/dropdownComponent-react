import { useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import SelectorDropdown from "./Components/SelectorDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  console.log("parent rendered");

  // const memo = useCallback(
  //   (event: any) => {
  //     console.log(event);
  //     setSelected(event)
  //   },
  //   [selected]
  // );

  return (
    <>
      <div className="">
        <SelectorDropdown
          isMulti={true}
          name="fileType"
          // defaultValue="John Cena"
          // placeholder={"sagar"}  
          onChange={(event) => {
            // console.log(event);
            // setSelected(event)
          }}
        />
      </div>
    </>
  );
}

export default App;
