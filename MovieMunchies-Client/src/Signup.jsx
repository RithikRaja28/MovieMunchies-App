import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router";
import axios from "axios";
import MovingComponent from "react-moving-text";
const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://movie-munchies-admin-ten.vercel.app/", { email, password })
      .then((result) => {
        console.log(result);
        navigate("/MM-login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="container-fluid text-light">
        <MovingComponent
          type="fadeInFromTop"
          duration="2000ms"
          delay="4.1s"
          direction="normal"
          timing="ease-in-out"
          iteration="1"
          fillMode="none"
        >
          
          <div className="row  p-4">
            <hr />
            <h3 className="text-center">Registeration - Admin Portal 🍿</h3>
            <hr />
            <div className="col d-flex justify-content-center align-items-center m-5 p-5">
              <form onSubmit={handleSubmit}>
                <div className="text-center">
                  <div className="h4">REGISTER</div>
                </div>

                <div className="form-group m-3">
                  <label for="exampleInputEmail1">Email address</label>

                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <small id="emailHelp" className="form-text text-light">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group m-3">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="text-center mt-4">
                  <button type="submit" class="btn btn-danger ps-5 pe-5">
                    Register
                  </button>
                </div>
                <div>
                  <p className="text-center mt-3">Already have an account ?</p>
                  <div className="text-center mt-3 ms-3">
                    <button
                      onClick={() => navigate("/MM-login")}
                      type="submit"
                      className="btn btn-success "
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </MovingComponent>
      </div>
    </div>
  );
};

export default Signup;
