import SiteLogo from "../../assets/wtac-logo.svg";
import BasketIcon from "../../assets/basket-icon.svg";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="w-full max-w-[1100px] mx-auto py-5 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <a href="/">
            <img className="mr-9" src={SiteLogo} alt="WTAC LLC logo" />
          </a>
          <div
            className="relative flex items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="text-xl text-customBlue mr-2">Наши продукты</span>
            <IoIosArrowDown
              className={`text-xl text-customBlue mt-1 transform transition-all duration-500 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
            {/* Dropdown меню */}
            {isDropdownOpen && (
              <div className="absolute left-0 top-16 mt-2 w-96 bg-white shadow-lg rounded-lg z-10">
                <ul className="py-2">
                  <li className="px-4 py-4 hover:bg-gray-100">
                    <Link
                      className="text-xl text-customBlue"
                      to="/products/lubricants"
                    >
                      Смазочные материалы
                    </Link>
                  </li>
                  <li className="px-4 py-4 hover:bg-gray-100">
                    <Link
                      className="text-xl text-customBlue"
                      to="/products/oil-products"
                    >
                      Нефтепродукты
                    </Link>
                  </li>
                  <li className="px-4 py-4 hover:bg-gray-100">
                    <Link
                      className="text-xl text-customBlue"
                      to="/products/oil-products"
                    >
                      Текстильная продукция
                    </Link>
                  </li>
                  <li className="px-4 py-4 hover:bg-gray-100">
                    <Link
                      className="text-xl text-customBlue"
                      to="/products/oil-products"
                    >
                      Упаковочные материалы
                    </Link>
                  </li>
                  <li className="px-4 py-4 hover:bg-gray-100">
                    <Link
                      className="text-xl text-customBlue"
                      to="/products/oil-products"
                    >
                      Цветные металлы
                    </Link>
                  </li>
                  <li className="px-4 py-4 hover:bg-gray-100">
                    <Link
                      className="text-xl text-customBlue"
                      to="/products/oil-products"
                    >
                      Кабельно-проводниковая продукция
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <address className="flex items-end not-italic">
          <p className="text-base text-customBlue mr-7">
            пн-пт с 9:00 до 18:00
          </p>
          <a className="text-xl text-customBlue mr-20" href="tel:+998991234567">
            Номер телефона
          </a>
          <Link to="/cart">
            <img
              className="cursor-pointer"
              src={BasketIcon}
              alt="basket icon"
            />
          </Link>
        </address>
      </div>
    </header>
  );
};

export default Header;
