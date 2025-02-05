// rrd
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// icons images
import FacebookIcon from "../../assets/facebook-icon.svg";
import { AiFillInstagram } from "react-icons/ai";
import TelegramIcon from "../../assets/telegram-icon.svg";
const Footer = ({ handleScrollContact }) => {
  // const { pathname } = useLocation();
  // pathname.includes("/textile") ? console.log(pathname) : console.log("oops");
  const { t } = useTranslation();
  return (
    <footer className="bg-customLightBlue bg-no-repeat bg-[length:350px_300px] bg-left">
      <div className="w-full max-w-[1100px] mx-auto pt-32 pb-24 flex flex-col justify-center items-center">
        <ul className="flex mb-7">
          <li className="text-base text-white mr-8">{t("footer.home")}</li>
          <li className="text-base text-white mr-8">{t("footer.about")}</li>
          <li className="text-base text-white mr-8">{t("footer.partners")}</li>
          <li className="text-base text-white mr-8">{t("footer.products")}</li>
          <li className="text-base text-white mr-8">
            <Link to="/certificates">{t("footer.certificates")}</Link>
          </li>
          <li className="text-base text-white">
            <button
              onClick={(e) => {
                handleScrollContact(e, 5550);
              }}
            >
              {t("footer.contacts")}
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
