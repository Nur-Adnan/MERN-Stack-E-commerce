import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
const home = () => {
    const addToCartHandler = () => {

    }
  return (
    <>
        <div className="home">
            <div></div>
        <h1>Latest Products
            <Link to={"/search"} className="findmore">
                More
            </Link>
        </h1>
        <main>
            <ProductCard productId="adsada" name="Macbook" price={4545} stock={435} handler={addToCartHandler}
                photos="https://m.media-amazon.com/images/I/31ilq3hPhEL.jpg"
            />
        </main>
        </div>
    </>
  )
}

export default home
