import Nav2 from "./../../components/Nav2";
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Product() {

    const [product, setProduct] = useState([]);

    const { id } = useParams();

    const getProduct = async () => {
        await axios.get(`/products/${id}`)
        .then((response) => {
            setProduct(response.data)
        })
    }

    useEffect(() => {
        getProduct()
    }, []);
    

  const cartAdd = async() => {
    const token = localStorage.token;
    const config = {
      headers: { Authorization: `Bearer ${token}`}
    }

    await axios.patch(`/user/addProduct/${id}`, '', config)
  }
    
  return (
    <>
      <Nav2/>
      <div className="">
        <div className="">
            <fieldset>
              <div >
                  <img src={product.imageUrl} alt={product.name} className="productImage"></img>
              </div>
              <div>
                  <ul>
                      <li>
                          {product.name}
                      </li>
                      <li>
                          $ {product.price}.00
                      </li>
                      <li>
                          <button onClick={cartAdd}>
                                ADD TO CART
                          </button>
                      </li>
                  </ul>
              </div>
            </fieldset>
        </div>
      </div>
    </>
  );
}
