import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../pages/Home/Home";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
]);
