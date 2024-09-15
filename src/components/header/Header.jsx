import "./Header.css";
import { Link } from "react-router-dom";
// images
import SiteLogo from "../../assets/wtac-logo.svg";
import BasketIcon from "../../assets/basket-icon.svg";
// icons
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="w-full max-w-[1100px] mx-auto py-5 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <a href="/">
            <img className="mr-9" src={SiteLogo} alt="WTAC LLC logo" />
          </a>
          <div className="flex items-center cursor-pointer">
            <span className="text-xl text-customBlue mr-2">Наши продукты</span>
            <IoIosArrowDown className="text-xl text-customBlue mt-1" />
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
