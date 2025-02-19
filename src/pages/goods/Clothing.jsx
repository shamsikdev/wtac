import { useState } from "react";
import { Link } from "react-router-dom";
import { LuSlidersHorizontal } from "react-icons/lu";
import { GoArrowLeft } from "react-icons/go";
import { IoIosList } from "react-icons/io";
import { HiOutlineViewGrid } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import HoodieImg from "../../assets/hoodie-img.svg";
import HoodieManImg from "../../assets/hoodie-img.png";
import SweatshirtImg from "../../assets/sweatshirt-img.png";
import SweatshirtManImg from "../../assets/sweatshirt-man-img.png";
import TShirtImg from "../../assets/t-shirt-img.png";
import TShirtManImg from "../../assets/t-shirt-man-img.png";
const products = [
  {
    id: 1,
    name: "Hoodie",
    image: HoodieImg,
    sizes: ["S", "M", "L", "XL"],
    gap: "mb-9",
    category: "women",
    type: "oversize",
  },
  {
    id: 2,
    name: "Sweatshirt",
    image: SweatshirtImg,
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    // gap: "mb-9",
    category: "women",
    type: "oversize",
  },
  {
    id: 3,
    name: "Hoodie",
    image: HoodieManImg,
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    category: "women",
    type: "straight",
  },
  {
    id: 4,
    name: "Sweatshirt",
    image: SweatshirtManImg,
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "women",
    type: "straight",
  },
  {
    id: 5,
    name: "WOMEN’S T-SHIRTS Oversize model",
    image: TShirtImg,
    sizes: ["S", "M", "L", "XL"],
    gap: "mb-9",
    category: "men",
    type: "oversize",
  },
  {
    id: 6,
    name: "WOMEN’S T-SHIRTS Oversize model",
    image: TShirtManImg,
    sizes: ["S", "M", "L", "XL"],
    gap: "mb-9",
    category: "men",
    type: "oversize",
  },
  {
    id: 7,
    name: "WOMEN’S T-SHIRTS Straight cut T-shirt",
    image: SweatshirtManImg,
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    category: "men",
    type: "straight",
  },
  {
    id: 8,
    name: "WOMEN’S T-SHIRTS Straight cut T-shirt",
    image: TShirtManImg,
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "men",
    type: "straight",
  },
];
function Clothing() {
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
      <div className="w-full max-w-[1100px] mx-auto sm:pt-44 pt-36 sm:px-0 px-6">
        <Link to="/textile " className="flex items-center mb-12">
          <GoArrowLeft className="mr-3 text-4xl hidden sm:block text-customLightBlue" />
          <span className="sm:text-4xl text-2xl font-black text-customLightBlue">
            Мужская и женская одежда
          </span>
        </Link>
        <div className="flex justify-between mb-6">
          <button className="w-full max-w-40 flex items-center justify-center py-3 px-4 bg-customLightBlue text-white rounded-md">
            <span className="mr-2 text-xl">Фильтр</span>
            <LuSlidersHorizontal className="text-2xl" />
          </button>
          <div className="flex gap-x-4">
            <button
              className={`justify-center items-center hidden sm:flex px-4 py-2 rounded-md ${getButtonStyles(
                1
              )}`}
              onClick={() => handleButtonClick(1)}
            >
              <HiOutlineViewGrid className="w-7 h-7" />
            </button>
            <button
              className={`justify-center items-center sm:flex hidden px-4 py-2 rounded-md ${getButtonStyles(
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
        <div className="w-full max-w-[1100px] mx-auto sm:py-12 py-6 sm:px-0 px-5">
          <ul className="flex flex-wrap sm:gap-x-5 sm:gap-y-20 sm:gap-0 gap-2">
            {products?.map((product) => {
              return (
                <li className="bg-white px-3 pt-2 pb-5 flex flex-col rounded-xl w-full sm:max-w-64 max-w-40 h-full max-h-[500px]">
                  <img src={product.image} alt="" className="mb-6" />
                  <span className="text-lg  text-customBlue mb-1">
                    {product.name}
                  </span>
                  <div className={`flex flex-wrap gap-1 ${product.gap}`}>
                    {product?.sizes?.map((size) => {
                      return (
                        <button
                          onClick={() => setShowSelectedButton(product.id)}
                          className="text-sm text-customLightBlue bg-customSkyBlue w-10 h-8 p-[6px] rounded-md"
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                  {showSelectedButton == product.id && (
                    <div
                      className={`flex flex-col ${product.gap ? "" : "mt-6"}`}
                    >
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
}
export default Clothing;
