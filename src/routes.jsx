import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Home from "./pages/home/Home";
import Certificate from "./pages/Certificate";
import Lubricants from "./pages/products/Lubricants";
import Textile from "./pages/products/Textile";
// goods
import Clothing from "./pages/goods/Clothing";
// layouts
import HomeLayout from "./layouts/HomeLayout";
import TextileLayout from "./layouts/TextileLayout";
// components
import Cart from "./pages/cart/Cart";
import PageNotFound from "./components/PageNotFound";
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
          path: "/lubricants",
          element: <Lubricants />,
        },
        {
          path: "/textile",
          element: <TextileLayout />,
          children: [
            {
              index: true,
              element: <Textile />,
            },
            {
              path: "/textile/clothing",
              element: <Clothing />,
            },
          ],
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
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
