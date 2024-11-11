import { Link } from "react-router-dom";
import CartCar from "../../assets/cart-car.svg";
import { GoArrowLeft } from "react-icons/go";
const Cart = () => {
  return (
    <section>
      <div className="w-full max-w-[1100px] mx-auto flex flex-col  pt-44">
        <Link to="/" className="flex items-center mb-10">
          <GoArrowLeft className="mr-3 text-4xl  text-customLightBlue" />
          <span className="text-4xl font-black text-customLightBlue">
            Корзина
          </span>
        </Link>
        <div className="flex justify-center items-center flex-col">
          <img src={CartCar} alt="" className="mb-7" />
          <p className="text-3xl font-semibold text-customLightBlue">
            Ваша корзина пуста
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cart;
