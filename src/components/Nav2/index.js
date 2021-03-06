import "./style.css";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiFillHome,
} from "react-icons/ai";

export default function Nav2() {
  const token = localStorage.getItem("token");
  return (
    <navbar>
      <div className="navbar">
        <div>
          <ul className="navbar2">
            {token ? (
              <Link to="/profile">
                <li>
                  <AiOutlineUser className="user2" />
                </li>
              </Link>
            ) : (
              <Link to="/login">
                <li>
                  <AiOutlineUser className="user2" />
                </li>
              </Link>
            )}
            <Link to="/cart">
              <li>
                <AiOutlineShoppingCart className="cart2" />
              </li>
            </Link>
            <Link to="/">
              <li>
                <AiFillHome className="home2" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </navbar>
  );
}
