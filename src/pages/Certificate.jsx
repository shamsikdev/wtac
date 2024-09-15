import { Link } from "react-router-dom";
// images
import CertificateEn from "../assets/certificate-en.png";
import CertificateRu from "../assets/certificate-ru.png";
// icons
import { FaArrowLeft } from "react-icons/fa";
const Certificate = () => {
  return (
    <section className="bg-[#EEF8FC]">
      <div className="w-full max-w-[1100px] mx-auto py-10">
        <Link
          className="py-4 px-5 bg-customLightBlue w-full max-w-36 rounded-md mb-7 flex items-center"
          to="/"
        >
          <FaArrowLeft className="text-white mr-2" />
          <span className="text-xl text-white">Назад</span>
        </Link>
        <img src={CertificateEn} className="mb-3 mt-10 border-2" alt="" />
        <img src={CertificateRu} alt="" className="border-2" />
      </div>
    </section>
  );
};

export default Certificate;
