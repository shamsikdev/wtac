import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoReload } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
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
  const [visible, setVisible] = useState(false);

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
  return (
    <>
      {visible ? (
        <RouterProvider router={routes} />
      ) : (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
          <div className="max-w-3xl w-full">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="w-full  space-y-6">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Ошибка обращения к сервису
                </h1>

                <p className="text-gray-600">
                  Мы уже устраняем неисправность, попробуйте обновить страницу
                  через некоторое время. Приносим извинения за временные
                  неудобства.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-md transition-colors"
                  >
                    <IoReload className="w-4 h-4" />
                    Обновить страницу
                  </button>

                  <button
                    onClick={() => (window.location.href = "/")}
                    className="px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-md transition-colors"
                  >
                    На главную
                  </button>
                </div>

                <div>
                  <div className="mt-2 p-3 bg-gray-50 rounded-md">
                    <code className="text-sm text-red-600">
                      ERR_CONNECTION_TIMED_OUT
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default App;
