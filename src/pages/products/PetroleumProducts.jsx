// import { ArrowRight, CheckCircle } from "lucide-react";
import { BiCheckCircle } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
export default function Home() {
  return (
    <div className="w-full max-w-[1100px] mx-auto pt-44">
      <h2 className="text-4xl text-center text-customBlue font-extrabold mb-6">
        ООО Riders Trading Pro
      </h2>
      <p className="text-customGray text-xl text-center mb-4">
        Надежный поставщик нефтепродуктов с 2009 года
      </p>
      <p className="mb-4 text-customGray w-4/5 text-xl">
        <b>ООО Riders Trading Pro</b> - динамично развивающаяся компания,
        работающая на рынке СНГ с 2009 года. Мы специализируемся на оптовых
        поставках нефтепродуктов высочайшего качества, включая:
      </p>
      <ul className="list-disc list-inside text-xl text-customGray mb-4">
        <li>Бензин</li>
        <li>Дизельное топливо</li>
        <li>Индустриальные базовые масла</li>
      </ul>

      <section className="mb-12">
        <h3 className="text-2xl text-customBlue font-black mb-10">
          Наши преимущества
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Широкий ассортимент: в нашем ассортименте вы найдете все необходимые нефтепродукты для вашего бизнеса",
            "Безупречное качество: мы предлагаем только сертифицированную продукцию, прошедшую тщательный контроль качества",
            "Выгодные цены: мы предоставляем нашим клиентам конкурентные цены на всю нашу продукцию",
            "Индивидуальный подход: мы всегда готовы подобрать оптимальные решения для каждого клиента, учитывая его потребности и бюджет",
          ].map((advantage, index) => (
            <div
              key={index}
              className="flex items-start shadow-md w-full p-4 rounded-md bg-white"
            >
              <p className="text-xl text-customGray">{advantage}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl text-customBlue font-black mb-4">
          Высокий уровень сервиса
        </h3>
        <p className="text-customGray text-xl mb-4">
          Мы предлагаем нашим клиентам высококлассный сервис, включающий:
        </p>
        <ul className="list-disc list-inside text-xl text-customGray mb-4">
          <li>Профессиональную консультацию</li>
          <li>Быструю доставку</li>
          <li>Постоянную техническую поддержку</li>
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl text-customBlue font-black mb-4">
          Базовые масла для вашего производства
        </h3>
        <p className="text-customGray text-xl mb-4 w-4/5">
          ООО Riders Trading Pro предлагает широкий ассортимент базовых масел,
          которые могут быть использованы в вашем производстве.
        </p>
        <h4 className="text-2xl text-customBlue font-black mb-2">
          Наши базовые масла:
        </h4>
        <ul className="list-disc list-inside text-customGray text-xl">
          <li className="mb-2">
            Соответствуют всем требованиям и стандартам отрасли
          </li>
          <li className="mb-2">
            Обеспечивают надежную и эффективную работу вашего оборудования
          </li>
          <li className="mb-2">
            Могут быть использованы для получения товарных масел путем
            добавления присадок
          </li>
        </ul>
        <h4 className="text-2xl text-customBlue font-black mb-4">
          С помощью наших базовых масел вы можете:
        </h4>
        <ul className="list-disc list-inside text-customGray text-xl mb-10">
          <li>Снизить затраты на смазочные материалы</li>
          <li>Повысить производительность вашего оборудования</li>
          <li>Увеличить срок службы вашего оборудования</li>
        </ul>
      </section>
    </div>
  );
}
