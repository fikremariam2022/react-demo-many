import React, { useEffect, useState } from "react";
import ViewEditToggleExample from "./viewEditToggle";
const myPost = `The first thing to notice is that we are exporting the withToggle 
function with the ViewEditToggleExample component as its argument. That means that when we call ViewEditToggleExample it will get the additional props from the HOC.`;

const AppToggleDemo = () => {
  const [state, setState] = useState({ title: myPost });

  useEffect(() => {
    setState({ title: myPost });
  }, []);
  return <ViewEditToggleExample {...state} />;
};
export default AppToggleDemo;
