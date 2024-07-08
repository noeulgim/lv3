import React from "react";
import { StyledButton } from "./styledButtons";

function Buttons() {
  return (
    <>
      <div className="primaryBtn wrap" style={{ display: "flex" }}>
        <StyledButton
          $large
          $primary
          onClick={() => {
            alert("Make buttons");
          }}
        >
          Large Primary Button
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="15px"
            viewBox="0 -960 960 960"
            width="15px"
            fill="#5f6368"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </StyledButton>
        <StyledButton $medium $primary>
          Medium
        </StyledButton>
        <StyledButton $small $primary>
          Small
        </StyledButton>
      </div>
      <div className="NegativeBtn wrap" style={{ display: "flex" }}>
        <StyledButton
          $large
          $negative
          onClick={() => {
            prompt("Is it hard?");
          }}
        >
          Large Negative Button
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="15px"
            viewBox="0 -960 960 960"
            width="15px"
            fill="#5f6368"
          >
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z" />
          </svg>
        </StyledButton>
        <StyledButton $medium $negative>
          Medium
        </StyledButton>
        <StyledButton $small $negative>
          Small
        </StyledButton>
      </div>
    </>
  );
}

export default Buttons;
