// react
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
// images
import Shadow from "../../assets/shadow.png";
const Contact = ({ setOpenModal }) => {
  const { t, i18n } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ytmyezs", "template_jkm98lo", form.current, {
        publicKey: "mIugaRSrMOiqO0z6R",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setOpenModal(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setOpenModal(false);
        }
      );
  };
  return (
    <section className="contact-section bg-no-repeat relative bg-[length:970px_984px]">
      <img src={Shadow} className="absolute left-[10%] z-[1]" alt="" />
      <div className="w-full max-w-[1100px] mx-auto flex justify-between items-center pb-52 pt-12">
        <div className="flex flex-col justify-center z-[2]">
          <h2 className="text-customBlue text-[40px] leading-[47px]  font-semibold w-full max-w-4xl mb-5">
            {t("contact_us_for_consultation1")}
            <br /> {t("contact_us_for_consultation2")}
          </h2>
          <p className="text-customGray text-xl w-full max-w-3xl mb-5 font-medium">
            {t("consultation_description")}
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-y-3"
          >
            <input
              name="user_email"
              type="text"
              className="border-2 text-gray-600 text-base rounded-md py-3 pl-3 w-full max-w-md outline-customLightBlue"
              placeholder="Email"
              required
            />
            <input
              name="user_name"
              type="text"
              className="border-2 text-gray-600 text-base rounded-md py-3 pl-3 w-full max-w-md outline-customLightBlue"
              placeholder={t("full_name")}
              required
            />
            <select
              defaultValue="1"
              className="border-2 text-gray-600 text-base rounded-md py-3 pl-3 w-full max-w-md outline-customLightBlue"
              name="services"
            >
              <option disabled value="1">
                {t("select_service")}
              </option>
              <option value="lubricants">{t("products.lubricants")}</option>
              <option value="petroleum-products">
                {t("products.petroleum_products")}
              </option>
              <option value="textile">{t("products.textile_products")}</option>
              <option value="packaging-materials">
                {t("products.packaging_materials")}
              </option>
              <option value="consulting-services">
                {t("consulting_service")}
              </option>
            </select>
            <button
              className=" w-full max-w-md rounded-md py-3 text-xl bg-customLightBlue text-white"
              type="submit"
              value="Send"
            >
              {t("get_consultation")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
