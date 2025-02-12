import { Outlet } from "react-router-dom";
import { useState } from "react";
// components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import SuccessModal from "../components/SuccessModal";
const HomeLayout = ({ handleScrollContact }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Contact setOpenModal={setOpenModal} />
      <Footer handleScrollContact={handleScrollContact} />
      {openModal && <SuccessModal setOpenModal={setOpenModal} />}
      {openModal &&
        isMenuOpen(
          <div className="fixed inset-0 bg-black bg-opacity-75 z-40"></div>
        )}
    </>
  );
};

export default HomeLayout;
