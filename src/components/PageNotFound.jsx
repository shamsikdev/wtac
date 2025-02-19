import { Link } from "react-router-dom";
import PageNotFoundImg from "../assets/page-not-found.png";
import { useTranslation } from "react-i18next";
const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <section className="flex items-center sm:pt-10 pt-40 h-svh flex-col bg-customSkyBlue">
      <img
        src={PageNotFoundImg}
        alt="image of error 404"
        className="sm:w-[600px] w-72 mb-10"
      />
      <h1 className="text-customBlue uppercase sm:text-5xl text-2xl font-bold sm:mb-10 mb-5">
        {t("page_not_found")}
      </h1>
      <Link className="text-customLightBlue sm:text-2xl text-base underline">
        {t("back_to_home")}
      </Link>
    </section>
  );
};

export default PageNotFound;
