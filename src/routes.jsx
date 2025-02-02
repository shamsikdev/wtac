import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [lastVisit, setLastVisit] = useState(null);

  useEffect(() => {
    // Получаем время последнего визита из localStorage
    const storedTime = localStorage.getItem("lastVisit");
    if (storedTime) {
      const formattedTime = new Date(storedTime).toLocaleString();
      setLastVisit(formattedTime);
      console.log("Ваш последний визит: ", formattedTime);
    }

    // Сохраняем текущее время как время последнего визита
    const now = new Date().toISOString();
    localStorage.setItem("lastVisit", now);
  }, []);
  const handleScrollContact = (e, top) => {
    e.preventDefault();
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout handleScrollContact={handleScrollContact} />,
      children: [
        {
          index: true,
          element: <Home handleScrollContact={handleScrollContact} />,
        },
        {
          path: "/lubricants",
          element: <LubricantsLayout />,
          children: [
            {
              index: true,
              element: <Lubricants handleScrollContact={handleScrollContact} />,
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
              element: <Textile handleScrollContact={handleScrollContact} />,
            },
            {
              path: "/textile/clothing",
              element: <Clothing />,
            },
          ],
        },
        {
          path: "/packaging-materials",
          element: <Packaging handleScrollContact={handleScrollContact} />,
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
