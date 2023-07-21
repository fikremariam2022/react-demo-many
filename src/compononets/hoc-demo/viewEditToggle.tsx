import React from "react";
import withToggle from "./ToggleHOC";

const ViewEditToggleExample = ({ title }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default withToggle(ViewEditToggleExample);
