import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
const routes = [
  {
    path: "/",
    element: <Layout />,
  },
];

const router = createBrowserRouter(routes);

export default router;
