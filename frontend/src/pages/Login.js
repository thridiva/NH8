import React from "react";
// import "./login.css";
import { Link, useNavigate } from "react-router-dom";

function validateLogin() {
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const passwordPattern = /^[a-zA-Z0-9@.!@#$%^&*;:/]{8,}$/;

  const testMailOrPhone = (emailOrPhone) => {
    if (!emailOrPhone) {
      return false;
    } else {
      if (/^\d{10}$/.test(emailOrPhone)) {
        return true;
      } else {
        if (!/\S+@\S+\.(in|com|net)$/.test(emailOrPhone)) {
          return false;
        }
        return true;
      }
    }
  };

  if (passwordPattern.test(password) && testMailOrPhone(phone)) {
    document.getElementById("login-message").innerHTML =
      "Successfully Logged In";
    return true;
  } else {
    document.getElementById("login-message").innerHTML =
      "Invalid Phone Number/Email or Password";
    return false;
  }
}

export function Login() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      navigate("/");
    }
  };

  const preventCopyPaste = (e) => {
    e.preventDefault();
  };

  const handleSignUpNavigation = () => {
    navigate("/create-account");
  };

  return (
    <div
      className="login-wrapper"
      style={{
        background: `url('${process.env.PUBLIC_URL}/imgs/login-img.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="login-container">
        <center>
          <h2>Login</h2>
        </center>
        <form onSubmit={handleLogin}>
          <label className="login-label" htmlFor="phone">
            Email Or Phone Number:
          </label>
          <input
            className="login-input"
            id="phone"
            type="text"
            placeholder="Enter Email Or Phone Number"
          />
          <label className="login-label" htmlFor="password">
            Password:
          </label>
          <input
            className="login-input"
            id="password"
            type="password"
            onPaste={preventCopyPaste}
            onCopy={preventCopyPaste}
            onCut={preventCopyPaste}
            placeholder="Enter Password"
          />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <p id="login-message" className="login-message"></p>
        <p className="create-account">
          Don't have an account?{" "}
          <span
            onClick={handleSignUpNavigation}
            className="create-account-link"
          >
            Create an account
          </span>
        </p>
        <p className="forgot-password" style={{ textAlign: "center" }}>
          <Link to="/forget-password">Forgot your password?</Link>
        </p>
      </div>
    </div>
  );
}
