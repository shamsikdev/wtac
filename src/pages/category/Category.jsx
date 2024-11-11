import "./Category.css";
import { Link } from "react-router-dom";
import IntroImg1 from "../../assets/intro-img1.png";
import IntroImg2 from "../../assets/intro-img2.png";
import IntroImg3 from "../../assets/intro-img3.png";
import IntroImg4 from "../../assets/intro-img4.png";
import EngineIcon from "../../assets/engine-icon.svg";
import EngineIcon2 from "../../assets/engine-icon2.svg";
import TransmissionIcon from "../../assets/transmission-icon.svg";
import { GoArrowRight } from "react-icons/go";
const Category = () => {
  return (
    <>
      <section className="relative mb-28">
        <div className="w-full max-w-[1100px] mx-auto flex justify-center items-center py-44">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl text-customBlue font-extrabold mb-6">
              Смазочные материалы
            </h2>
            <p className="text-customGray text-xl w-full max-w-[600px] mb-12 text-center">
              Мы предлагаем широкий спектр смазочных материалов, которые
              соответствуют международным стандартам качества ISO и требованиям
              современных технологий.
            </p>
            <Link className="bg-customLightBlue hover:bg-white hover:text-customLightBlue border-2 border-customLightBlue transition-all duration-500 text-white text-xl py-4 px-7 rounded-md w-full max-w-56">
              Связаться с нами
            </Link>
          </div>
          <div className="parent1 absolute right-[10%] top-[15%]">
            <img
              src={IntroImg1}
              alt="White bathrobe, slippers, towels, and a bath mat with footprints; a minimal spa set on a wooden floor."
              className="w-72 h-72 duration-500 rotate-45 hover:scale-105 top-36 right-28 relative  rounded-3xl  object-cover div5"
            />
            <img
              src={IntroImg2}
              alt="Engine pistons surrounded by splashes of golden motor oil; a dynamic representation of lubrication and engine mechanics."
              className="w-72 h-72 rotate-45 duration-500 hover:scale-105 top-28 right-28  relative rounded-3xl object-cover div6"
            />
            <img
              src={IntroImg3}
              alt=""
              className="w-72 h-72 rotate-45 duration-500 hover:scale-105 top-28 left-8 hover:z-40 relative   rounded-3xl object-cover div7"
            />
            <img
              src={IntroImg4}
              alt=""
              className="w-72 h-72 rotate-45 duration-500 hover:scale-105 top-36 left-8 hover:z-40 relative  object-cover div8 rounded-3xl"
            />
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
            <ul className="flex flex-wrap  items-center justify-center gap-5">
              <li className="bg-white w-80 h-64 p-5 rounded-3xl relative group">
                <div className="flex justify-between items-center">
                  <div className="bg-customSkyBlue p-5 rounded-full w-24 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <img src={EngineIcon} alt="" className="w-12 h-12" />
                  </div>
                  <GoArrowRight className="text-5xl text-customLightBlue mr-5 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                </div>
                <h3 className="text-xl text-customLightBlue mt-20">
                  Моторные масла для дизельных двигателей
                </h3>
                <img
                  src={EngineIcon}
                  alt=""
                  className="absolute top-3 left-7 w-[80%] transition-opacity duration-500 opacity-0 group-hover:opacity-10"
                />
              </li>

              <li className="bg-white w-80 h-64  p-5 rounded-3xl relative group ">
                <div className="flex justify-between items-center">
                  <div className="bg-customSkyBlue p-5 rounded-full w-24 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                    <img src={EngineIcon2} alt="" className="w-12 h-12" />
                  </div>
                  <GoArrowRight className="text-5xl text-customLightBlue opacity-0 group-hover:opacity-100 transition-opacity duration-500 mr-5" />
                </div>
                <h3 className="text-xl text-customLightBlue w-full max-w-60 mt-20">
                  Моторные масла уровня ГОСТ
                </h3>
                <img
                  src={EngineIcon2}
                  className="opacity-0 absolute top-6 w-[85%] left-7 transition-opacity group-hover:opacity-10 duration-500"
                  alt=""
                />
              </li>
              <li className="bg-white w-80 h-64  p-5 rounded-3xl relative group ">
                <div className="flex justify-between items-center">
                  <div className="bg-customSkyBlue p-5 rounded-full w-24 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                    <img src={EngineIcon2} alt="" className="w-12 h-12" />
                  </div>
                  <GoArrowRight className="text-5xl text-customLightBlue opacity-0 group-hover:opacity-100 transition-opacity duration-500 mr-5" />
                </div>
                <h3 className="text-xl text-customLightBlue w-full max-w-60 mt-[99px]">
                  Трансмиссионные масла
                </h3>
                <img
                  src={TransmissionIcon}
                  className="opacity-0 absolute top-3 w-[70%] left-16 transition-opacity group-hover:opacity-10 duration-500"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
