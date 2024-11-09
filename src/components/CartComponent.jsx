import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  reduceProductQuantityFromCart,
  removeFromCart,
} from "../store/cart-slice";
import { MdDelete } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import PrimaryButton from "../ui/PrimaryButton";
import {
  increaseProductQuantity,
  increaseProductQuantityByValue,
  reduceProductQuantity,
} from "../store/product-slice";

export default function CartComponent({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartSlice);
  const { products, originalproducts } = useSelector(
    (state) => state.productSlice
  );

  const productFromCartQuantity = cart.find((item) => item.id === product.id)[
    "quantity"
  ];
  const originalProductQuantity = originalproducts.find(
    (item) => item.id === product.id
  )["quantity"];

  const disableAddMoreQuantity =
    originalProductQuantity <= productFromCartQuantity;
  const disableReduceCart = productFromCartQuantity <= 1;

  return (
    <div className="bg-white rounded-lg md:w-[400px] shadow-xl p-4 w-full hover:shadow-2xl transition-opacity font-serif flex justify-evenly items-center gap-x-5">
      <img
        src={product.imageURL}
        alt={product.name}
        className="w-20 h-20 rounded-lg object-fit"
      />
      <div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <h2 className="text-lg font-base">{product.name}</h2>
          <p className="text-lg font-base">
            {product.price} {product.currency}
          </p>
          <p className="font-thin text-gray-600">
            Quantity: {product.quantity}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-3 justify-evenly">
        <PrimaryButton
          className={twMerge(
            "",
            disableAddMoreQuantity && "cursor-not-allowed opacity-50"
          )}
          labelText={"+"}
          onClick={() => {
            if (!disableAddMoreQuantity) {
              dispatch(addToCart(product));
              dispatch(reduceProductQuantity(product));
            }
          }}
          disabled={disableAddMoreQuantity}
        />
        <MdDelete
          className="cursor-pointer hover:text-red-500"
          size={20}
          onClick={() => {
            dispatch(removeFromCart(product));
            dispatch(
              increaseProductQuantityByValue({
                id: product.id,
                value: productFromCartQuantity,
              })
            );
          }}
        />
        <PrimaryButton
          className={twMerge(
            "bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 hover:cursor-pointer transition-all",
            disableReduceCart && "cursor-not-allowed opacity-50"
          )}
          labelText={"-"}
          onClick={() => {
            if (!disableReduceCart) {
              dispatch(reduceProductQuantityFromCart(product));
              dispatch(increaseProductQuantity(product));
            }
          }}
          disabled={disableReduceCart}
        />
      </div>
    </div>
  );
}
