import { Link } from "react-router-dom";
import CartCar from "../../assets/cart-car.svg";
import { GoArrowLeft } from "react-icons/go";
const Cart = () => {
  return (
    <section>
      <div className="w-full max-w-[1100px] mx-auto flex flex-col sm:pt-44 pt-32 sm:px-0 px-6">
        <Link to="/" className="flex items-center mb-10">
          <GoArrowLeft className="mr-3 sm:text-4xl text-3xl  text-customLightBlue" />
          <span className="sm:text-4xl text-2xl font-black text-customLightBlue">
            Корзина
          </span>
        </Link>
        <div className="flex justify-center items-center flex-col">
          <img src={CartCar} alt="" className="mb-7 sm:w-[700px] w-60" />
          <p className="sm:text-3xl text-base font-semibold text-customLightBlue">
            Ваша корзина пуста
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cart;
