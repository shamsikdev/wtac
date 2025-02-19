import { useState, useEffect } from "react";
import CallCentreIcon from "../assets/callcentre-icon.svg";
import { useTranslation } from "react-i18next";

const SuccesModal = ({ setOpenModal }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const closeModal = () => {
    setIsVisible(false);
    setOpenModal(false);
  };
  setTimeout(() => {
    setIsVisible(false);
    setOpenModal(false);
  }, 20000);
  return (
    <section
      className={`flex justify-center flex-col items-center bg-white sm:w-[500px] w-72 h-96 sm:h-[503px] sm:top-10 top-32 sm:left-[35%] left-10 rounded-xl shadow-md sm:p-5 p-2 fixed z-50 transition-transform duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 animate-bounce-in"
          : "opacity-0 translate-y-10 scale-90"
      }`}
    >
      <img
        src={CallCentreIcon}
        alt=""
        className="sm:mb-6 mb-2 animate-wiggle sm:w-64 w-40"
      />
      <h2 className="sm:text-4xl text-2xl text-customBlue animate-fade-in">
        {t("success_modal.title")}
      </h2>
      <p className="sm:text-base text-sm text-customGray font-semibold sm:mb-12 mb-6 sm:text-left text-center animate-fade-in">
        {t("success_modal.text")}
      </p>
      <button
        onClick={closeModal}
        className="text-white sm:text-xl text-base bg-customLightBlue sm:py-4 py-2 rounded w-full animate-fade-in"
      >
        {t("success_modal.close_btn")}
      </button>
    </section>
  );
};

export default SuccesModal;
