import React, { Component } from "react";
import { render } from "react-dom";

import ReactApp from './components/ReactApp';

let dom = document.getElementById("reactApp");
render(
  <ReactApp  />
    ,
    dom
);
