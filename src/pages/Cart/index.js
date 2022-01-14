import { useEffect, useState } from "react";
import axios from "axios";
import Nav2 from "./../../components/Nav2";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const token = localStorage.token;

  const getCart = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios.get("/user/userCart", config).then((response) => {
      setCart(response.data.products);
    });
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <Nav2 />
      <div>
        <fieldset>
          {cart.map((product) => (
            <>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="productImage"
              ></img>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button>BUY</button>
            </>
          ))}
        </fieldset>
      </div>
    </>
  );
}
