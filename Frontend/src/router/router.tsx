import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(App),
    children : [ {
        path: "about",
        element: <div>About</div>,
      }]
  },
 
]);
 
export default router 
 