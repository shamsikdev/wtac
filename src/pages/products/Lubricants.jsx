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
  const oilItems = [
    {
      icon: EngineIcon,
      title: "Моторные масла для дизельных двигателей",
      style: { width: "75%", top: "12px", left: "45px", mt: "mt-20" },
    },
    {
      icon: EngineIcon2,
      title: "Моторные масла уровня ГОСТ",
      style: { width: "80%", top: "24px", left: "30px", mt: "mt-20" },
    },
    {
      icon: TransmissionIcon,
      title: "Трансмиссионные масла",
      style: { width: "70%", top: "3px", left: "55px", mt: "mt-[99px]" },
    },
    {
      icon: HydraulicIcon,
      title: "Гидравлические масла",
      style: { width: "45%", top: "26px", left: "90px", mt: "mt-[99px]" },
    },
    {
      icon: GearsIcon,
      title: "Редукторные масла",
      style: { width: "70%", top: "12px", left: "42px", mt: "mt-[99px]" },
    },
    {
      icon: TurbineIcon,
      title: "Турбинные масла",
      style: { width: "70%", top: "32px", left: "42px", mt: "mt-[99px]" },
    },
    {
      icon: CompressorIcon,
      title: "Компрессорные масла",
      style: { width: "70%", top: "22px", left: "52px", mt: "mt-[99px]" },
    },
    {
      icon: TransformerIcon,
      title: "Трансформаторное масло",
      style: { width: "55%", top: "12px", left: "70px", mt: "mt-[99px]" },
    },
    {
      icon: CoolOilIcon,
      title: "Холодильное масло",
      style: { width: "70%", top: "3px", left: "42px", mt: "mt-[99px]" },
    },
  ];

  return (
    <>
      <section className="relative mb-28">
        <div className="w-full max-w-[1100px] mx-auto flex justify-center items-center py-44">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl text-customBlue font-extrabold mb-6">
              {t("lubricants_page.name")}
            </h2>
            <p className="text-customGray text-xl w-full max-w-[600px] mb-12 text-center">
              {t("lubricants_page.description")}
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
          <div className="parent absolute right-[10%] top-[15%] -z-10">
            <div className="relative w-72 h-72 rotate-45 overflow-hidden rounded-3xl top-36 right-28 div5 hover:scale-105 duration-500">
              <img
                src={IntroImg5}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative w-72 h-72 rotate-45 overflow-hidden rounded-3xl top-28 right-28 div6 hover:scale-105 duration-500">
              <img
                src={IntroImg6}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative w-72 h-72 rotate-45 overflow-hidden rounded-3xl top-28 left-8 div7 hover:scale-105 duration-500">
              <img
                src={IntroImg7}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative w-72 h-72 rotate-45 overflow-hidden rounded-3xl top-36 left-8 div8 hover:scale-105 duration-500">
              <img
                src={IntroImg8}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150 div6"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1100px] mx-auto flex justify-center items-center pt-44">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl text-customBlue font-extrabold mb-6">
              Наш ассортимент смазочной продукции
            </h2>
            <p className="text-customGray text-xl w-full mb-12">
              Мы специализируемся на поставке масел для коммерческого
              транспорта, строительной, карьерной и специальной техники:
            </p>
          </div>
        </div>
        <div className="bg-customSkyBlue">
          <div className="w-full max-w-[1100px] mx-auto py-14">
            <ul className="flex flex-wrap items-center justify-center gap-5">
              {oilItems.map(({ icon, title, style }, index) => (
                <Link
                  to="/lubricants/transmission-oils"
                  key={index}
                  className="bg-white w-80 h-64 p-5 rounded-3xl relative group"
                >
                  <div className="flex justify-between items-center">
                    <div className="bg-customSkyBlue p-5 rounded-full w-24 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                      <img src={icon} alt="" className="w-12 h-12" />
                    </div>
                    <GoArrowRight className="text-5xl text-customLightBlue mr-5 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  </div>
                  <h3 className={`text-xl text-customLightBlue ${style.mt}`}>
                    {title}
                  </h3>
                  <img
                    src={icon}
                    alt=""
                    style={{
                      width: style.width,
                      top: style.top,
                      left: style.left,
                    }}
                    className="absolute transition-opacity duration-500 opacity-0 group-hover:opacity-10"
                  />
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1100px] mx-auto flex justify-between items-center pt-24 pb-28">
          <div className="w-72 h-72 rotate-45 overflow-hidden rounded-3xl hover:rotate-0 duration-500 gazoline-img">
            <img
              src={GazolineImg}
              alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
              className="w-full h-full object-cover -rotate-45 scale-150 duration-500 hover:rotate-0 hover:scale-100"
            />
          </div>

          <div className="flex flex-col justify-center items-center w-full max-w-[656px]">
            <p className="text-xl text-customGray mb-5">
              В производстве премиальных масел, которые мы поставляем,
              используются присадки от ведущих мировых производителей, таких как
              Lubrizol, Afton Chemical, Evonik и Infineum.
            </p>
            <p className="text-xl text-customGray">
              Менеджмент качества ФНПЗ полностью соответствует стандартам
              качества ISO 9001, 14001, 45001, 50001 в области производства
              нефтепродуктов. Сертифицированная лаборатория обеспечивает
              надежный контроль качества производства, гарантируя высокий
              уровень производственных процессов и соответствие продукции
              международным стандартам качества.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lubricants;
