import React, { useState } from "react";
import { Link } from "react-router-dom";

const ImageSection = ({ src, alt, description }) => (
  <div className="image">
    <img src={src} alt={alt} />
    <p>{description}</p>
  </div>
);

const Paragraph = ({ children }) => <p>{children}</p>;

const Header = ({ level, children }) => {
  const Tag = `h${level}`;
  return <Tag>{children}</Tag>;
};

const CommentForm = ({ comment, setComment, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="comment-form">
    <div className="comment-header">
      <label htmlFor="comment" className="comment-label">
        Comment:
      </label>
      <Link to={"/login"} className="login-button-comment-box">
        Login
      </Link>
    </div>
    <input
      id="comment"
      name="comment"
      className="comment-inputarea"
      placeholder="What do you think?"
      required
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    />
    <button type="submit" className="comment-submit-button">
      Submit
    </button>
  </form>
);

export function BlogPage() {
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Comment submitted:", comment);
  };

  return (
    <div className="main-container">
      <Header level={1}>
        Birthday Bash Extravaganza: A Night to Remember!
      </Header>

      <ImageSection
        src="/imgs/BlogPageImgs/blog1.jpg"
        alt="Birthday Celebration"
        description="Guests enjoying the festivities at our Birthday Bash."
      />

      <Paragraph>
        Our restaurant hosted a grand Birthday Bash Extravaganza last weekend,
        and it was nothing short of spectacular! From the moment guests walked
        in, they were greeted with a vibrant atmosphere that set the tone for an
        unforgettable evening.
      </Paragraph>

      <Header level={2}>Don't Miss Our Next Event!</Header>

      <CommentForm
        comment={comment}
        setComment={setComment}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
