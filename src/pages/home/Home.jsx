import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { useTranslation } from "react-i18next";
import IntroImg1 from "../../assets/intro-img1.png";
import IntroImg2 from "../../assets/intro-img2.png";
import IntroImg3 from "../../assets/intro-img3.png";
import IntroImg4 from "../../assets/intro-img4.png";
import Icon from "../../assets/pushpin.svg";
import AboutImg from "../../assets/about-img.png";
import CooperationImg from "../../assets/cooperation-img.png";
import TalkoLogo from "../../assets/talko-logo.svg";
import PandaLogo from "../../assets/panda-c-logo.svg";
import TantanaLogo from "../../assets/tantana-logo.svg";
import RtpLogo from "../../assets/rtp-logo.svg";
import SanegLogo from "../../assets/saneg-logo.svg";
import WomanWithHelmetImg from "../../assets/woman-with-helmet-img.png";
import KabeltechLogo from "../../assets/kabeltech-logo.svg";
import NgmkLogo from "../../assets/ngmk-logo.svg";
import UtyLogo from "../../assets/uty-logo.svg";
import CeLogo from "../../assets/cengiz-energy-logo.svg";
import SanyLogo from "../../assets/sany-logo.svg";
import XcmgLogo from "../../assets/xcmg-logo.svg";
import ShantuiLogo from "../../assets/shantui-logo.svg";
import KirgizaltinLogo from "../../assets/kirgizaltin-logo.svg";
import KtjLogo from "../../assets/ktj-logo.svg";
import IvanPopov from "../../assets/ivan-popov.svg";
import EkatirinaSmirnova from "../../assets/ekatirina-smirnova.svg";
import NikolayKapustin from "../../assets/nikolay-kapustin.svg";
import NikolaevArseniy from "../../assets/nikolaev-arseniy.svg";
import LarionovVladimir from "../../assets/larionov-vladimir.svg";
import SokolovYaroslav from "../../assets/sokolov-yaroslav.svg";
import Lubricants from "../../assets/lubricants-img.png";
import CrudeOil from "../../assets/crude-oil-img.png";
import Textile from "../../assets/textile-img.png";
import Packaging from "../../assets/packaging-img.png";

