import React, { useState } from "react";

export function PasswordReset() {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
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

    if (!formData.emailOrPhone.trim()) {
      validationErrors.emailOrPhone = "Email or phone number is required";
    } else if (
      !/^\d{10}$/.test(formData.emailOrPhone) &&
      !/\S+@\S+\.\S+/.test(formData.emailOrPhone)
    ) {
      validationErrors.emailOrPhone =
        "Enter a valid email address or phone number";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      validationErrors.password = "Password should be at least 8 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Password reset request submitted successfully!");
      setFormData({
        emailOrPhone: "",
        password: "",
        confirmPassword: "",
      });
      window.location.href = "/login";
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
          {errors.emailOrPhone && <span>{errors.emailOrPhone}</span>}
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter New Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}
