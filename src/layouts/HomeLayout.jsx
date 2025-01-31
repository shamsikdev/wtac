import { Outlet } from "react-router-dom";
import { useState } from "react";
// components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import SuccesModal from "../components/SuccesModal";
const HomeLayout = ({ handleScrollContact }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Contact setOpenModal={setOpenModal} />
      <Footer handleScrollContact={handleScrollContact} />
      {openModal && <SuccesModal setOpenModal={setOpenModal} />}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-40"></div>
      )}
    </>
  );
};

export default HomeLayout;
