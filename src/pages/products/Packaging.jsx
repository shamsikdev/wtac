import { AiOutlineColumnWidth } from "react-icons/ai";
import { PiPlusCircleBold, PiListBold } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import IntroImg13 from "../../assets/intro-img13.png";
import IntroImg14 from "../../assets/intro-img14.png";
import IntroImg15 from "../../assets/intro-img15.png";
import IntroImg16 from "../../assets/intro-img16.png";
import AvangardImg from "../../assets/avangard-img.png";
import RollPackage from "../../assets/roll-package-img.png";
import ChineseImg from "../../assets/chinese-worker-img.png";
import ShieldIcon from "../../assets/shield-icon.svg";
import P from "../../assets/Group.svg";
import H from "../../assets/h-icon.svg";
import { useTranslation } from "react-i18next";
const Packaging = ({ handleScrollContact }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="relative sm:mb-28 sm:overflow-x-visible overflow-x-hidden">
        <div className="w-full max-w-[1100px] mx-auto flex justify-between flex-col-reverse items-center sm:py-44 pt-36 sm:px-0 py-6 px-6">
          <div className="flex flex-col justify-center sm:items-center">
            <h2 className="sm:text-4xl text-2xl text-customBlue font-extrabold sm:mb-6 mb-3">
              {t("packaging_page.title")}
            </h2>
            <p className="text-customGray sm:text-xl text-base w-full max-w-[600px] sm:mb-12 mb-6 sm:text-center">
              {t("packaging_page.description")}
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
            <div className="relative sm:w-72 sm:h-72 w-24 h-24 rotate-45 overflow-hidden sm:rounded-3xl rounded-lg sm:top-36 sm:right-28 div5 hover:scale-105 duration-500">
              <img
                src={IntroImg13}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative sm:w-72 sm:h-72 w-24 h-24 rotate-45 overflow-hidden sm:rounded-3xl rounded-lg sm:top-28 sm:right-28 div6 hover:scale-105 duration-500">
              <img
                src={IntroImg14}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative sm:w-72 sm:h-72 w-24 h-24 rotate-45 overflow-hidden sm:rounded-3xl rounded-lg sm:top-28 sm:left-8 div7 hover:scale-105 duration-500">
              <img
                src={IntroImg15}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative sm:w-72 sm:h-72 w-24 h-24 rotate-45 overflow-hidden sm:rounded-3xl rounded-lg sm:top-36 sm:left-8 div8 hover:scale-105 duration-500">
              <img
                src={IntroImg16}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150 div6"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="sm:mb-20 mb-6">
        <div className="w-full max-w-[1100px] mx-auto flex flex-col sm:px-0 px-6 sm:pt-44 sm:pb-12">
          <h2 className="sm:text-4xl text-2xl text-customBlue font-black sm:mb-32 mb-6">
            {t("packaging_page.advantages.title")}
          </h2>
          <ul className="flex flex-col sm:gap-y-36 gap-y-6">
            <li className="flex sm:items-center items-baseline justify-between">
              <div className="hidden sm:block w-60 h-60 rotate-45 overflow-hidden rounded-3xl duration-500 gazoline-img hover:rotate-0">
                <img
                  src={AvangardImg}
                  alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                  className="w-full h-full  -rotate-45 scale-150 hover:rotate-0 duration-500"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center sm:mb-0 mb-1">
                  <img
                    src={ShieldIcon}
                    alt="shield icon"
                    className="mr-2 w-8 block sm:hidden"
                  />
                  <h3 className="sm:text-3xl text-base text-customBlue font-black sm:mb-3">
                    {t("packaging_page.advantages.quality_guarantee.title")}
                  </h3>
                </div>
                <p className="sm:text-xl text-sm text-justify text-customGray sm:w-[750px] w-full">
                  {t("packaging_page.advantages.quality_guarantee.description")}
                </p>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="hidden sm:block w-60 h-60 rotate-45 overflow-hidden rounded-3xl duration-500 gazoline-img hover:rotate-0">
                <img
                  src={RollPackage}
                  alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                  className="w-full h-full object-cover -rotate-45 scale-150 hover:rotate-0 duration-500"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center sm:mb-0 mb-1">
                  <img
                    src={P}
                    alt="shield icon"
                    className="mr-2 w-8 block sm:hidden"
                  />
                  <h3 className="sm:text-3xl text-base text-customBlue font-black sm:mb-3">
                    {t("packaging_page.advantages.product_range.title")}
                  </h3>
                </div>
                <p className="sm:text-xl text-sm text-customGray sm:w-[706px] w-full text-justify mb-3">
                  {t("packaging_page.advantages.product_range.description")}
                </p>
                <div className="flex sm:gap-x-6 gap-x-4">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <AiOutlineColumnWidth className="text-customBlue sm:text-3xl text-lg mr-1" />
                      <span className="sm:text-xl text-sm text-[#484848] font-semibold">
                        {t("packaging_page.advantages.product_range.width")}
                      </span>
                    </div>
                    <p className="sm:text-xl text-sm text-customGray">
                      1 000 - 12 000 мм
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <PiListBold className="text-customBlue sm:text-2xl text-lg mr-1" />
                      <span className="sm:text-xl text-sm text-[#484848] font-semibold">
                        {t("packaging_page.advantages.product_range.thickness")}
                      </span>
                    </div>
                    <p className="sm:text-xl text-sm text-customGray">
                      20 - 200 мм
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <PiPlusCircleBold className="text-customBlue sm:text-2xl text-lg mr-1" />
                      <span className="sm:text-xl text-sm text-[#484848] font-semibold">
                        {t("packaging_page.advantages.product_range.additives")}
                      </span>
                    </div>
                    <p className="sm:text-xl text-sm text-customGray">
                      UV, AF, IK
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="hidden sm:block w-60 h-60 rotate-45 overflow-hidden rounded-3xl duration-500 gazoline-img hover:rotate-0">
                <img
                  src={ChineseImg}
                  alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                  className="w-full h-full object-cover -rotate-45 scale-150 hover:rotate-0 duration-500"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center sm:mb-0 mb-3">
                  <img
                    src={H}
                    alt="shield icon"
                    className="mr-2 w-8 block sm:hidden"
                  />
                  <h3 className="sm:text-3xl text-base text-customBlue font-black sm:mb-3">
                    {t("packaging_page.advantages.professionalism.title")}
                  </h3>
                </div>
                <ul className="flex flex-col sm:gap-y-3 gap-y-1">
                  <li className="flex sm:items-center">
                    <FaCheckCircle className="text-customBlue mr-2" />
                    <p className="sm:text-xl w-full  text-base text-customGray">
                      {t("packaging_page.advantages.professionalism.team")}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-customBlue mr-2 mt-1" />
                    <p className="sm:text-xl w-full  text-base text-customGray sm:w-[706px]">
                      {t("packaging_page.advantages.professionalism.expertise")}
                    </p>
                  </li>
                  <li className="flex sm:items-center">
                    <FaCheckCircle className="text-customBlue mr-2" />
                    <p className="sm:text-xl w-full text-base text-customGray">
                      {t("packaging_page.advantages.professionalism.capacity")}
                    </p>
                  </li>
                  <li className="flex sm:items-center">
                    <FaCheckCircle className="text-customBlue mr-2" />
                    <p className="sm:text-xl w-full text-base text-customGray">
                      {t(
                        "packaging_page.advantages.professionalism.production"
                      )}
                    </p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Packaging;
