import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
import { useLatestProductsQuery } from "../redux/api/productAPI";
import toast from "react-hot-toast";
import { Skeleton } from "../components/loader";
const home = () => {
  const { data, isError, isLoading } = useLatestProductsQuery("");
  const addToCartHandler = () => {};

  if (isError) toast.error("Cannot Fetch the Products");
  return (
    <>
      <div className="home">
        <div></div>
        <h1>
          Latest Products
          <Link to={"/search"} className="findmore">
            More
          </Link>
        </h1>
        <main>
          {isLoading ? (
            <>
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} style={{ height: "25rem" }}>
                  <Skeleton width="18.75rem" length={1} height="20rem" />
                  <Skeleton width="18.75rem" length={2} height="1.95rem" />
                </div>
              ))}
            </>
          ) : (
            data?.products.map((i) => (
              <ProductCard
                key={i._id}
                productId={i._id}
                name={i.name}
                price={i.price}
                stock={i.stock}
                handler={addToCartHandler}
                photo={i.photo}
              />
            ))
          )}
        </main>
      </div>
    </>
  );
};

export default home;
