export default function CardComponent({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-64">
      <img
        src={product.imageURL}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600">{product.type}</p>
        <p className="text-gray-600">
          {product.color} {product.gender}
        </p>
        <p className="text-lg font-bold">
          {product.price} {product.currency}
        </p>
        <p className="text-gray-600">Quantity: {product.quantity}</p>
      </div>
    </div>
  );
}
