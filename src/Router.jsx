import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import ProductPage from "./pages/products/Products";
import ProductDetails from "./pages/product_details/Product-details";
import Cart from "./pages/cart/Cart";

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
      { path: "cart", element: <Cart></Cart> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
