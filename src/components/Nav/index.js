import "./style.css";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiFillHome,
} from "react-icons/ai";

export default function Nav() {

  const token = localStorage.getItem("token")

  return (
    <navbar>
      <div className="navbar">
        <div>
          <ul className="navbar2">
          {token ? (
              <Link to="/profile">
                <li>
                  <AiOutlineUser className="user" />
                </li>
              </Link>
            ) : (
              <Link to="/login">
                <li>
                  <AiOutlineUser className="user" />
                </li>
              </Link>
            )}
            <Link to="/cart">
              <li>
                <AiOutlineShoppingCart className="cart" />
              </li>
            </Link>
            <Link to="/">
              <li>
                <AiFillHome className="home" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </navbar>
  );
}
