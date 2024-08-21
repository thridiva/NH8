import React, { useState } from "react";

export function ForgetPassword() {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
  });
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
    const emailOrPhone = formData.emailOrPhone.trim();

    if (!emailOrPhone) {
      validationErrors.emailOrPhone = "Email or phone number is required";
    } else {
      if (/^\d{10}$/.test(emailOrPhone)) {
        console.log("Phone Number");
      } else {
        if (!/\S+@\S+\.(in|com|net)$/.test(emailOrPhone)) {
          validationErrors.emailOrPhone =
            "Enter a valid phone number or email address with .in, .com, or .net domain";
        }
      }
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0 && formData.emailOrPhone) {
      alert("Password reset link sent successfully!");
      setFormData({
        emailOrPhone: "",
      });
      window.location.href = "/";
    }
  };

  return (
    <div
      className="password-reset-container"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/imgs/forget-password.jpg')`,
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email or Phone Number:</label>
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Enter Email or Phone Number"
            value={formData.emailOrPhone}
            onChange={handleChange}
          />
          {errors.emailOrPhone && <p>{errors.emailOrPhone}</p>}
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}
