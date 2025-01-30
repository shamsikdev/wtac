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
import ColoredMetal from "../../assets/colored-metal-img.jpg";
import ElectricCables from "../../assets/electric-cables-img.jpg";
const Home = () => {
  const handleScrollContact = () => {
    window.scrollTo({
      top: 5910,
      behavior: "smooth",
    });
  };
  const { t, i18n } = useTranslation();

  const items = [
    {
      title: "Смазочные материалы",
      link: "/lubricants",
      bgImage: Lubricants,
    },
    {
      title: "Нефтепродукты",
      link: "/petroleum-products",
      bgImage: CrudeOil,
    },
    {
      title: "Текстильная продукция",
      link: "/textile",
      bgImage: Textile,
    },
    {
      title: "Упаковочные материалы",
      link: "/packaging-materials",
      bgImage: Packaging,
    },
    // {
    //   title: "Цветные металлы",
    //   link: "/",
    //   bgImage: ColoredMetal,
    // },
    // {
    //   title: "Кабельно-проводниковая продукция",
    //   link: "/",
    //   bgImage: ElectricCables,
    // },
  ];

  return (
    <>
      <section className="relative mt-28">
        <div className="w-full max-w-[1100px] mx-auto flex justify-between items-center pb-44 pt-20">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl text-customBlue font-extrabold mb-6">
              World Trade and Consult LLC
            </h2>
            <p className="text-customGray text-lg w-full max-w-[550px] mb-6">
              {t("company_description")}
            </p>
            <p className="text-customGray text-lg w-full max-w-[500px] font-semibold mb-12">
              {t("consulting_services")}
            </p>
            <Link
              onClick={handleScrollContact}
              className="bg-customLightBlue hover:bg-white hover:text-customLightBlue border-2 border-customLightBlue transition-all duration-500 text-white text-xl py-4 px-7 rounded-md w-full max-w-56"
            >
              {t("contact_us")}
            </Link>
          </div>
          <div className="parent absolute right-[5%] -top-[12%]">
            <div className="relative w-72 h-72 rotate-45 overflow-hidden rounded-3xl top-20 div1 hover:scale-105 duration-500">
              <img
                src={IntroImg1}
                alt="White bathrobe, slippers, towels, and a bath mat with footprints; a minimal spa set on a wooden floor."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>

            <div className="relative w-72 h-72 rotate-45 overflow-hidden rounded-3xl left-20 div2 hover:scale-105 duration-500">
              <img
                src={IntroImg2}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>

            <div className="relative w-72 h-72 rotate-45 overflow-hidden rounded-3xl left-40 -top-20 z-10 div3 hover:scale-105 duration-500">
              <img
                src={IntroImg3}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>

            <div className="relative w-72 h-72 rotate-45 overflow-hidden rounded-3xl -top-20 z-10 div4 hover:scale-105 duration-500">
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
        <div className="w-full max-w-[1100px] mx-auto pt-24 pb-12">
          <h2 className="text-4xl text-customBlue font-extrabold mb-6">
            {t("about_us")}
          </h2>
          <div className="flex justify-between">
            <div className="flex flex-col justify-center">
              <p className="text-customGray text-xl w-full max-w-[555px] mb-6">
                {t("about_us_description")}
              </p>
              <p className="text-customGray text-xl w-full max-w-[555px] mb-3">
                {t("market_demand")}
              </p>
              <p className="text-customGray text-xl w-full max-w-[555px]">
                {t("export_solutions")}
              </p>
            </div>
            <article className="py-3 px-5 rounded-xl bg-white relative">
              <img src={Icon} alt="" className="absolute -right-6 -top-3" />
              <h3 className="text-customBlue text-2xl font-semibold mb-6">
                {t("our_mission")}
              </h3>
              <p className="text-customGray text-xl w-full max-w-[420px] mb-8">
                {t("mission_description")}
              </p>
              <p className="text-customGray text-xl w-full max-w-[420px]">
                {t("mission_growth")}
              </p>
            </article>
          </div>
        </div>
        <img src={AboutImg} className="w-full object-cover" alt="" />
      </section>
      <section className="relative">
        <div className="w-72 h-72 rotate-45 overflow-hidden rounded-3xl absolute right-20 top-44 -z-10">
          <img
            src={CooperationImg}
            alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
            className="w-full h-full object-cover -rotate-45 scale-150"
          />
        </div>

        <div className="w-full text-[#2D4972] max-w-[1100px] mx-auto pt-24 pb-7">
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
      </section>
      <section>
        <div className="w-full text-[#2D4972] max-w-[1100px] mx-auto pt-20 pb-12">
          <h2 className="text-customBlue text-[40px] w-full max-w-[730px] leading-[50px] font-black mb-5">
            {t("product_assortment")}
          </h2>
          <p className="text-customGray text-xl w-full mb-12">
            {t("product_description")}
          </p>

          <div className="grid grid-cols-2 gap-x-0 gap-y-5">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`group f relative p-8 w-[530px] h-80 rounded-2xl bg-no-repeat bg-cover  overflow-hidden`}
                style={{ backgroundImage: `url('${item.bgImage}')` }}
              >
                <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
                <span className="text-xl font-semibold text-white z-10 relative group-hover:text-2xl transition-all duration-700">
                  {item.title}
                </span>
                <Link
                  to={item.link}
                  className="bg-white p-3 rounded-xl z-10 w-12 h-12 block relative top-44 -right-[90%] opacity-0 group-hover:opacity-100 duration-700"
                >
                  <FaArrowRight className="text-2xl" />
                </Link>
                <div className="absolute inset-0 bg-[#2D4972D9] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-full group-hover:translate-y-0 rounded-2xl"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-customSkyBlue">
        <div className="w-full text-[#2D4972] max-w-[1100px] mx-auto flex items-end">
          <div className="flex flex-col justify-center pb-8">
            <h2 className="text-customBlue text-[40px] w-full max-w-[640px] leading-[50px] font-black mb-5">
              {t("quality_focus")}
            </h2>
            <p className="text-customGray text-xl w-[805px] mb-12">
              {/* World Trade and Consult LLC – это надежный партнер в сфере
              международной торговли, который стремится предоставлять только
              продукцию высочайшего качества. Наша компания гордится тем, что мы
              обеспечиваем строгий контроль качества на всех этапах поставок.{" "}
              <br />
              <br />
              Наши опытные специалисты тщательно проверяют каждый товар, чтобы
              гарантировать его соответствие самым высоким стандартам. Мы
              работаем с проверенными поставщиками и всегда стремимся к тому,
              чтобы наши клиенты получали только лучшее. С World Trade and
              Consult LLC вы можете быть уверены в надежности и качестве каждой
              сделки. */}
              {t("quality_description")}
            </p>
            <button className="bg-customLightBlue text-white hover:bg-white hover:text-customLightBlue border-2 border-customLightBlue duration-500 text-xl py-4 px-7 rounded-md w-full max-w-56">
              {t("contact_us")}
            </button>
          </div>
          <img src={WomanWithHelmetImg} alt="" className="pt-10" />
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1100px] mx-auto py-20">
          <h2 className="text-customBlue text-[40px] w-full mb-24 leading-[50px] font-black">
            Клиенты, которыми мы дорожим
          </h2>
          <ul className="flex justify-center  flex-wrap gap-7">
            <li className="p-2 shadow-md rounded-xl w-full max-w-80">
              <img src={NgmkLogo} alt="" className="object-cover mb-2" />
              <span className="text-base text-[#3A475E] font-semibold">
                Навоинский горнометаллургический комбинат
              </span>
            </li>
            <li className="p-2 shadow-md rounded-xl w-full max-w-80">
              <img src={UtyLogo} alt="" className="object-cover mb-2" />
              <span className="text-base text-[#3A475E] font-semibold">
                Узбекистон Темир Йуллари
              </span>
            </li>
            <li className="p-2 shadow-md rounded-xl w-full max-w-80">
              <img
                src={CeLogo}
                alt="Логотип Навоинский горнометаллургический комбинат"
                className="object-cover mb-2"
              />
              <span className="text-base text-[#3A475E] font-semibold">
                Cengiz Energy
              </span>
            </li>
            <li className="p-3 shadow-md rounded-xl w-full max-w-[330px]">
              <div className="flex">
                <img
                  src={SanyLogo}
                  alt="SANY logo"
                  className="object-cover mr-4"
                />
                <img
                  src={XcmgLogo}
                  alt="XCMG logo"
                  className="object-cover mr-4"
                />
                <img
                  src={ShantuiLogo}
                  alt="SHANTUI logo"
                  className="object-cover"
                />
              </div>
              <span className="text-base text-[#3A475E] font-semibold">
                Sany, Shantui, XCMG
              </span>
            </li>
            <li className="p-2 shadow-md rounded-xl w-full max-w-80">
              <div className="flex">
                <img
                  src={KirgizaltinLogo}
                  alt="КЫРГЫЗАЛТЫН logo"
                  className="object-cover mr-4"
                />
                <img
                  src={KtjLogo}
                  alt="КЫРГЫЗ ТЕМИР ЖОЛУ logo"
                  className="object-cover"
                />
              </div>
              <span className="text-base text-[#3A475E] font-semibold">
                «Кыргызалтын» и «Кыргыз ЖД»
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1100px] mx-auto py-24">
          <h2 className="text-customBlue text-[40px] w-full mb-6 leading-[50px] font-black">
            Отзывы, которым можно доверять
          </h2>
          <p className="text-customGray text-2xl mb-12">
            Сделайте правильный выбор, основанный на опыте наших клиентах
          </p>
          <ul className="flex flex-wrap gap-4">
            <li className="rounded-xl shadow-md p-3">
              <div className="flex mb-2">
                <div className="flex items-center">
                  <img
                    src={IvanPopov}
                    alt="photo of man named Ivan Popov"
                    className="mr-2"
                  />
                  <h3 className="text-base font-semibold text-customGray">
                    Попов Иван
                  </h3>
                </div>
              </div>
              <div className="flex">
                <ImQuotesLeft className="text-customLightBlue text-3xl mr-3" />
                <p className="text-customBlue text-base font-medium w-full max-w-72">
                  Сотрудничаю с World Trade and Consult LLC уже полгода и могу с
                  уверенностью сказать, что это надежный и профессиональный
                  партнер.
                </p>
              </div>
            </li>
            <li className="rounded-xl shadow-md p-3">
              <div className="flex mb-2">
                <div className="flex items-center">
                  <img
                    src={EkatirinaSmirnova}
                    alt="photo of man named Ekatirina Smirnova"
                    className="mr-2"
                  />
                  <h3 className="text-base font-semibold text-customGray">
                    Смирнова Екатерина
                  </h3>
                </div>
              </div>
              <div className="flex">
                <ImQuotesLeft className="text-customLightBlue text-3xl mr-3" />
                <p className="text-customBlue text-base font-medium w-full max-w-72">
                  В World Trade and Consult LLC я всегда могу найти все
                  необходимые мне товары: смазочные масла, нефтепродукты,
                  текстиль, пластмассу.
                </p>
              </div>
            </li>
            <li className="rounded-xl shadow-md p-3">
              <div className="flex mb-2">
                <div className="flex items-center">
                  <img
                    src={NikolayKapustin}
                    alt="photo of man named Nikolay Kapustin"
                    className="mr-2"
                  />
                  <h3 className="text-base font-semibold text-customGray">
                    Капустин Николай
                  </h3>
                </div>
              </div>
              <div className="flex">
                <ImQuotesLeft className="text-customLightBlue text-3xl mr-3" />
                <p className="text-customBlue text-base font-medium w-full max-w-72">
                  WTaC предлагает своим клиентам выгодные цены и гибкие условия
                  оплаты, что делает сотрудничество с ними еще более
                  привлекательным.
                </p>
              </div>
            </li>
            <li className="rounded-xl shadow-md p-3">
              <div className="flex mb-2">
                <div className="flex items-center">
                  <img
                    src={NikolaevArseniy}
                    alt="photo of man named Ivan Popov"
                    className="mr-2"
                  />
                  <h3 className="text-base font-semibold text-customGray">
                    Николаев Арсений
                  </h3>
                </div>
              </div>
              <div className="flex">
                <ImQuotesLeft className="text-customLightBlue text-3xl mr-3" />
                <p className="text-customBlue text-base font-medium w-full max-w-72">
                  Сотрудники World Trade and Consult LLC всегда готовы помочь с
                  выбором товаров, ответить на любые вопросы и оформить заказ.
                </p>
              </div>
            </li>
            <li className="rounded-xl shadow-md p-3">
              <div className="flex mb-2">
                <div className="flex items-center">
                  <img
                    src={LarionovVladimir}
                    alt="photo of man named Ivan Popov"
                    className="mr-2"
                  />
                  <h3 className="text-base font-semibold text-customGray">
                    Ларионов Владимир
                  </h3>
                </div>
              </div>
              <div className="flex">
                <ImQuotesLeft className="text-customLightBlue text-3xl mr-3" />
                <p className="text-customBlue text-base font-medium w-full max-w-72">
                  World Trade and Consult LLC ценит своих клиентов и всегда
                  старается найти индивидуальный подход к каждому.
                </p>
              </div>
            </li>
            <li className="rounded-xl shadow-md p-3">
              <div className="flex mb-2">
                <div className="flex items-center">
                  <img
                    src={SokolovYaroslav}
                    alt="photo of man named Ivan Popov"
                    className="mr-2"
                  />
                  <h3 className="text-base font-semibold text-customGray">
                    Соколов Ярослав
                  </h3>
                </div>
              </div>
              <div className="flex">
                <ImQuotesLeft className="text-customLightBlue text-3xl mr-3" />
                <p className="text-customBlue text-base font-medium w-full max-w-72">
                  World Trade and Consult LLC обеспечивает быструю и безопасную
                  доставку товаров в любую точку мира.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