const Home = ({ handleScrollContact }) => {
  const { t, i18n } = useTranslation();
  const clients = [
    { img: NgmkLogo, name: "clients.ngmk" },
    { img: UtyLogo, name: "clients.uty" },
    { img: CeLogo, name: "clients.ce" },
    { img: [SanyLogo, XcmgLogo, ShantuiLogo], name: "clients.sany" },
    { img: [KirgizaltinLogo, KtjLogo], name: "clients.kg" },
  ];
  const products = [
    {
      key: "lubricants",
      link: "/lubricants",
      bgImage: Lubricants,
    },
    {
      key: "petroleum_products",
      link: "/petroleum-products",
      bgImage: CrudeOil,
    },
    {
      key: "textile_products",
      link: "/textile",
      bgImage: Textile,
    },
    {
      key: "packaging_materials",
      link: "/packaging-materials",
      bgImage: Packaging,
    },
  ];
  const testimonials = [
    {
      key: "popov_ivan",
      imgSrc: IvanPopov,
    },
    {
      key: "smirnova_ekaterina",
      imgSrc: EkatirinaSmirnova,
    },
    {
      key: "kapustin_nikolay",
      imgSrc: NikolayKapustin,
    },
    {
      key: "nikolaev_arseniy",
      imgSrc: NikolaevArseniy,
    },
    {
      key: "larionov_vladimir",
      imgSrc: LarionovVladimir,
    },
    {
      key: "sokolov_yaroslav",
      imgSrc: SokolovYaroslav,
    },
  ];
  return (
    <>
      <section className="relative sm:mt-28 mt-14">
        <div
          className={`w-full max-w-[1100px] pb-10 pt-20 mx-auto px-6 sm:px-0 flex justify-between sm:flex-row flex-col-reverse items-center ${
            i18n.language == "en" ? "sm:pt-20 sm:pb-40" : "sm:py-20"
          }`}
        >
          <div className="flex flex-col justify-center">
            <h2 className="sm:text-4xl text-3xl w-full  text-customBlue font-extrabold mb-6">
              World Trade and Consult LLC
            </h2>
            <p className="text-customGray sm:text-lg text-base w-full max-w-[600px] mb-6">
              {t("company_description")}
            </p>
            <p className="text-customGray sm:text-lg text-base w-full sm:max-w-[500px] max-w-[350px] font-semibold sm:mb-8 mb-6">
              {t("consulting_services")}
            </p>
            <button
              onClick={(e) => handleScrollContact(e, 5550)}
              className={`bg-customLightBlue hover:bg-white hover:text-customLightBlue border-2 border-customLightBlue transition-all duration-500 text-white sm:text-xl text-base sm:py-4 py-3 px-7 rounded-md w-full ${
                i18n.language == "en" ? "sm:max-w-40" : "sm:max-w-56"
              }`}
            >
              {t("contact_us")}
            </button>
          </div>
          <div className="parent sm:absolute sm:right-[10%] sm:-top-[15%] mb-10 sm:mb-0">
            <div className="relative sm:w-72 sm:h-72 w-24 h-24 rotate-45 overflow-hidden sm:rounded-3xl rounded-xl sm:top-20 div1 hover:scale-105 duration-500">
              <img
                src={IntroImg1}
                alt="White bathrobe, slippers, towels, and a bath mat with footprints; a minimal spa set on a wooden floor."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>

            <div className="relative sm:w-72 sm:h-72 w-24 h-24 rotate-45 overflow-hidden sm:rounded-3xl rounded-xl sm:left-20 div2 hover:scale-105 duration-500">
              <img
                src={IntroImg2}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>

            <div className="relative sm:w-72 sm:h-72 w-24 h-242 rotate-45 overflow-hidden sm:rounded-3xl rounded-xl sm:left-40 sm:-top-20 z-10 div3 hover:scale-105 duration-500">
              <img
                src={IntroImg3}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>

            <div className="relative sm:w-72 sm:h-72 w-24 h-24 rotate-45 overflow-hidden sm:rounded-3xl rounded-xl sm:-top-20 z-10 div4 hover:scale-105 duration-500">
              <img
                src={IntroImg4}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-customSkyBlue">
        <div className="w-full max-w-[1100px] mx-auto sm:pt-24 sm:pb-12 p-6">
          <h2 className="sm:text-4xl text-3xl text-customBlue font-extrabold sm:mb-6 sm:pl-0 pl-4 mb-4">
            {t("about_us")}
          </h2>
          <div className="flex sm:flex-row flex-col sm:justify-between items-center">
            <div className="flex flex-col justify-center">
              <p className="text-customGray sm:text-xl sm:text-left text-justify text-base w-full sm:max-w-[555px] max-w-72 sm:mb-6 mb-2">
                {t("about_us_description")}
              </p>
              <p className="text-customGray sm:text-xl sm:text-left text-justify text-base w-full sm:max-w-[555px] max-w-72 sm:mb-3 mb-2">
                {t("market_demand")}
              </p>
              <p className="text-customGray sm:text-xl sm:text-left text-justify text-base w-full sm:max-w-[555px] max-w-72 sm:mb-0 mb-5">
                {t("export_solutions")}
              </p>
            </div>
            <article className="py-3 px-5 rounded-xl bg-white relative">
              <img src={Icon} alt="" className="w-8 absolute right-2 top-2" />
              <h3 className="text-customBlue sm:text-2xl text-3xl font-semibold sm:mb-6 mb-2">
                {t("our_mission")}
              </h3>
              <p className="text-customGray sm:text-xl text-base w-full sm:max-w-[420px] max-w-72 sm:mb-8 mb-4">
                {t("mission_description")}
              </p>
              <p className="text-customGray sm:text-xl text-base w-full sm:max-w-[420px] max-w-72">
                {t("mission_growth")}
              </p>
            </article>
          </div>
        </div>
        <img src={AboutImg} className="w-full object-cover" alt="" />
      </section>
      {/* <section className="relative">
        <div className="w-72 h-72 rotate-45 overflow-hidden rounded-3xl absolute right-20 top-44 -z-10">
          <img
            src={CooperationImg}
            alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
            className="w-full h-full object-cover -rotate-45 scale-150"
          />
        </div>

        <div className="w-full  text-customLightBlue max-w-[1100px] mx-auto pt-24 pb-7">
          <h2 className="text-customBlue text-[40px] w-full max-w-[730px] leading-[50px] font-black mb-5">
            {t("partners_title")}
          </h2>
          <p className="text-customGray text-xl w-full max-w-[770px] mb-10">
            {t("partners_description")}
          </p>
          <ul className="flex flex-wrap gap-8">
            <li className="p-2 rounded-xl shadow-md w-80 h-44 bg-white">
              <img src={TalkoLogo} alt="" className="w-24 h-24 mb-5" />
              <h3 className="text-base font-semibold">
                Талко Групп и СП «Апрелевка»
              </h3>
            </li>
            <li className="p-2 rounded-xl shadow-md w-80 h-44 bg-white">
              <img src={PandaLogo} alt="" className="w-24 h-24 mb-5" />
              <h3 className="text-base font-semibold">Panda collection</h3>
            </li>
            <li className="p-2 rounded-xl shadow-md w-80 h-44 bg-white">
              <img src={TantanaLogo} alt="" className="w-24 h-24 mb-5" />
              <h3 className="text-base font-semibold">Tantana Textile</h3>
            </li>
            <li className="p-2 rounded-xl shadow-md w-80 h-44 bg-white">
              <img src={RtpLogo} alt="" className="w-24 h-24 mb-5" />
              <h3 className="text-base font-semibold">
                ООО Riders Trading Pro
              </h3>
            </li>
            <li className="p-2 rounded-xl shadow-md w-80 h-44 bg-white">
              <img src={SanegLogo} alt="" className="w-24 h-24 mb-5" />
              <h3 className="text-base font-semibold">Saneg - SEG Motol</h3>
            </li>
            <li className="p-2 rounded-xl shadow-md w-80 h-44 bg-white">
              <img src={KabeltechLogo} alt="" className="w-24 h-24 mb-5" />
              <h3 className="text-base font-semibold">OOO Kabel Tech Energy</h3>
            </li>
          </ul>
        </div>
      </section> */}
      {/* <section>
        <div className="w-full text-[#2D4972] max-w-[1100px] mx-auto pt-20 pb-12">
          <h2 className="text-customBlue text-[40px] w-full max-w-[730px] leading-[50px] font-black mb-5">
            {t("product_assortment")}
          </h2>
          <p className="text-customGray text-xl w-full mb-12">
            {t("product_description")}
          </p>

          <div className="grid grid-cols-2 gap-x-0 gap-y-5">
            {products.map((product) => (
              <Link
                key={product.key}
                to={product.link}
                className={`group f relative p-8 w-[530px] h-80 rounded-2xl bg-no-repeat bg-cover  overflow-hidden`}
                style={{ backgroundImage: `url('${product.bgImage}')` }}
              >
                <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
                <span className="text-xl font-semibold text-white z-10 relative group-hover:text-2xl transition-all duration-700">
                  {t(`products.${product.key}`)}
                </span>
                <Link
                  to={product.link}
                  className="bg-white p-3 rounded-xl z-10 w-12 h-12 block relative top-44 -right-[90%] opacity-0 group-hover:opacity-100 duration-700"
                >
                  <FaArrowRight className="text-2xl" />
                </Link>
                <div className="absolute inset-0 bg-[#2D4972D9] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-full group-hover:translate-y-0 rounded-2xl"></div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}
      {/* <section className="bg-customSkyBlue">
        <div className="w-full text-[#2D4972] max-w-[1100px] mx-auto flex items-end">
          <div className="flex flex-col justify-center pb-8">
            <h2 className="text-customBlue text-[40px] w-full max-w-[640px] leading-[50px] font-black mb-5">
              {t("quality_focus")}
            </h2>
            <p className="text-customGray text-xl w-[805px] mb-12">
              {t("quality_description")}
            </p>
            <button
              onClick={(e) => handleScrollContact(e, 5550)}
              className={`bg-customLightBlue hover:bg-white hover:text-customLightBlue border-2 border-customLightBlue transition-all duration-500 text-white text-xl py-4 px-7 rounded-md w-full ${
                i18n.language == "en" ? "max-w-40" : "max-w-56"
              }`}
            >
              {t("contact_us")}
            </button>
          </div>
          <img src={WomanWithHelmetImg} alt="" className="pt-10" />
        </div>
      </section> */}
      {/* <section>
        <div className="w-full max-w-[1100px] mx-auto py-20">
          <h2 className="text-customBlue text-[40px] w-full mb-24 leading-[50px] font-black">
            {t("clients_we_value")}
          </h2>
          <ul className="flex justify-center flex-wrap gap-7">
            {clients.map((client, index) => (
              <li
                key={index}
                className="p-2 shadow-md rounded-xl w-full max-w-80"
              >
                <div className="flex">
                  {Array.isArray(client.img) ? (
                    client.img.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={client.name}
                        className="object-cover mr-4"
                      />
                    ))
                  ) : (
                    <img
                      src={client.img}
                      alt={client.name}
                      className="object-cover mb-2"
                    />
                  )}
                </div>
                <span className="text-base text-[#3A475E] font-semibold">
                  {t(client.name)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section> */}
      {/* <section>
        <div className="w-full max-w-[1100px] mx-auto pb-24">
          <h2 className="text-customBlue text-[40px] w-full mb-6 leading-[50px] font-black">
            {t("reviews_you_can_trust")}
          </h2>
          <p className="text-customGray text-2xl mb-12">
            {t("reviews_description")}
          </p>
          <ul className="flex flex-wrap gap-4">
            {testimonials.map(({ key, imgSrc }) => (
              <li key={key} className="rounded-xl shadow-md p-3">
                <div className="flex mb-2 items-center">
                  <img
                    src={imgSrc}
                    alt={t(`testimonials.${key}.name`)}
                    className="mr-2"
                  />
                  <h3 className="text-base font-semibold text-customGray">
                    {t(`testimonials.${key}.name`)}
                  </h3>
                </div>
                <div className="flex">
                  <ImQuotesLeft className="text-customLightBlue text-3xl mr-3" />
                  <p className="text-customBlue text-base font-medium w-full max-w-72">
                    {t(`testimonials.${key}.text`)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section> */}
    </>
  );
};

export default Home;
