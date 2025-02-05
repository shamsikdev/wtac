import { useState } from "react";
import { Link } from "react-router-dom";
import { LuSlidersHorizontal } from "react-icons/lu";
import { GoArrowLeft } from "react-icons/go";
import { IoIosList } from "react-icons/io";
import { HiOutlineViewGrid } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import ZicOil from "../../assets/zic-oil.png";
import CastrolOil from "../../assets/castrol-oil.png";
import CastrolVehicleOil from "../../assets/castrol-multivehicle-oil.png";
const oil_data = [
  {
    id: 1,
    name: "Castrol - ATF DEX II MULTIVEHICLE",
    volume: "1L",
    image: CastrolOil,
  },
  {
    id: 2,
    name: "Castrol - ATF MULTIVEHICLE",
    volume: "1L",
    image: CastrolVehicleOil,
  },
  {
    id: 3,
    name: "ZIC ATF MULTI LF",
    volume: "4L",
    image: ZicOil,
  },
  {
    id: 4,
    name: "ZIC ATF MULTI HT",
    volume: "4L",
    image: CastrolOil,
  },
  {
    id: 5,
    name: "ZIC ATF MULTI HT",
    volume: "4L",
    image: ZicOil,
  },
  {
    id: 6,
    name: "ZIC ATF MULTI HT",
    volume: "4L",
    image: ZicOil,
  },
  {
    id: 7,
    name: "ZIC ATF MULTI HT",
    volume: "4L",
    image: ZicOil,
  },
  {
    id: 8,
    name: "ZIC ATF MULTI HT",
    volume: "1L",
    image: CastrolOil,
  },
];
const TransmissionOils = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [showSelectedButton, setShowSelectedButton] = useState(null);
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const getButtonStyles = (buttonIndex) => {
    const isActive = activeButton === buttonIndex;
    return isActive
      ? "bg-customLightBlue text-white"
      : "bg-customSkyBlue text-customLightBlue";
  };
  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  return (
    <section>
      <div className="w-full max-w-[1100px] mx-auto pt-44">
        <Link to="/lubricants" className="flex items-center mb-12">
          <GoArrowLeft className="mr-3 text-4xl  text-customLightBlue" />
          <span className="text-4xl font-black text-customLightBlue">
            Трансмиссонные масла
          </span>
        </Link>
        <div className="flex justify-between mb-6">
          <button className="w-full max-w-40 flex items-center justify-center py-3 px-4 bg-customLightBlue text-white rounded-md">
            <span className="mr-2 text-xl">Фильтр</span>
            <LuSlidersHorizontal className="text-2xl" />
          </button>
          <div className="flex gap-x-4">
            <button
              className={`justify-center items-center flex px-4 py-2 rounded-md ${getButtonStyles(
                1
              )}`}
              onClick={() => handleButtonClick(1)}
            >
              <HiOutlineViewGrid className="w-7 h-7" />
            </button>
            <button
              className={`justify-center items-center flex px-4 py-2 rounded-md ${getButtonStyles(
                2
              )}`}
              onClick={() => handleButtonClick(2)}
            >
              <IoIosList className="w-7 h-7" />
            </button>
            <button
              className={`justify-center items-center flex px-4 py-2 rounded-md ${getButtonStyles(
                3
              )}`}
              onClick={() => handleButtonClick(3)}
            >
              <RxHamburgerMenu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-customSkyBlue">
        <div className="w-full max-w-[1100px] mx-auto py-12">
          <ul className="flex flex-wrap gap-x-5 gap-y-20">
            {oil_data?.map((datum) => {
              return (
                <li className="bg-white px-3 pt-2 pb-5 flex flex-col rounded-xl w-full max-w-64 h-full max-h-[500px]">
                  <img src={datum.image} alt="" className="mb-6" />
                  <span className="text-base  text-customBlue mb-1">
                    {datum.name}
                  </span>
                  <button
                    onClick={() => setShowSelectedButton(datum.id)}
                    className="text-sm text-customLightBlue bg-customSkyBlue w-10 h-8 p-[6px] rounded-md mb-6"
                  >
                    {datum.volume}
                  </button>
                  {showSelectedButton == datum.id && (
                    <div className={`flex flex-col`}>
                      <div className="flex justify-between items-center mb-6">
                        <button
                          onClick={decreaseQuantity}
                          className="text-customLightBlue bg-customSkyBlue text-xl p-2 w-8 h-8 flex items-center justify-center rounded"
                        >
                          -
                        </button>
                        <span className="text-xl">{quantity}</span>
                        <button
                          onClick={increaseQuantity}
                          className="text-customLightBlue bg-customSkyBlue text-xl p-2 w-8 h-8 flex items-center justify-center rounded"
                        >
                          +
                        </button>
                      </div>
                      <button className="w-full bg-customLightBlue text-white rounded-md px-4 py-2">
                        В корзину
                      </button>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TransmissionOils;
