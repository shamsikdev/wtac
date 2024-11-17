import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <section className="flex justify-center items-center h-svh flex-col bg-customSkyBlue">
      <h1 className="text-customBlue text-5xl font-extrabold mb-10">
        Страница не найдена :(
      </h1>
      <Link className="text-customLightBlue text-2xl underline">
        Вернуться к сайту
      </Link>
    </section>
  );
};

export default PageNotFound;
