import { Link } from "react-router-dom";
import IntroImg5 from "../../assets/intro-img5.png";
import IntroImg6 from "../../assets/intro-img6.png";
import IntroImg7 from "../../assets/intro-img7.png";
import IntroImg8 from "../../assets/intro-img8.png";
import EngineIcon from "../../assets/engine-icon.svg";
import EngineIcon2 from "../../assets/engine-icon2.svg";
import HydraulicIcon from "../../assets/hydraulic-icon.svg";
import GearsIcon from "../../assets/gears-icon.svg";
import CompressorIcon from "../../assets/compressor-icon.svg";
import TransformerIcon from "../../assets/transformer-icon.svg";
import CoolOilIcon from "../../assets/cooloil-icon.svg";
import TurbineIcon from "../../assets/turbine-icon.svg";
import TransmissionIcon from "../../assets/transmission-icon.svg";
import GazolineImg from "../../assets/gazoline-img.png";
import { GoArrowRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
const Lubricants = ({ handleScrollContact }) => {
  const { t, i18n } = useTranslation();
  const oilProducts = [
    {
      icon: EngineIcon,
      key: "diesel_engine_oil",
      style: { width: "75%", top: "12px", left: "45px", mt: "mt-20" },
    },
    {
      icon: EngineIcon2,
      key: "gost_engine_oil",
      style: { width: "80%", top: "24px", left: "30px", mt: "mt-20" },
    },
    {
      icon: TransmissionIcon,
      key: "transmission_oil",
      style: { width: "70%", top: "3px", left: "55px", mt: "mt-[99px]" },
    },
    {
      icon: HydraulicIcon,
      key: "hydraulic_oil",
      style: { width: "45%", top: "26px", left: "90px", mt: "mt-[99px]" },
    },
    {
      icon: GearsIcon,
      key: "gear_oil",
      style: { width: "70%", top: "12px", left: "42px", mt: "mt-[99px]" },
    },
    {
      icon: TurbineIcon,
      key: "turbine_oil",
      style: { width: "70%", top: "32px", left: "42px", mt: "mt-[99px]" },
    },
    {
      icon: CompressorIcon,
      key: "compressor_oil",
      style: { width: "70%", top: "22px", left: "52px", mt: "mt-[99px]" },
    },
    {
      icon: TransformerIcon,
      key: "transformer_oil",
      style: { width: "55%", top: "12px", left: "70px", mt: "mt-[99px]" },
    },
    {
      icon: CoolOilIcon,
      key: "cooling_oil",
      style: { width: "70%", top: "3px", left: "42px", mt: "mt-[99px]" },
    },
  ];

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
            <div className="relative sm:w-72 sm:h-72 w-24 h-24 rotate-45 overflow-hidden sm:rounded-3xl rounded-lg sm:top-36 sm:right-28 div5 hover:scale-105 duration-500">
              <img
                src={IntroImg5}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative sm:w-72 sm:h-72 w-24 h-24 rotate-45 overflow-hidden sm:rounded-3xl rounded-lg sm:top-28 sm:right-28 div6 hover:scale-105 duration-500">
              <img
                src={IntroImg6}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative sm:w-72 sm:h-72 w-24 h-24 rotate-45 overflow-hidden sm:rounded-3xl rounded-lg sm:top-28 sm:left-8 div7 hover:scale-105 duration-500">
              <img
                src={IntroImg7}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative sm:w-72 sm:h-72 w-24 h-24 rotate-45 overflow-hidden sm:rounded-3xl rounded-lg sm:top-36 sm:left-8 div8 hover:scale-105 duration-500">
              <img
                src={IntroImg8}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150 div6"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="sm:pb-0 pb-6">
        <div className="w-full max-w-[1100px] mx-auto flex justify-center items-center sm:pt-44 sm:px-0 sm:py-0 px-6 py-6">
          <div className="flex flex-col justify-center">
            <h2 className="sm:text-4xl text-2xl text-customBlue font-extrabold sm:mb-6 mb-3">
              {t("lubricants_page.range_of_lubricants")}
            </h2>
            <p className="text-customGray sm:text-xl text-base w-full sm:mb-12">
              {t("lubricants_page.specialization")}
            </p>
          </div>
        </div>
        <div className="bg-customSkyBlue">
          <div className="w-full max-w-[1100px] mx-auto sm:py-14 py-3 sm:px-0 px-6">
            <ul className="flex flex-wrap items-center justify-center sm:gap-5 sm:gap-y-5 gap-y-2">
              {oilProducts.map(({ icon, key, style }) => (
                <Link
                  to="/lubricants/transmission-oils"
                  key={key}
                  className="bg-white sm:w-80 sm:h-64 w-full sm:p-5 py-1 px-2 rounded-3xl relative group"
                >
                  <div className="flex sm:flex-col sm:justify-between sm:h-full sm:items-baseline items-center">
                    <div className="bg-customSkyBlue sm:p-5 p-2 rounded-full sm:w-24 sm:h-24 w-12 h-12 sm:mr-0 mr-2 flex items-center justify-center transition-opacity duration-300 sm:group-hover:opacity-0">
                      <img
                        src={icon}
                        alt=""
                        className="sm:w-12 sm:h-12 w-6 h-6"
                      />
                    </div>
                    <h3
                      className={`sm:text-xl text-sm text-customLightBlue sm:${style.mt}`}
                    >
                      {t(`lubricants_page.oil_products.${key}`)}
                    </h3>
                  </div>
                  <img
                    src={icon}
                    alt={t(`lubricants_page.oil_products.${key}`)}
                    style={{
                      width: style.width,
                      top: style.top,
                      left: style.left,
                    }}
                    className="absolute hidden sm:block transition-opacity duration-500 opacity-0 group-hover:opacity-10"
                  />
                  <GoArrowRight className="sm:text-5xl text-2xl text-customLightBlue absolute sm:top-10 sm:right-5 top-5 right-3 transition-opacity duration-500 sm:opacity-0 group-hover:opacity-100" />
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1100px] mx-auto flex justify-between sm:items-center sm:pt-24 sm:pb-28 pb-6 sm:px-0 px-6">
          <div className="sm:w-72 sm:h-72 w-16 h-16 rotate-45 overflow-hidden sm:rounded-3xl rounded-lg hover:rotate-0 duration-500 gazoline-img">
            <img
              src={GazolineImg}
              alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
              className="w-full h-full object-cover -rotate-45 scale-150 duration-500 hover:rotate-0 hover:scale-100"
            />
          </div>

          <div className="flex flex-col justify-center items-center w-full sm:max-w-[656px] max-w-52">
            <p className="sm:text-xl text-sm text-customGray mb-5">
              {t("lubricants_page.premium_oil_production")}
            </p>
            {/* <p className="text-xl text-customGray">
              {t("lubricants_page.quality_management")}
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Lubricants;
