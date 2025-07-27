import { createBrowserRouter } from "react-router-dom";

import { PreviewPage } from "../pages/Preview";

export const router = createBrowserRouter([
  { path: "/preview/message-card", element: <PreviewPage /> },
]);
