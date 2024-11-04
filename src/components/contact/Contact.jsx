import "./Contact.css";
import Shadow from "../../assets/shadow.png";
const Contact = () => {
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
          <form action="" className="flex flex-col gap-y-3">
            <input
              type="text"
              className="border-2 text-gray-600 text-base rounded-md py-3 pl-3 w-full max-w-md outline-customLightBlue"
              placeholder="Email"
              required
            />
            <input
              type="text"
              className="border-2 text-gray-600 text-base rounded-md py-3 pl-3 w-full max-w-md outline-customLightBlue"
              placeholder="Ф.И.О"
              required
            />
            <button
              className=" w-full max-w-md rounded-md py-3 text-xl bg-customLightBlue text-white"
              type="submit"
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
