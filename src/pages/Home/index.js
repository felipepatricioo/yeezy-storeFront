import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./../../components/Card";
import "./style.css";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import Nav from './../../components/Nav';

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios.get("/products").then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <>
      <div>
      
        <div className="banner">
          <div className="banner2">
        
          <a href="https://www.adidas.com/us/yeezy" target="_blank" rel="noreferrer">
            <img
              src="https://images.squarespace-cdn.com/content/v1/593243951b10e34b59a475e9/1497422777377-Z9941U90T2XKQJYPD3VK/yeezy_logo%28rotate%29.png?format=1500w"
              alt="yeezy logo"
              className="yeezy-logo"
            ></img>
          </a>
          <Nav/>
          </div>
          <div className="bannerText">
            <h1>Scroll down to see our products</h1>
            <AiOutlineDown />
          </div>
          
        </div>
      </div>
      <div id="cardDiv">
        {products.map((product) => (
          <Link to={`/product/${product.id}`}>
            <Card
              key={product.id}
              name={product.name}
              image={product.imageUrl}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
