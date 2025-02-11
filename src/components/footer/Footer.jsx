// rrd
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// icons
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram, FaFacebook } from "react-icons/fa";

const Footer = ({ handleScrollContact }) => {
  // const { pathname } = useLocation();
  // pathname.includes("/textile") ? console.log(pathname) : console.log("oops");
  const { t } = useTranslation();
  return (
    <footer className="bg-customLightBlue bg-no-repeat sm:bg-[length:350px_300px] bg-[length:180px_130px] sm:bg-left">
      <div className="w-full max-w-[1100px] mx-auto sm:pt-32 sm:pb-24 sm:px-0 px-6 py-6 flex flex-col sm:justify-center sm:items-center">
        <div className="flex sm:justify-center justify-between sm:items-center sm:flex-col sm:mb-0 mb-5">
          <ul className="flex sm:mb-7 sm:gap-y-0 gap-y-3 flex-col sm:flex-row">
            <li className="text-base text-white mr-8">{t("footer.home")}</li>
            <li className="text-base text-white mr-8">{t("footer.about")}</li>
            <li className="text-base text-white mr-8">
              {t("footer.partners")}
            </li>
            <li className="text-base text-white mr-8">
              {t("footer.products")}
            </li>
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
          <div className="flex items-end gap-x-4 sm:mb-7">
            <a
              href="https://t.me/WTACFER"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="w-[24px] text-white h-[30px]" />
            </a>
            <a
              href="https://instagram.com"
              target="blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="w-[30px] text-white h-[30px]" />
            </a>
            <a
              href="https://facebook.com"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-[24px] text-white h-[30px]" />
            </a>
          </div>
        </div>
        <span className="text-sm text-center text-white opacity-75">
          © Copyright 2024 - World Trade and Consult LLC
        </span>
      </div>
    </footer>
  );
};

export default Footer;
