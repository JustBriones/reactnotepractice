import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList.js"
  
var destination = document.querySelector("#container");
var nope = document.querySelector("#yo")
  
ReactDOM.render(
    <div>
        <TodoList />
    </div>, 
    destination
);







