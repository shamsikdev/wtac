import { Link } from "react-router-dom";
import IntroImg9 from "../../assets/intro-img9.png";
import IntroImg10 from "../../assets/intro-img10.png";
import IntroImg11 from "../../assets/intro-img11.png";
import IntroImg12 from "../../assets/intro-img12.png";
import UpholsteryImg from "../../assets/upholstery-img.png";
import { GoArrowRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
const Textile = ({ handleScrollContact }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="relative sm:mb-28">
        <div className="w-full max-w-[1100px] mx-auto flex justify-between flex-col-reverse items-center sm:py-44 pt-36 sm:px-0 py-6 px-6">
          <div className="flex flex-col justify-center sm:items-center">
            <h2 className="sm:text-4xl text-2xl text-customBlue font-extrabold sm:mb-6 mb-3">
              {t("textile_page.title")}
            </h2>
            <p className="text-customGray sm:text-xl text-base w-full max-w-[600px] sm:mb-12 mb-6 sm:text-center">
              {t("textile_page.description")}
            </p>
            <button
              onClick={(e) => handleScrollContact(e, 2325)}
              className={`bg-customLightBlue hover:bg-white hover:text-customLightBlue border-2 border-customLightBlue transition-all duration-500 text-white sm:text-xl text-base sm:py-4 py-3   px-7 rounded-md w-full ${
                i18n.language == "en" ? "sm:max-w-40" : "sm:max-w-56"
              }`}
            >
              {t("contact_us")}
            </button>
          </div>
          <div className="parent sm:absolute sm:right-[9%] sm:top-[15%] -z-10 sm:mb-0 mb-10">
            <div className="relative sm:w-72 sm:h-72 w-24 h-24 rotate-45 overflow-hidden sm:rounded-3xl rounded-xl sm:top-36 sm:right-28 div5 hover:scale-105 duration-500">
              <img
                src={IntroImg9}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative sm:w-72 sm:h-72 w-24 h-24 rotate-45 overflow-hidden sm:rounded-3xl rounded-xl sm:top-28 sm:right-28 div6 hover:scale-105 duration-500">
              <img
                src={IntroImg10}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative sm:w-72 sm:h-72 w-24 h-24 rotate-45 overflow-hidden sm:rounded-3xl rounded-xl sm:top-28 sm:left-8 div7 hover:scale-105 duration-500">
              <img
                src={IntroImg11}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative sm:w-72 sm:h-72 w-24 h-24 rotate-45 overflow-hidden sm:rounded-3xl rounded-xl sm:top-36 sm:left-8 div8 hover:scale-105 duration-500">
              <img
                src={IntroImg12}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150 div6"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1100px] mx-auto flex flex-col sm:pt-44 sm:px-0 px-6">
          <div className="flex flex-col justify-center">
            <h2 className="sm:text-4xl text-xl text-customBlue font-black sm:mb-6 mb-3">
              {t("textile_page.range_of_textile")}
            </h2>
            <p className="text-customGray sm:text-2xl text-base w-full mb-12">
              {t("textile_page.specialization")}
            </p>
          </div>
        </div>
      </section>
      <section className="sm:bg-white bg-customSkyBlue">
        <div className="w-full max-w-[1100px] mx-auto sm:py-0 sm:px-0 py-3 px-6 sm:pb-16 pb-3 sm:mb-0 mb-6">
          <ul className="flex sm:flex-row flex-col sm:gap-x-5 gap-x-0 sm:gap-y-0 gap-y-2 sm:mb-5 mb-0">
            <li className="flex sm:flex-col sm:justify-between sm:items-baseline items-center bg-white relative sm:p-6 p-2 sm:w-[530px] sm:h-80 h-14 w-full sm:rounded-2xl rounded-3xl bg-cover sm:bg-[url(./assets/textile-img1.png)] overflow-hidden group">
              <div className="absolute inset-0 sm:bg-black sm:opacity-30 rounded-2xl"></div>
              <div className="bg-[url(./assets/textile-img1.png)] sm:bg-none sm:mr-0 mr-2 bg-cover relative sm:w-16 sm:h-16 w-10 h-10 bg-[#EBF7FC] rounded-full flex items-center justify-center transition duration-300 group-hover:bg-transparent">
                <GoArrowRight className="text-4xl hidden sm:block text-customLightBlue group-hover:translate-x-96 group-hover:text-white transition duration-500" />
              </div>
              <span className="relative z-10 sm:text-3xl text-base sm:text-white text-customBlue transition duration-700">
                {t("textile_page.product_home_textile")}
              </span>
              <GoArrowRight className="block sm:hidden text-2xl text-customLightBlue ml-auto" />
            </li>
            <li className="flex sm:flex-col sm:justify-between sm:items-baseline items-center bg-white relative sm:p-6 p-2 sm:w-[530px] sm:h-80 h-14 w-full sm:rounded-2xl rounded-3xl bg-cover sm:bg-[url(./assets/t-shirts-img.png)] overflow-hidden group">
              <div className="absolute inset-0 sm:bg-black sm:opacity-30 rounded-2xl"></div>
              <div className="bg-[url(./assets/t-shirts-img.png)] sm:bg-none sm:mr-0 mr-2 bg-cover relative sm:w-16 sm:h-16 w-10 h-10 bg-[#EBF7FC] rounded-full flex items-center justify-center transition duration-300 group-hover:bg-transparent">
                <GoArrowRight className="text-4xl hidden sm:block text-customLightBlue group-hover:translate-x-96 group-hover:text-white transition duration-500" />
              </div>
              <span className="relative z-10 sm:text-3xl text-base sm:text-white text-customBlue transition duration-700">
                {t("textile_page.product_home_textile")}
              </span>
              <GoArrowRight className="block sm:hidden text-2xl text-customLightBlue ml-auto" />
            </li>
          </ul>
          <p className="text-customGray hidden sm:block text-xl w-full">
            {t("textile_page.warning")}
          </p>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1100px] mx-auto flex justify-around sm:items-center sm:py-16 sm:px-0 px-6 py-6">
          <div className="sm:w-72 sm:h-72 w-16 h-16 rotate-45 overflow-hidden sm:rounded-3xl rounded-lg hover:rotate-0 duration-500 gazoline-img">
            <img
              src={UpholsteryImg}
              alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
              className="w-full h-full object-cover -rotate-45 scale-150 duration-500 hover:rotate-0 hover:scale-100"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full sm:max-w-[500px] max-w-48">
            <p className="sm:text-xl text-sm text-customGray mb-5">
              {t("textile_page.premium_materials")}
            </p>
            <p className="hidden sm:block text-xl text-customGray">
              {t("textile_page.quality_assurance")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Textile;
