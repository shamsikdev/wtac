import SiteLogo from "../../assets/wtac-logo.svg";
import BasketIcon from "../../assets/basket-icon.svg";
import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Функция для закрытия dropdown
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Обработчик клика вне dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Проверяем, если клик был за пределами dropdown
      if (!event.target.closest(".dropdown")) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Удаляем обработчик при размонтировании компонента
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  //! scroll top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="w-full max-w-[1100px] mx-auto py-5 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <a href="/">
            <img className="mr-9" src={SiteLogo} alt="WTAC LLC logo" />
          </a>
          <div
            className="relative flex items-center cursor-pointer dropdown"
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
              <div className="absolute left-0 top-16 mt-2 w-96 bg-white shadow-lg rounded-lg z-10 dropdown">
                <ul className="py-2 flex flex-col">
                  <NavLink
                    to="/lubricants"
                    className="px-4 py-4 hover:bg-gray-100"
                  >
                    <span className="text-xl text-customBlue">
                      Смазочные материалы
                    </span>
                  </NavLink>
                  <NavLink to="/c" className="px-4 py-4 hover:bg-gray-100">
                    <span className="text-xl text-customBlue">
                      Нефтепродукты
                    </span>
                  </NavLink>
                  <NavLink to="/c" className="px-4 py-4 hover:bg-gray-100">
                    <span className="text-xl text-customBlue">
                      Текстильная продукция
                    </span>
                  </NavLink>
                  <NavLink to="/c" className="px-4 py-4 hover:bg-gray-100">
                    <span className="text-xl text-customBlue">
                      Упаковочные материалы
                    </span>
                  </NavLink>
                  <NavLink to="/c" className="px-4 py-4 hover:bg-gray-100">
                    <span className="text-xl text-customBlue">
                      Цветные металлы
                    </span>
                  </NavLink>
                  <NavLink to="/c" className="px-4 py-4 hover:bg-gray-100">
                    <span className="text-xl text-customBlue">
                      Кабельно-проводниковая продукция
                    </span>
                  </NavLink>
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
