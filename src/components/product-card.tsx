// import { FaExpandAlt, FaPlus } from "react-icons/fa";
// import { server } from "../redux/store";
// import { CartItem } from "../types/types";
// type ProductsProps = {
//   productId: string;
//   photo: string;
//   name: string;
//   price: number;
//   stock: number;
//   handler: () => void;
// };

// const ProductCard = ({
//   productId,
//   price,
//   name,
//   photo,
//   stock,
//   handler: (cartItem: CartItem) => string | undefined,
// }: ProductsProps) => {
//   return (
//     // uploads\ead2a88c-e2ab-4f06-964d-89c2a683dce6.jpg
//     <div className="product-card">
//       <img src={`${server}/${photo}`} alt={name} />
//       <p>{name}</p>
//       <span>$ {price}</span>
//       <div>
//         <button onClick={() => handler()}>
//           <FaPlus />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import { FaExpandAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartItem } from "../types/types";
import { server } from "../redux/store";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
};

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  handler,
}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={`${server}/${photo}`} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button
          onClick={() =>
            handler({
              productId,
              price,
              name,
              photo,
              stock,
              quantity: 1,
            })
          }
        >
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
