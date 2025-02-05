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
const Packaging = ({ handleScrollContact }) => {
  return (
    <>
      <section className="relative mb-28">
        <div className="w-full max-w-[1100px] mx-auto flex justify-center items-center py-44">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl text-customBlue font-extrabold mb-6">
              Упаковычные материалы
            </h2>
            <p className="text-customGray text-xl w-full max-w-[500px] mb-12 text-center">
              Мы производим полимерные плёнки и упаковочные материалы высокого
              качества с использованием современных технологий.
            </p>
            <Link
              onClick={(e) => handleScrollContact(e, 2080)}
              className="bg-customLightBlue hover:bg-white hover:text-customLightBlue border-2 border-customLightBlue transition-all duration-500 text-white text-xl py-4 px-7 rounded-md w-full max-w-56"
            >
              Связаться с нами
            </Link>
          </div>
          <div className="parent absolute right-[13%] top-[15%] -z-10">
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
            Наше преимущество
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
                  Гарантии и качество
                </h3>
                <p className="text-xl text-customGray w-[750px]">
                  Средний срок использования парниковых пленок с запросами
                  потребителя от 12 до 48 месяцев, при правильной установке и
                  эксплуатации. На заводе имеется собственная лаборатория
                  потехническим испытаниям и контролю качества выпускаемой
                  продукции.
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
                  Ассортимент продукции
                </h3>
                <p className="text-xl text-customGray w-[706px] mb-3">
                  Полиэтиленовые пленки шириной от 1 000 мм до 12 000 мм,
                  толщиной от 20 до 200 микрон, с добавлением добавок таких как
                  UV, AF, IK, идеально подходящие для теплиц.
                </p>
                <div className="flex gap-x-6">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <AiOutlineColumnWidth className="text-customBlue text-3xl mr-1" />
                      <span className="text-xl text-[#484848] font-semibold">
                        Ширина:
                      </span>
                    </div>
                    <p className="text-xl text-customGray">1 000 - 12 000 мм</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <PiListBold className="text-customBlue text-2xl mr-1" />
                      <span className="text-xl text-[#484848] font-semibold">
                        Толщина:
                      </span>
                    </div>
                    <p className="text-xl text-customGray">20 - 200 мм</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <PiPlusCircleBold className="text-customBlue text-2xl mr-1" />
                      <span className="text-xl text-[#484848] font-semibold">
                        Добавки:
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
                  Профессионализм
                </h3>
                <ul className="flex flex-col">
                  <li className="flex items-center mb-3">
                    <FaCheckCircle className="text-customBlue mr-2" />
                    <p className="text-xl text-customGray">
                      Команда состоящая из более чем 25-ти профессионалов.
                    </p>
                  </li>
                  <li className="flex items-start mb-3">
                    <FaCheckCircle className="text-customBlue mr-2 mt-1" />
                    <p className="text-xl text-customGray w-[706px]">
                      Высококвалифицированный технолог из Китая с 30-летним
                      опытом в производстве пленок.
                    </p>
                  </li>
                  <li className="flex items-center mb-3">
                    <FaCheckCircle className="text-customBlue mr-2" />
                    <p className="text-xl text-customGray">
                      3 000 м2 произведенных мощностей в городе Фергане.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-customBlue mr-2" />
                    <p className="text-xl text-customGray">
                      Более чем 8 000 тон произведственной продукции в год.
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
