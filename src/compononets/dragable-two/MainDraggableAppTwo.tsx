import { DragAndDrop } from "./DragAndDrop";
import { Title } from "./Title";
import React from "react";
import "../../App.css";
const MainDraggableAppTwo = () => {
  return (
    <div className="container-main flex">
      <Title />
      <DragAndDrop />
    </div>
  );
};
export default MainDraggableAppTwo;
