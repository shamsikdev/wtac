import "./Textile.css";
import { Link } from "react-router-dom";
import IntroImg9 from "../../assets/intro-img9.png";
import IntroImg10 from "../../assets/intro-img10.png";
import IntroImg11 from "../../assets/intro-img11.png";
import IntroImg12 from "../../assets/intro-img12.png";
import { GoArrowRight } from "react-icons/go";
const Textile = () => {
  return (
    <>
      <section className="relative mb-28">
        <div className="w-full max-w-[1100px] mx-auto flex justify-center items-center py-44">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl text-customBlue font-extrabold mb-6">
              Текстильная продукция
            </h2>
            <p className="text-customGray text-xl w-full max-w-[600px] mb-12 text-center">
              Мы предлагаем широкий ассортимент текстильной продукции, которая
              соответствует международным стандартам качества и требованиям
              современных технологий.
            </p>
            <Link className="bg-customLightBlue hover:bg-white hover:text-customLightBlue border-2 border-customLightBlue transition-all duration-500 text-white text-xl py-4 px-7 rounded-md w-full max-w-56">
              Связаться с нами
            </Link>
          </div>
          <div className="parent absolute right-[10%] top-[15%]">
            <div className="relative w-72 h-72 rotate-45 overflow-hidden rounded-3xl top-36 right-28 div5 hover:scale-105 duration-500">
              <img
                src={IntroImg9}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative w-72 h-72 rotate-45 overflow-hidden rounded-3xl top-28 right-28 div6 hover:scale-105 duration-500">
              <img
                src={IntroImg10}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative w-72 h-72 rotate-45 overflow-hidden rounded-3xl top-28 left-8 div7 hover:scale-105 duration-500">
              <img
                src={IntroImg11}
                alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="relative w-72 h-72 rotate-45 overflow-hidden rounded-3xl top-36 left-8 div8 hover:scale-105 duration-500">
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
        <div className="w-full max-w-[1100px] mx-auto flex  flex-col  pt-44">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl text-customBlue font-black mb-6">
              Наш ассортимент текстильной продукции
            </h2>
            <p className="text-customGray text-2xl w-full mb-12">
              Мы предлагаем текстильные изделия для домашнего и коммерческого
              использования:
            </p>
          </div>
          <ul className="flex gap-x-5">
            <li className=" flex justify-between flex-col group relative p-6 w-[530px] h-80 rounded-2xl bg-no-repeat bg-cover bg-[url(./assets/textile-img1.png)] overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
              <div className="relative w-20 h-20 bg-[#EBF7FC] rounded-full flex items-center justify-center">
                <GoArrowRight className="text-5xl text-customLightBlue" />
              </div>
              <span className="text-3xl text-white z-10 relative  transition-all duration-700">
                Домашний текстиль
              </span>
            </li>
            <li className=" flex justify-between flex-col group relative p-6 w-[530px] h-80 rounded-2xl bg-no-repeat bg-cover bg-[url(./assets/textile-img1.png)] overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
              <div className="relative w-20 h-20 bg-[#EBF7FC] rounded-full flex items-center justify-center">
                <GoArrowRight className="text-5xl text-customLightBlue" />
              </div>
              <span className="text-3xl text-white z-10 relative  transition-all duration-700">
                Мужская и женская одежда
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Textile;
