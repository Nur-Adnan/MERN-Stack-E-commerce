import { FaExpandAlt, FaPlus } from "react-icons/fa";
import { server } from "../redux/store";
type ProductsProps = {
  productId: string;
  photos: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const ProductCard = ({
  productId,
  price,
  name,
  photos,
  stock,
  handler,
}: ProductsProps) => {
  return (
    // uploads\ead2a88c-e2ab-4f06-964d-89c2a683dce6.jpg
    <div className="product-card">
      <img src={`${server}/${photos}`} alt={name} />
      <p>{name}</p>
      <span>$ {price}</span>
      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
