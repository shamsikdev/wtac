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
      className={`flex justify-center flex-col items-center bg-white w-[500px] h-[503px] top-10 left-[35%] rounded-xl shadow-md p-5 fixed z-50 transition-transform duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 animate-bounce-in"
          : "opacity-0 translate-y-10 scale-90"
      }`}
    >
      <img src={CallCentreIcon} alt="" className="mb-6 animate-wiggle" />
      <h2 className="text-4xl text-customBlue animate-fade-in">
        {t("success_modal.title")}
      </h2>
      <p className="text-base text-customGray font-semibold mb-12 animate-fade-in">
        {t("success_modal.text")}
      </p>
      <button
        onClick={closeModal}
        className="text-white text-xl bg-customLightBlue py-4 rounded w-full animate-fade-in"
      >
        {t("success_modal.close_btn")}
      </button>
    </section>
  );
};

export default SuccesModal;
