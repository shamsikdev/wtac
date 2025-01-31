// rrd
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
// icons images
import FacebookIcon from "../../assets/facebook-icon.svg";
import TelegramIcon from "../../assets/telegram-icon.svg";
// import TwitterIcon from "../../assets/twitter-icon.svg";
const Footer = ({ handleScrollContact }) => {
  // const { pathname } = useLocation();
  // pathname.includes("/textile") ? console.log(pathname) : console.log("oops");

  return (
    <footer className="bg-customLightBlue bg-no-repeat bg-[length:350px_300px] bg-left">
      <div className="w-full max-w-[1100px] mx-auto pt-32 pb-24 flex flex-col justify-center items-center">
        <ul className="flex mb-7">
          <li className="text-base text-white mr-8">Главная</li>
          <li className="text-base text-white mr-8">О нас</li>
          <li className="text-base text-white mr-8">Партнеры</li>
          <li className="text-base text-white mr-8">Наша продукция</li>
          <li className="text-base text-white mr-8">
            <Link to="/certificates">Сертификаты</Link>
          </li>
          <li className="text-base text-white">
            <button
              onClick={(e) => {
                handleScrollContact(e, 5550);
              }}
            >
              Контакты
            </button>
          </li>
        </ul>
        <div className="flex items-center mb-7">
          <img
            className="mr-6 w-6 h-6"
            src={FacebookIcon}
            alt="facebook icon"
          />
          <a target="blank" href="https://t.me/WTACFER">
            <img
              className="mr-5 w-6 h-6"
              src={TelegramIcon}
              alt="telegram icon"
            />
          </a>
          <AiFillInstagram className="w-[30px] text-white h-[30px]" />
          {/* <img className="w-6 h-6" src={TwitterIcon} alt="twitter icon" /> */}
        </div>
        <span className="text-sm text-white opacity-75">
          © Copyright 2024 - World Trade and Consult LLC
        </span>
      </div>
    </footer>
  );
};

export default Footer;
