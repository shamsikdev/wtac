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
              {t("lubricants_page.title")}
            </h2>
            <p className="text-customGray sm:text-xl text-base w-full max-w-[600px] sm:mb-12 mb-6 sm:text-center">
              {t("lubricants_page.description")}
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
        <div className="w-full max-w-[1100px] mx-auto flex  flex-col  sm:pt-44 sm:pb-12 sm:py-0 py-6 sm:px-0 px-6">
          <div className="flex flex-col justify-center">
            <h2 className="sm:text-4xl text-2xl text-customBlue font-black sm:mb-6 mb-3">
              {t("textile_page.range_of_textile")}
            </h2>
            <p className="text-customGray sm:text-2xl text-base w-full mb-12">
              {t("textile_page.specialization")}
            </p>
          </div>
          <ul className="flex gap-x-5 mb-5">
            <li className="flex flex-col justify-between relative p-6 w-[530px] h-80 rounded-2xl bg-cover bg-[url(./assets/textile-img1.png)] overflow-hidden group">
              <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
              <div className="relative w-16 h-16 bg-[#EBF7FC] rounded-full flex items-center justify-center transition duration-300 group-hover:bg-transparent">
                <GoArrowRight className="text-4xl text-customLightBlue group-hover:translate-x-96 group-hover:text-white transition duration-500" />
              </div>
              <span className="relative z-10 text-3xl text-white transition duration-700">
                {t("textile_page.product_home_textile")}
              </span>
            </li>

            <Link
              to="/textile/clothing"
              className="group relative flex h-80 w-[530px] flex-col justify-between overflow-hidden rounded-2xl bg-[url(./assets/t-shirts-img.png)] bg-cover p-6"
            >
              <div className="absolute inset-0 rounded-2xl bg-black opacity-30" />
              <div className="relative h-16 w-16">
                <div className="absolute inset-0 rounded-full bg-[#EBF7FC] transition-opacity duration-300 group-hover:opacity-0" />
                <GoArrowRight className="absolute inset-0 m-auto text-4xl text-customLightBlue transition-all duration-500 group-hover:translate-x-96 group-hover:text-white" />
              </div>
              <span className="relative text-3xl text-white">
                {t("textile_page.product_clothing")}
              </span>
            </Link>
          </ul>
          <p className="text-customGray text-xl w-full">
            {t("textile_page.warning")}
          </p>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1100px] mx-auto flex justify-around items-center py-16">
          <div className="w-72 h-72 rotate-45 overflow-hidden rounded-3xl duration-500 gazoline-img hover:rotate-0">
            <img
              src={UpholsteryImg}
              alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
              className="w-full h-full object-cover -rotate-45 scale-150 hover:rotate-0 duration-500"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full max-w-[500px]">
            <p className="text-xl text-customGray mb-5">
              {t("textile_page.premium_materials")}
            </p>
            <p className="text-xl text-customGray">
              {t("textile_page.quality_assurance")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Textile;
