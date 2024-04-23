import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import ProductPage from "./pages/products/Products";
import ProductDetails from "./pages/product_details/Product-details";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <ProductPage></ProductPage> },
      {
        path: "products/:productId",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
