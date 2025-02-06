import { Link } from "react-router-dom";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { PiListBold } from "react-icons/pi";
import { PiPlusCircleBold } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import IntroImg13 from "../../assets/intro-img13.png";
import IntroImg14 from "../../assets/intro-img14.png";
import IntroImg15 from "../../assets/intro-img15.png";
import IntroImg16 from "../../assets/intro-img16.png";
import AvangardImg from "../../assets/avangard-img.png";
import RollPackage from "../../assets/roll-package-img.png";
import ChineseImg from "../../assets/chinese-worker-img.png";
import { useTranslation } from "react-i18next";
const Packaging = ({ handleScrollContact }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="relative mb-28">
        <div className="w-full max-w-[1100px] mx-auto flex justify-center items-center py-44">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl text-customBlue font-extrabold mb-6">
              {t("packaging_page.title")}
            </h2>
            <p className="text-customGray text-xl w-full max-w-[500px] mb-12 text-center">
              {t("packaging_page.description")}
            </p>
            <button
              onClick={(e) => handleScrollContact(e, 2325)}
              className={`bg-customLightBlue hover:bg-white hover:text-customLightBlue border-2 border-customLightBlue transition-all duration-500 text-white text-xl py-4 px-7 rounded-md w-full ${
                i18n.language == "en" ? "max-w-40" : "max-w-56"
              }`}
            >
              {t("contact_us")}
            </button>
          </div>
          <div className="parent absolute right-[9%] top-[15%] -z-10">
            <div className="relative w-72 h-72 rotate-45 overflow-hidden rounded-3xl top-36 right-28 div5 hover:scale-105 duration-500">
              <img
                src={IntroImg13}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative w-72 h-72 rotate-45 overflow-hidden rounded-3xl top-28 right-28 div6 hover:scale-105 duration-500">
              <img
                src={IntroImg14}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative w-72 h-72 rotate-45 overflow-hidden rounded-3xl top-28 left-8 div7 hover:scale-105 duration-500">
              <img
                src={IntroImg15}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative w-72 h-72 rotate-45 overflow-hidden rounded-3xl top-36 left-8 div8 hover:scale-105 duration-500">
              <img
                src={IntroImg16}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150 div6"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-20">
        <div className="w-full max-w-[1100px] mx-auto flex flex-col  pt-44 pb-12">
          <h2 className="text-4xl text-customBlue font-black mb-32">
            {t("packaging_page.advantages.title")}
          </h2>
          <ul className="flex flex-col gap-y-36">
            <li className="flex items-center justify-between">
              <div className="w-60 h-60 rotate-45 overflow-hidden rounded-3xl duration-500 gazoline-img hover:rotate-0">
                <img
                  src={AvangardImg}
                  alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                  className="w-full h-full  -rotate-45 scale-150 hover:rotate-0 duration-500"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-3xl text-customBlue font-black mb-3">
                  {t("packaging_page.advantages.quality_guarantee.title")}
                </h3>
                <p className="text-xl text-customGray w-[750px]">
                  {t("packaging_page.advantages.quality_guarantee.description")}
                </p>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="w-60 h-60 rotate-45 overflow-hidden rounded-3xl duration-500 gazoline-img hover:rotate-0">
                <img
                  src={RollPackage}
                  alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                  className="w-full h-full object-cover -rotate-45 scale-150 hover:rotate-0 duration-500"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-3xl text-customBlue font-black mb-3">
                  {t("packaging_page.advantages.product_range.title")}
                </h3>
                <p className="text-xl text-customGray w-[706px] mb-3">
                  {t("packaging_page.advantages.product_range.description")}
                </p>
                <div className="flex gap-x-6">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <AiOutlineColumnWidth className="text-customBlue text-3xl mr-1" />
                      <span className="text-xl text-[#484848] font-semibold">
                        {t("packaging_page.advantages.product_range.width")}
                      </span>
                    </div>
                    <p className="text-xl text-customGray">1 000 - 12 000 мм</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <PiListBold className="text-customBlue text-2xl mr-1" />
                      <span className="text-xl text-[#484848] font-semibold">
                        {t("packaging_page.advantages.product_range.thickness")}
                      </span>
                    </div>
                    <p className="text-xl text-customGray">20 - 200 мм</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <PiPlusCircleBold className="text-customBlue text-2xl mr-1" />
                      <span className="text-xl text-[#484848] font-semibold">
                        {t("packaging_page.advantages.product_range.additives")}
                      </span>
                    </div>
                    <p className="text-xl text-customGray">UV, AF, IK</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="w-60 h-60 rotate-45 overflow-hidden rounded-3xl duration-500 gazoline-img hover:rotate-0">
                <img
                  src={ChineseImg}
                  alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                  className="w-full h-full object-cover -rotate-45 scale-150 hover:rotate-0 duration-500"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-3xl text-customBlue font-black mb-3">
                  {t("packaging_page.advantages.professionalism.title")}
                </h3>
                <ul className="flex flex-col">
                  <li className="flex items-center mb-3">
                    <FaCheckCircle className="text-customBlue mr-2" />
                    <p className="text-xl text-customGray">
                      {t("packaging_page.advantages.professionalism.team")}
                    </p>
                  </li>
                  <li className="flex items-start mb-3">
                    <FaCheckCircle className="text-customBlue mr-2 mt-1" />
                    <p className="text-xl text-customGray w-[706px]">
                      {t("packaging_page.advantages.professionalism.expertise")}
                    </p>
                  </li>
                  <li className="flex items-center mb-3">
                    <FaCheckCircle className="text-customBlue mr-2" />
                    <p className="text-xl text-customGray">
                      {t("packaging_page.advantages.professionalism.capacity")}
                    </p>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-customBlue mr-2" />
                    <p className="text-xl text-customGray">
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
