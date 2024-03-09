import React from "react";
import  ReactDOM  from "react-dom/client";
/*
const jsxHeading = <h1>Hello JSX </h1>;
console.log(jsxHeading);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
*/

//Functional component
const FirstFunctionalComponent=()=>(<h1 className="head" tabIndex="5">
    Hello React using JSX
</h1>);

//Component Composition
const SecondFunctionalComponent=()=>(
    <div id="container">
    
        <FirstFunctionalComponent/>
    <h1 className="heading">Second Functional Component.</h1>
    </div>
    // {FirstFunctionalComponent()}; or  <FirstFunctionalComponent></FirstFunctionalComponent>
);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<SecondFunctionalComponent/>);//to render functional component.

