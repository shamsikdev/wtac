import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Home from "./pages/home/Home";
import Certificate from "./pages/Certificate";
import Lubricants from "./pages/products/Lubricants";
import Textile from "./pages/products/Textile";
import Packaging from "./pages/products/Packaging";
import PetroleumProducts from "./pages/products/PetroleumProducts";
// goods
import Clothing from "./pages/goods/Clothing";
import TransmissionOils from "./pages/goods/TransmissionOils";
// layouts
import HomeLayout from "./layouts/HomeLayout";
import TextileLayout from "./layouts/TextileLayout";
// components
import Cart from "./pages/cart/Cart";
import PageNotFound from "./components/PageNotFound";

import LubricantsLayout from "./layouts/LubricantsLayout";
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
          element: <LubricantsLayout />,
          children: [
            {
              index: true,
              element: <Lubricants />,
            },
            {
              path: "/lubricants/transmission-oils",
              element: <TransmissionOils />,
            },
          ],
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
          path: "/packaging-materials",
          element: <Packaging />,
        },
        {
          path: "/petroleum-products",
          element: <PetroleumProducts />,
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
