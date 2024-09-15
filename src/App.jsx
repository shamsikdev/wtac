import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import Subcategory from "./pages/subcategory/Subcategory";
import Cart from "./pages/cart/Cart";
import Certificate from "./pages/Certificate";
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
          path: "/category",
          element: <Category />,
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
