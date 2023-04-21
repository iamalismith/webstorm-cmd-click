import React from 'react';
import Component from "/Component"; // import setup using tsconfig paths to mean '/src/Component'
import SameComponentButDifferentImportPath from "../Component"; // relative import works fine

const NotWorkingComponent = () => {

    return <>
        <SameComponentButDifferentImportPath/>
        <Component />
    </> // but cmd + click here results in only highlighting the import above
}
export default NotWorkingComponent
