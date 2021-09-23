import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductsPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return loading ? (
    <h1>...loading</h1>
  ) : (
    <div>
      <h3 style={{ textAlign: "center" }}>{product.category}</h3>
      <h5 style={{ textAlign: "center" }}>{product.title}</h5>
      <img
        style={{
          display: "flex",
          alignItems: "center",
          width: "10%",
          height: "150px",
          margin: "auto",
          border: "1px solid black",
          padding: "10px",
        }}
        src={product.image}
        alt="img"
      />
      <p
        style={{
          textAlign: "center",
          fontSize: "15px",
          fontFamily: "sans-serif",
          width: "50%",
          marginLeft: "23%",
        }}
      >
        {product.description}
      </p>
    </div>
  );
};

export { ProductsPage };
