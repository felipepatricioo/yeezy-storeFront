import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav2 from "./../../components/Nav2";

export default function Register() {
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [passwordConfirm, setPassConf] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const createUser = {
      name: name,
      nickname: nickname,
      email: email,
      birthdate: birthdate,
      imageUrl: imageUrl,
      password: password,
      passwordConfirmation: passwordConfirm,
    };

    await axios.post("/user/register", createUser).then((response) => {
      const token = response.data.token;
      alert(response.data.message);
      localStorage.setItem("token", token);
    });

    navigate("/");
  };

  return (
    <>
      <Nav2 />
      <div className="mainLogin">
        <div className="containerForm">
          <form className="" onSubmit={handleSubmit}>
            <fieldset>
              <h4>Register a new account!</h4>
              <div className="">
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>
              <div className="">
                <input
                  type="text"
                  id="nickname"
                  className="form-control"
                  placeholder="Nickname"
                  onChange={(event) => setNickname(event.target.value)}
                  required
                />
              </div>
              <div className="">
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="E-mail"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div className="">
                <input
                  type="date"
                  id="birthdate"
                  className="form-control"
                  placeholder="Birthdate"
                  onChange={(event) => setBirthdate(event.target.value)}
                  required
                />
              </div>
              <div className="">
                <input
                  type="text"
                  id="ImageUrl"
                  className="form-control"
                  placeholder="Profile Pic Link"
                  onChange={(event) => setImageUrl(event.target.value)}
                />
              </div>

              <div className="">
                <input
                  type="text"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                <div className="">
                  <input
                    type="text"
                    id="passwordConfirm"
                    className="form-control"
                    placeholder="Password Confirmation"
                    onChange={(event) => setPassConf(event.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="buttonForm">
                  REGISTER
                </button>
                <div>
                  <Link to="/update">Forgot your password?</Link>
                  <br></br>
                  <p>
                    Are you already registered?
                    <Link to="/login">LOGIN HERE</Link>
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
