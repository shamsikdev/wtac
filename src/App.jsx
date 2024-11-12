import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Home from "./pages/home/Home";
import Subcategory from "./pages/subcategory/Subcategory";
import Cart from "./pages/cart/Cart";
import Certificate from "./pages/Certificate";
import Products from "./pages/category/Products";
// layouts
import HomeLayout from "./layouts/HomeLayout";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/subcategory",
          element: <Subcategory />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/certificates",
      element: <Certificate />,
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
