import { useDispatch } from "react-redux";
import PrimaryButton from "../ui/PrimaryButton";
import { addToCart } from "../store/cart-slice";
import { MdDelete } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

export default function CartComponent({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded-lg md:w-[400px] shadow-xl p-4 w-full hover:shadow-2xl transition-opacity font-serif flex justify-evenly items-center gap-x-5">
      <img
        src={product.imageURL}
        alt={product.name}
        className="w-20 h-20 object-fit rounded-lg"
      />
      <div>
        <div className="flex flex-col gap-y-2 justify-center items-center">
          <h2 className="text-lg font-base">{product.name}</h2>
          <p className="text-lg font-base">
            {product.price} {product.currency}
          </p>
          <p className="text-gray-600 font-thin">
            Quantity: {product.quantity}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <CiCirclePlus className="cursor-pointer" />
        <CiCircleMinus className="cursor-pointer" />
        <MdDelete className="cursor-pointer hover:text-red-500" size={20} />
      </div>
    </div>
  );
}
