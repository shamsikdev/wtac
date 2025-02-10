// react and rrd
import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
// images icons
import SiteLogo from "../../assets/wtac-logo.svg";
import BasketIcon from "../../assets/basket-icon.svg";
import RuFlag from "../../assets/ru-flag.png";
import UkFlag from "../../assets/uk-flag.png";
import { IoIosArrowDown, IoIosMenu, IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [show, setShow] = useState(false);
  const { t, i18n } = useTranslation();
  const handleChange = (e) => {
    const selectedLanguage = e.target.dataset.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  console.log(i18n.language);

  // scroll top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <header className="bg-white shadow-lg fixed w-full z-40">
      <div className="w-full max-w-[1100px]  mx-auto py-5 sm:px-0 px-4 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <a href="/">
            <img
              className="mr-9 w-20 sm:w-24"
              src={SiteLogo}
              alt="WTAC LLC logo"
            />
          </a>
          <div
            className="relative sm:flex hidden items-center cursor-pointer dropdown"
            onClick={toggleDropdown}
          >
            <span className="text-xl text-customBlue mr-2">
              {t("header.our_products")}
            </span>
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
                      {t("products.lubricants")}
                    </span>
                  </NavLink>
                  <NavLink
                    to="/petroleum-products"
                    className="px-4 py-4 hover:bg-gray-100"
                  >
                    <span className="text-xl text-customBlue">
                      {t("products.petroleum_products")}
                    </span>
                  </NavLink>
                  <NavLink
                    to="/textile"
                    className="px-4 py-4 hover:bg-gray-100"
                  >
                    <span className="text-xl text-customBlue">
                      {t("products.textile_products")}
                    </span>
                  </NavLink>
                  <NavLink
                    to="/packaging-materials"
                    className="px-4 py-4 hover:bg-gray-100"
                  >
                    <span className="text-xl text-customBlue">
                      {t("products.packaging_materials")}
                    </span>
                  </NavLink>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex">
          <address className="sm:flex hidden items-center not-italic">
            <p className="text-base text-customBlue mr-7">
              {t("header.working_hours")}
            </p>
            <a
              className="text-xl text-customBlue mr-10"
              href="tel:+998990059932"
            >
              +998 99 005 99 32
            </a>
          </address>
          <div className="flex justify-between">
            <div className="sm:flex hidden gap-x-3 mr-10">
              <img
                onClick={handleChange}
                data-value="en"
                src={UkFlag}
                alt="Flag of United Kingdom"
                className="w-6 h-6"
              />
              <img
                onClick={handleChange}
                data-value="ru"
                src={RuFlag}
                alt="Flag of Russia"
                className="w-6 h-6"
              />
            </div>
            <div className="flex items-center gap-x-10">
              <Link to="/cart">
                <img
                  className="sm:w-6 w-7 cursor-pointer"
                  src={BasketIcon}
                  alt="basket icon"
                />
              </Link>
              <button
                className="md:hidden text-customBlue text-2xl"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                {isMenuOpen ? (
                  <IoMdClose className="text-4xl block sm:hidden" />
                ) : (
                  <IoIosMenu className="text-4xl block sm:hidden" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
