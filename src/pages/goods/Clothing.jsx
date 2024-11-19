import { useState } from "react";
import { Link } from "react-router-dom";
import { LuSlidersHorizontal } from "react-icons/lu";
import { GoArrowLeft } from "react-icons/go";
import { IoIosList } from "react-icons/io";
import { HiOutlineViewGrid } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import HoodieImg from "../../assets/hoodie-img.svg";
// const Clothing = () => {
//   const [viewType, setViewType] = useState(false);
//   return (
//     <section>
//       <div className="w-full max-w-[1100px] mx-auto pt-44">
//         <Link to="/" className="flex items-center mb-12">
//           <GoArrowLeft className="mr-3 text-4xl  text-customLightBlue" />
//           <span className="text-4xl font-black text-customLightBlue">
//             Мужская и женская одежда
//           </span>
//         </Link>

//         <div className="flex justify-between">
//           <button className="w-full max-w-40 flex items-center justify-center py-3 px-4 bg-customLightBlue text-white rounded-md">
//             <span className="mr-2 text-xl">Фильтр</span>
//             <LuSlidersHorizontal className="text-2xl" />
//           </button>
//           <div className="flex gap-x-4">
//             <button className="justify-center items-center flex px-4 py-2 bg-customSkyBlue text-customLightBlue rounded-md">
//               <IoIosList className="w-7 h-7" />
//             </button>
//             <button className="justify-center items-center flex px-4 py-2 bg-customSkyBlue text-customLightBlue rounded-md">
//               <IoIosList className="w-7 h-7" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clothing;
const products = [
  {
    id: 1,
    name: "WOMEN'S T-SHIRTS Oversize model",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-U9lMzyUV7Ep4LCrXUqXtnLV2udoI2M.png",
    sizes: ["S", "M", "L", "XL"],
    category: "women",
    type: "oversize",
  },
  {
    id: 2,
    name: "WOMEN'S T-SHIRTS Oversize model",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-U9lMzyUV7Ep4LCrXUqXtnLV2udoI2M.png",
    sizes: ["S", "M", "L", "XL"],
    category: "women",
    type: "oversize",
  },
  {
    id: 3,
    name: "WOMEN'S T-SHIRTS Straight cut T-shirt",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-U9lMzyUV7Ep4LCrXUqXtnLV2udoI2M.png",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    category: "women",
    type: "straight",
  },
  {
    id: 4,
    name: "WOMEN'S T-SHIRTS Straight cut T-shirt",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-U9lMzyUV7Ep4LCrXUqXtnLV2udoI2M.png",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "women",
    type: "straight",
  },
  {
    id: 5,
    name: "MEN'S T-SHIRTS Oversize model",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-U9lMzyUV7Ep4LCrXUqXtnLV2udoI2M.png",
    sizes: ["S", "M", "L", "XL"],
    category: "men",
    type: "oversize",
  },
  {
    id: 6,
    name: "MEN'S T-SHIRTS Oversize model",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-U9lMzyUV7Ep4LCrXUqXtnLV2udoI2M.png",
    sizes: ["S", "M", "L", "XL"],
    category: "men",
    type: "oversize",
  },
  {
    id: 7,
    name: "MEN'S T-SHIRTS Straight cut T-shirt",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-U9lMzyUV7Ep4LCrXUqXtnLV2udoI2M.png",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    category: "men",
    type: "straight",
  },
  {
    id: 8,
    name: "MEN'S T-SHIRTS Straight cut T-shirt",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-U9lMzyUV7Ep4LCrXUqXtnLV2udoI2M.png",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "men",
    type: "straight",
  },
];
export default function ButtonGroup() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const getButtonStyles = (buttonIndex) => {
    const isActive = activeButton === buttonIndex;
    return isActive
      ? "bg-customLightBlue text-white"
      : "bg-customSkyBlue text-customLightBlue";
  };

  return (
    <section>
      <div className="w-full max-w-[1100px] mx-auto pt-44">
        <Link to="/" className="flex items-center mb-12">
          <GoArrowLeft className="mr-3 text-4xl  text-customLightBlue" />
          <span className="text-4xl font-black text-customLightBlue">
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
            {products?.map((product) => {
              return (
                <li className="bg-white px-3 py-2 rounded-xl w-full max-w-64">
                  <img src={HoodieImg} alt="" className="mb-6" />
                  <span className="text-lg  text-customBlue mb-1">Hoodie</span>
                  <div className="flex flex-wrap  gap-1">
                    {product?.sizes?.map((size) => {
                      return (
                        <button className="text-base text-customLightBlue bg-customSkyBlue p-[6px] rounded-md">
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
