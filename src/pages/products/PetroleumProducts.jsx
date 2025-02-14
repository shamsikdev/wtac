import { useTranslation } from "react-i18next";

export default function PetroleumProducts() {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-[1100px] mx-auto sm:pt-44 sm:px-0 pt-32   px-6">
      <h2 className="text-2xl sm:text-3xl sm:text-center text-customBlue font-extrabold mb-4">
        {t("company.title")}
      </h2>
      <p className="text-customGray text-base sm:text-lg sm:text-center mb-3">
        {t("company.description")}
      </p>
      <p className="mb-3 text-customGray w-full text-base sm:text-lg">
        <b>{t("company.title")}</b> - {t("company.about")}
      </p>
      <ul className="list-disc list-inside text-base sm:text-lg text-customGray mb-3">
        <li>{t("artp_products.gasoline")}</li>
        <li>{t("artp_products.diesel")}</li>
        <li>{t("artp_products.base_oils")}</li>
      </ul>

      <section className="mb-10">
        <h3 className="text-xl sm:text-2xl text-customBlue font-black mb-6">
          {t("artp_advantages.title")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["wide_range", "quality", "prices", "individual_approach"].map(
            (key, index) => (
              <div
                key={index}
                className="flex items-start shadow-md w-full p-3 rounded-md bg-white"
              >
                <p className="text-base sm:text-lg text-customGray">
                  {t(`artp_advantages.${key}`)}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-xl sm:text-2xl text-customBlue font-black mb-3">
          {t("artp_advantages.service")}
        </h3>
        <p className="text-customGray text-base sm:text-lg mb-3">
          {t("service.description")}
        </p>
        <ul className="list-disc list-inside text-base sm:text-lg text-customGray mb-3">
          <li>{t("service.consultation")}</li>
          <li>{t("service.delivery")}</li>
          <li>{t("service.support")}</li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-xl sm:text-2xl text-customBlue font-black mb-3">
          {t("base_oils.title")}
        </h3>
        <p className="text-customGray text-base sm:text-lg mb-3 w-full">
          {t("base_oils.description")}
        </p>
        <h4 className="text-xl sm:text-2xl text-customBlue font-black mb-2">
          {t("base_oils.base_oils_advantages.title")}
        </h4>
        <ul className="list-disc list-inside text-customGray text-base sm:text-lg">
          <li className="mb-1">
            {t("base_oils.base_oils_advantages.standards")}
          </li>
          <li className="mb-1">
            {t("base_oils.base_oils_advantages.efficiency")}
          </li>
          <li className="mb-1">{t("base_oils.base_oils_advantages.usage")}</li>
        </ul>
        <h4 className="text-xl sm:text-2xl text-customBlue font-black mb-3">
          {t("base_oils.benefits.title")}
        </h4>
        <ul className="list-disc list-inside text-customGray text-base sm:text-lg mb-6">
          <li>{t("base_oils.benefits.costs")}</li>
          <li>{t("base_oils.benefits.productivity")}</li>
          <li>{t("base_oils.benefits.lifespan")}</li>
        </ul>
      </section>
    </div>
  );
}
