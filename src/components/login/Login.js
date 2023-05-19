import React, { useState, useEffect } from "react";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { postLogin } from "../store/action/AuthAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginErrors, token } = useSelector((state) => state.AuthReducer);
  const [user, setUser] = useState({
    login_id: "",
    login_password: "",
    ip_address: "124.41.211.80",
  });

  const handleInputs = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const userLogin = (e) => {
    e.preventDefault();
    if (!user.login_id && !user.login_password) {
      toast.error("Please fill up all fields.");
      return;
    }
    if (!user.login_id) {
      toast.error("Please enter user id.");
      return;
    }
    if (!user.login_password) {
      toast.error("Please enter password.");
      return;
    }
    dispatch(postLogin(user));
    // console.log('logged in')
  };
  const tokens = localStorage.getItem("myToken");
  useEffect(() => {
    if (tokens) {
      navigate("/dashboard");
      console.log(tokens, "token from login form");
      toast.success("Logged successfully");
      return;
    }
  }, [loginErrors, tokens]);
  //   console.log(user);
  return (
    <div>
      <ToastContainer />
      <div className="login_page">
        <div className="col-md-6 offset-md-3 form">
          <form onSubmit={userLogin}>
            <div className="text_field mb-4">
              <label htmlFor="">Login Id</label>
              <br />
              <input
                type="text"
                name="login_id"
                placeholder="Enter Your login id"
                value={user.login_id}
                onChange={handleInputs}
              />
            </div>
            <div className="text_field mb-3">
              <label htmlFor="">Password</label>
              <br />
              <input
                type="password"
                name="login_password"
                placeholder="Enter your password"
                onChange={handleInputs}
                value={user.login_password}
              />
            </div>
            <div
              className="button
                pt-2"
            >
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
