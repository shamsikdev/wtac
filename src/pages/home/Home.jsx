import { Link } from "react-router-dom";
import IntroImg1 from "../../assets/intro-img1.png";
import IntroImg2 from "../../assets/intro-img2.png";
import IntroImg3 from "../../assets/intro-img3.png";
import IntroImg4 from "../../assets/intro-img4.png";
import Icon from "../../assets/pushpin.svg";
import AboutImg from "../../assets/about-img.png";
const Home = () => {
  return (
    <>
      <section className="relative">
        <div className="w-full max-w-[1100px] mx-auto flex justify-between items-center py-44">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl text-customBlue font-extrabold mb-6">
              World Trade and Consult LLC
            </h2>
            <p className="text-customGray text-xl w-full max-w-[600px] mb-12">
              Торговая компания, основанная в 2023 году и специализирующаяся на
              оптовой торговле смазочными маслами, нефтепродуктами, текстильной
              продукцией, цветными металлами, кабельно-проводниковой продукцией,
              продуктами из пластмасса и упаковочными материалами.
            </p>
            <Link className="bg-customLightBlue text-white text-xl py-4 px-7 rounded-md w-full max-w-56">
              Связаться с нами
            </Link>
          </div>
          <div className="parent absolute right-[10%] -top-[15%] ">
            <img
              src={IntroImg1}
              alt=""
              className="w-72 h-72 rotate-45 top-20 relative  rounded-3xl  object-cover div1 -z-50"
            />
            <img
              src={IntroImg2}
              alt=""
              className="w-72 h-72 rotate-45 left-20 relative  rounded-3xl object-cover div2"
            />
            <img
              src={IntroImg3}
              alt=""
              className="w-72 h-72 rotate-45 relative left-40 -top-20  rounded-3xl object-cover z-50 div3"
            />
            <img
              src={IntroImg4}
              alt=""
              className="w-72 h-72 rotate-45  relative -top-20 rounded-3xl object-cover div4 z-10"
            />
          </div>
        </div>
      </section>
      <section className="bg-customSkyBlue">
        <div className="w-full max-w-[1100px] mx-auto pt-24 pb-12">
          <h2 className="text-4xl text-customBlue font-extrabold mb-6">
            О нас
          </h2>
          <div className="flex justify-between">
            <div className="flex flex-col justify-center">
              <p className="text-customGray text-xl w-full max-w-[555px] mb-6">
                Мы стремимся к лидерству, предлагая высококачественную продукцию
                и надежные, инновационные решения для поддержки устойчивого
                роста наших клиентов
              </p>
              <p className="text-customGray text-xl w-full max-w-[555px] mb-3">
                Наши товары пользуются высоким спросом как на внутреннем, так и
                на внешнем рынке. Мы экспортируем в Казахстан, Кыргызстан,
                Таджикистан и Италию.
              </p>
              <p className="text-customGray text-xl w-full max-w-[555px]">
                Мы стремимся предлагать индивидуальные решения по экспорту,
                гарантируя, что мы можем удовлетворить ваши конкретные
                требования на взаимовыгодных условиях. Производственный процесс
                проходит строгий контроль качества в полном соответствии с
                требованиями ГОСТ.
              </p>
            </div>
            <article className="py-3 px-5 rounded-xl bg-white relative">
              <img src={Icon} alt="" className="absolute -right-6 -top-3" />
              <h3 className="text-customBlue text-2xl font-semibold mb-6">
                Наша миссия
              </h3>
              <p className="text-customGray text-xl w-full max-w-[420px] mb-8">
                С момента нашего основания в 2023 году мы установили себя как
                значимый игрок в своей отрасли благодаря высокому качеству
                продукции и надежности поставок.
              </p>
              <p className="text-customGray text-xl w-full max-w-[420px]">
                Стремясь к постоянному росту, мы активно стремимся расширить
                ассортимент нашей продукции и укрепить партнерские отношения как
                с потенциальными, так и с текущими клиентами.
              </p>
            </article>
          </div>
        </div>
        <img src={AboutImg} className="w-full object-cover" alt="" />
      </section>
    </>
  );
};

export default Home;
