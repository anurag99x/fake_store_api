import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return loading ? (
    <h1>...loading</h1>
  ) : (
    <div>
      {products.map((product) => {
        return (
          <div>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export { Products };
