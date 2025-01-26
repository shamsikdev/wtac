// react
import { useRef } from "react";
import emailjs from "@emailjs/browser";
// images
import Shadow from "../../assets/shadow.png";
const Contact = ({ setOpenModal }) => {
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
            Свяжитесь с нами <br /> и получите полную консультацию
          </h2>
          <p className="text-customGray text-xl w-full max-w-3xl mb-5 font-medium">
            Наша команда специалистов готова оказать полную техническую
            поддержку и консультацию по выбору и применению смазочных
            материалов, а также услуги по техническому сопровождению
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
              placeholder="Ф.И.О"
              required
            />
            <select
              className="border-2 text-gray-600 text-base rounded-md py-3 pl-3 w-full max-w-md outline-customLightBlue"
              name="services"
            >
              <option selected disabled value="1">
                Выберите услугу
              </option>
              <option value="lubricants">Смазочные материалы</option>
              <option value="petroleum-products">Нефтепродукты</option>
              <option value="textile">Текстильная продукция</option>
              <option value="packaging-materials">Упаковачные материалы</option>
              <option value="colored-metals">Цветные металлы</option>
              <option value="electric-cables">
                Кабельно-проводниковая продукция
              </option>
              <option value="consulting-services">Консалтинговые услуги</option>
            </select>
            <button
              className=" w-full max-w-md rounded-md py-3 text-xl bg-customLightBlue text-white"
              type="submit"
              value="Send"
            >
              Получить консультацию
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
