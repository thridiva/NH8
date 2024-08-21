import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { PopupMessage } from "./../components/PopupMessage";

export function CreateAccount() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [popupSuccess, setPopupSuccess] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const initialFormData = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  };

  const preventCopyPaste = (e) => {
    e.preventDefault();
  };

  const [formData, setFormData] = useState(initialFormData);
  const [data, setData] = useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.userName.trim()) {
      validationErrors.userName = "userName is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.(in|com|net)$/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (
      formData.password.length < 8 &&
      !/^[a-zA-Z0-9@.!@#$%^&*;:/]{8,}$/.test(formData.password)
    ) {
      validationErrors.password = "Password should be at least 8 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.phoneNumber.trim()) {
      validationErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = "Phone number must be 10 digits";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const formDataToSend = { ...formData };
      setData(formDataToSend);
    }
  };

  useEffect(() => {
    if (!data) return;

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:5000/api/v1/users/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        if (response.data.status === "success") {
          console.log("Create Account Successful");
          setPopupSuccess(true);
          setShowPopup(true);

          setTimeout(() => {
            navigate("/");
            setShowPopup(false);
          }, 2000);
        }
      } catch (error) {
        if (error?.response?.data?.message) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Something went wrong, Try again!!");
          window.location.reload();
        }
        setPopupSuccess(false);
        setShowPopup(true);

        setTimeout(() => {
          setShowPopup(false);
        }, 6000);
      }
    }

    makeRequest();
  }, [data, navigate]);

  return (
    <>
      <div
        className="page-background"
        style={{
          background: `url('${process.env.PUBLIC_URL}/imgs/create-account.jpg')`,
        }}
      >
        <div className="form-wrapper">
          <div className="form-container-ca">
            <form onSubmit={handleSubmit}>
              <center>
                <h2>Create Account</h2>
              </center>
              <div className="form-group">
                <label>User Name:</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="userName"
                  autoComplete="off"
                  onChange={handleChange}
                  value={formData.userName}
                />
                {errors.userName && (
                  <span className="error-message">{errors.userName}</span>
                )}
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  autoComplete="off"
                  onChange={handleChange}
                  value={formData.email}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="******"
                  onChange={handleChange}
                  onPaste={preventCopyPaste}
                  onCopy={preventCopyPaste}
                  onCut={preventCopyPaste}
                  value={formData.password}
                />
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>
              <div className="form-group">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="******"
                  onChange={handleChange}
                  onPaste={preventCopyPaste}
                  onCopy={preventCopyPaste}
                  onCut={preventCopyPaste}
                  value={formData.confirmPassword}
                />
                {errors.confirmPassword && (
                  <span className="error-message">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="1234567890"
                  autoComplete="off"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                />
                {errors.phoneNumber && (
                  <span className="error-message">{errors.phoneNumber}</span>
                )}
              </div>
              <p align="center">
                <button type="submit">Submit</button>
              </p>
              <p align="center" style={{ margin: "10px 0", fontSize: "14px" }}>
                Already had an account?{" "}
                <Link to="/login" style={{ color: "blue", fontSize: "20px" }}>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {showPopup && (
        <PopupMessage
          message={
            popupSuccess ? "Account created successfully!" : errorMessage
          }
          onClose={() => setShowPopup(false)}
          success={popupSuccess}
        />
      )}
    </>
  );
}
