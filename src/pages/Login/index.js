import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import './style.css';
import Nav2 from './../../components/Nav2';

export default function Login() {

  const navigate = new useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    
    const login = {
      email: email,
      password: password
    }

    await axios.post('/auth/login', login)
    .then(response => {
      localStorage.setItem('token', response.data.token)
    })
    // .then( () => {
    //   const token = localStorage.getItem("token")
    //   if (token) {
    //     alert("LOGGED INTO THE SYSTEM")
    //   } else {
    //     alert("AN ERROR HAS OCURRED, TRY AGAIN LATER!")
    //   }
    // }
    // )
    navigate("/")
  }

  
  return (
    <>
    <Nav2/>
    <div className="mainLogin">
      <h2 className="loginTitle">Login</h2>
      <span className="loginSpan">
        Type your e-mail and password to access your account.
      </span>
      <div className="containerForm">
        <form className="form" onSubmit={handleSubmit}>
          <fieldset>
            <h4>Account Logon</h4>
            <div className="">
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="E-mail"
                onChange={event => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="">
              <input
                type="text"
                id="password"
                className="form-control"
                placeholder="Password"
                onChange={event => setPassword(event.target.value)}
                required
              />
              <button type="submit" className="buttonForm">
                ACCESS
              </button>
              <div>
                <Link to="/update">Forgot your password?</Link>
                <br></br>
                <p>
                  Don't have an account?
                  <Link to="/register">REGISTER</Link>
                </p>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
    </>
  );
}
