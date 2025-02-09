import { Link } from "react-router-dom";
import PageNotFoundImg from "../assets/page-not-found.png";
import { useTranslation } from "react-i18next";
const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <section className="flex items-center pt-10 h-svh flex-col bg-customSkyBlue">
      <img
        src={PageNotFoundImg}
        alt="image of error 404"
        className="w-[600px] mb-10"
      />
      <h1 className="text-customBlue uppercase text-5xl font-bold mb-10">
        {t("page_not_found")}
      </h1>
      <Link className="text-customLightBlue text-2xl underline">
        {t("back_to_home")}
      </Link>
    </section>
  );
};

export default PageNotFound;
