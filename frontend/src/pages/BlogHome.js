import React, { useState } from "react";
import { BlogCard } from "./../components/BlogCard";
import { EventsCalendar } from "./../components/EventsCalendar";
import { SearchBar } from "./../components/SearchBar";
import { HighlightedEvents } from "./../components/HighlightedEvents";
import { Footer } from "./../components/Footer";

export function BlogHome() {
  return (
    <div className="blog-home">
      <Heading />
      <BlogContainer />
      <BlogForm />
      <Footer />
    </div>
  );
}

function BlogContainer() {
  return (
    <div className="main-container-blog">
      <LeftSide />
      <RightSide />
    </div>
  );
}

// imageSrc, title, summary
function LeftSide() {
  return (
    <div className="left-side-container">
      <BlogCard
        imageSrc={
          "https://www.brides.com/thmb/A1kMNKNmVaxvVpkezv0rHh2EY30=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3-california-cool-clam-bake-wedding-guests-st-chelle-0424-2b179af575d7489fa5f8497a3670a58e.jpg"
        }
        title={"Elegant Garden Wedding Reception"}
        summary={
          "A romantic evening reception in a lush garden setting, with string lights, live music, and a gourmet dinner service"
        }
        date={"12-12-2024"}
        id={1}
      />
      <BlogCard
        imageSrc={
          "https://www.discoverwalks.com/blog/wp-content/uploads/2023/11/khadija-yousaf-lkwp3-fqomy-unsplash.jpg"
        }
        title={"Royal Rajasthani Destination Wedding"}
        summary={
          "An extravagant destination wedding set in a historic Rajasthani palace, offering guests a taste of royal luxury"
        }
        date={"16-05-2024"}
        id={2}
      />
      <BlogCard
        imageSrc={
          "https://www.simplifycreateinspire.com/wp-content/uploads/2022/05/party-games-fo-rkids--960x560.jpg.webp"
        }
        title={"Enchanted tea Party"}
        summary={
          "A whimsical tea party set in an ‘enchanted forest’ with fairy tale characters, storytelling, and delightful treats"
        }
        date={"21-01-2024"}
        id={3}
      />
      <BlogCard
        imageSrc={
          "https://www.truephotography.com/blog/wp-content/uploads/2016/03/0053Christy_Stephen_pf.jpg"
        }
        title={"Vintage Glamour Wedding"}
        summary={
          "A wedding event inspired by the glitz and glamour of the 1920s, featuring a jazz band, vintage decor, and a classic car getaway."
        }
        date={"06-01-2024"}
        id={4}
      />
    </div>
  );
}

function RightSide() {
  return (
    <div className="right-side-container">
      <SearchBar />
      <EventsCalendar />
      <HighlightedEvents />
    </div>
  );
}

function Heading() {
  return (
    <h1 className="blog-home-heading">
      Welcome to the NH8 Blog: A Plate of New Experiences
    </h1>
  );
}

function BlogForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    place: "",
    datetime: "",
    media: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "media") {
      setFormData((prevState) => ({ ...prevState, [name]: files }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(String(phone));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!validatePhone(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (formData.place === "") {
      alert("Please select a place.");
      return;
    }

    console.log(formData); //TODO API
  };

  return (
    <div className="upload-section-div">
      <section className="upload-section">
        <h2>Share Your Experience</h2>
        <form className="upload-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            onChange={handleChange}
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
          ></textarea>

          <label htmlFor="place">Place:</label>
          <select id="place" name="place" required onChange={handleChange}>
            <option value="">Select a place</option>
            <option value="Place 1">Hyderabad</option>
            <option value="Place 2">Chennai</option>
            <option value="Place 3">Banglore</option>
            <option value="Place 4">Kolkata</option>
            <option value="Place 5">Delhi</option>
            <option value="Place 6">Nagpur</option>
            <option value="Place 7">Madurai</option>
            <option value="Place 8">Mumbai</option>
          </select>

          <label htmlFor="datetime">Date and Time:</label>
          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            required
            onChange={handleChange}
          />

          <label htmlFor="media">Upload Photos/Videos:</label>
          <input
            type="file"
            id="media"
            name="media"
            multiple
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
