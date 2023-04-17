import React from 'react';
import Component from "/Component";
import NotWorkingComponent from "/NotWorkingComponent";

function App() {

  // cmd + click here works and takes us directly to the src/Component/Component.tsx declaration
  return <>
    <Component />
    <NotWorkingComponent />
  </>;
}

export default App;
