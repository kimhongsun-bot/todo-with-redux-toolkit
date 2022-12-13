import { createBrowserRouter } from "react-router-dom";
import { ToDo } from "../features/todo/ToDo";
import { Counter } from "../features/counter/Counter";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <ToDo/>
    },
    {
      path: 'couter', 
      element: <Counter/>
    }
  ]
);
