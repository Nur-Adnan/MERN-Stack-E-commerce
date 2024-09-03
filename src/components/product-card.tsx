import { FaExpandAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartItem } from "../types/types";
import { transformImage } from "../utils/features";

type ProductsProps = {
  productId: string;
  photos: {
    url: string;
    public_id: string;
  }[];
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
};

const ProductCard = ({
  productId,
  price,
  name,
  photos,
  stock,
  handler,
}: ProductsProps) => {
  const handleAddToCart = () => {
    const result = handler({
      productId,
      price,
      name,
      photo: photos[0]?.url || "",
      stock,
      quantity: 1,
    });

    if (result) {
      console.log(result);
    } else {
      console.error("Failed to add item to cart");
    }
  };

  return (
    <div className="product-card">
      <img src={transformImage(photos?.[0]?.url, 400)} alt={name} />
      <p>{name}</p>
      <span>${price}</span>

      <div>
        <button onClick={handleAddToCart}>
          <FaPlus />
        </button>

        <Link to={`/product/${productId}`}>
          <FaExpandAlt />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
