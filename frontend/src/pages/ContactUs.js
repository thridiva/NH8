import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { FAQ } from "../components/FAQ";

const branches = [
  { name: "Mumbai Branch", number: "1800-111-222" },
  { name: "Delhi Branch", number: "1800-123-456" },
  { name: "Hyderabad Branch", number: "1800-143-456" },
  { name: "Mumbai Branch", number: "1800-153-456" },
  { name: "Chennai Branch", number: "1800-173-456" },
  { name: "Madurai Branch", number: "1800-173-890" },
];

export function ContactUs() {
  return (
    <>
      <ContactDiv />
      <Footer />
    </>
  );
}

function ContactDiv() {
  return (
    <div className="contact-us-div">
      <ContactUsOverlay />
      <GetInTouch />
      <Locations />
      <FeedBackOrSuggestionsForm />
      <FAQ />
    </div>
  );
}

function ContactUsOverlay() {
  return (
    <>
      <div className="image-container-contact-us">
        <img
          className="contact-us-img"
          src="/imgs/contact-us-1.jpg"
          alt="contact-us-img"
        />
        <div className="overlay-cu"></div>
        <p className="text-cu">- Contact Us</p>
      </div>
    </>
  );
}

function GetInTouch() {
  return (
    <>
      <h1 className="contact-us-git">- GET IN TOUCH -</h1>
      <div className="contact-us-toll-free">
        <h2>
          Our Restaurant Reservation Desk is open around the clock. Feel free to
          call us anytime at our toll-free number listed below.
        </h2>
      </div>
    </>
  );
}

function Locations() {
  const data = [
    {
      name: "Hyderabad",
      address: "Telengana",
      phoneNum: "+919876543210",
      email: "nh8@gmail.com",
    },
    {
      name: "Hyderabad",
      address: "Telengana",
      phoneNum: "+919876543210",
      email: "nh8@gmail.com",
    },
    {
      name: "Hyderabad",
      address: "Telengana",
      phoneNum: "+919876543210",
      email: "nh8@gmail.com",
    },
    {
      name: "Hyderabad",
      address: "Telengana",
      phoneNum: "+919876543210",
      email: "nh8@gmail.com",
    },
    {
      name: "Hyderabad",
      address: "Telengana",
      phoneNum: "+919876543210",
      email: "nh8@gmail.com",
    },
    {
      name: "Hyderabad",
      address: "Telengana",
      phoneNum: "+919876543210",
      email: "nh8@gmail.com",
    },
    {
      name: "Hyderabad",
      address: "Telengana",
      phoneNum: "+919876543210",
      email: "nh8@gmail.com",
    },
    {
      name: "Hyderabad",
      address: "Telengana",
      phoneNum: "+919876543210",
      email: "nh8@gmail.com",
    },
  ];
  return (
    <>
      <div className="locations-contact-us">
        <h2>Our Locations:</h2>
        <div className="location-grid">
          {(() => {
            const rows = [];
            for (let i = 0; i < data.length; i += 2) {
              rows.push(
                <Location
                  key={i}
                  placeName={data[i].name}
                  address={data[i].address}
                  phoneNum={data[i].phoneNum}
                  email={data[i].email}
                />
              );
              rows.push(
                <Location
                  key={i + 1}
                  placeName={data[i + 1].name}
                  address={data[i + 1].address}
                  phoneNum={data[i + 1].phoneNum}
                  email={data[i + 1].email}
                />
              );
            }
            return rows;
          })()}
        </div>
      </div>
    </>
  );
}

function Location({ placeName, address, phoneNum, email }) {
  return (
    <>
      <div className="location-contact-us">
        <h3>{placeName}</h3>
        <p>
          <strong>Address:</strong>
          {address}
        </p>
        <p>
          <strong>Phone:</strong>
          {phoneNum}
        </p>
        <p>
          <strong>Email:</strong>
          {email}
        </p>
      </div>
    </>
  );
}

function TollFreeTable() {
  return (
    <div className="toll-free-table">
      <table>
        <tbody>
          {branches.map((branch, index) => (
            <tr key={index}>
              <td>{branch.name}</td>
              <td>{branch.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FeedBackOrSuggestionsForm() {
  return (
    <div>
      <h1 className="feedback-heading">FeedBack/Suggestions Form:</h1>
      <Form />
    </div>
  );
}

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    gender: "",
    city: "",
    rating: "",
    comments: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStarClick = (value) => {
    setFormData({ ...formData, rating: value });
    highlightStars(value);
  };

  const validateForm = () => {
    let validationErrors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      validationErrors.email = "Email is not valid.";
    }
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      validationErrors.phone = "Phone number is not valid.";
    }
    if (!formData.name) {
      validationErrors.name = "Name is required.";
    }
    if (!formData.gender) {
      validationErrors.gender = "Gender is required.";
    }
    if (!formData.city) {
      validationErrors.city = "City is required.";
    }
    if (!formData.rating) {
      validationErrors.rating = "Rating is required.";
    }
    if (!formData.comments) {
      validationErrors.comments = "Comments are required.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted:", formData);
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      email: "",
      phone: "",
      name: "",
      gender: "",
      city: "",
      rating: "",
      comments: "",
    });
    highlightStars("");
  };

  const highlightStars = (value) => {
    const newFormData = { ...formData };
    for (let i = 1; i <= 5; i++) {
      newFormData[`star${i}`] = i <= value;
    }
    setFormData(newFormData);
  };

  return (
    <div className="form-feedback-suggestions">
      <form id="feedbackForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="half-width">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <p className="error">{errors.name}</p>
          </div>
          <div className="half-width">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <p className="error">{errors.gender}</p>
          </div>
        </div>
        <div className="form-group">
          <div className="half-width">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <p className="error">{errors.email}</p>
          </div>
          <div className="half-width">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <p className="error">{errors.phone}</p>
          </div>
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          >
            <option value="">Select City...</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Madurai">Madurai</option>
          </select>
          <p className="error">{errors.city}</p>
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((starValue) => (
              <span
                key={starValue}
                className={`star ${
                  formData[`star${starValue}`] ? "active" : ""
                }`}
                onClick={() => handleStarClick(starValue)}
              >
                &#9733;
              </span>
            ))}
          </div>
          <input
            type="hidden"
            id="rating"
            name="rating"
            value={formData.rating}
          />
          <p className="error">{errors.rating}</p>
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
          ></textarea>
          <p className="error">{errors.comments}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
