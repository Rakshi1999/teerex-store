import { useDispatch } from "react-redux";
import PrimaryButton from "../ui/PrimaryButton";
import { addToCart } from "../store/cart-slice";
import { reduceProductQuantity, setProducts } from "../store/product-slice";

export default function CardComponent({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded-lg shadow-xl p-4 w-64 hover:shadow-2xl transition-opacity font-serif">
      <img
        src={product.imageURL}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-4 flex flex-col gap-y-4">
        <div>
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-lg font-base">
              {product.price} {product.currency}
            </p>
            <p className="text-gray-600 font-thin">
              Quantity Left: {product.quantity}
            </p>
          </div>
        </div>
        <PrimaryButton
          labelText="Add to Cart"
          className=""
          disabled={product.quantity <= 0}
          onClick={() => {
            dispatch(addToCart(product));
            dispatch(reduceProductQuantity(product));
          }}
        />
      </div>
    </div>
  );
}
