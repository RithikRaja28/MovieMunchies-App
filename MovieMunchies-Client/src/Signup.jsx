import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://movie-munchies-admin-rithik-raja-ss-projects.vercel.app/",
        { email, password }
      )
      .then((result) => {
        console.log(result);
        navigate("/MM-login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="container-fluid text-light">
        <div className="row p-4">
          <h3 className="text-center">Register Admin Portal</h3>
          <div className="col border d-flex justify-content-center m-5 p-5">
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
                <small id="emailHelp" className="form-text text-muted">
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
            </form>
            <div className="col d-flex justify-content-center align-items-center">
              <p className="text-center mt-4">Already have an account ?</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
