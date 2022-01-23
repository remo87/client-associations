import React from "react";
import { StyledSpinner } from "../styled";
import { FaAtom } from "react-icons/fa";

export const Spinner = () => (
  <StyledSpinner>
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
);
