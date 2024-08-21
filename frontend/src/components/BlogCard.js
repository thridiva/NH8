import React from "react";
import { useNavigate } from "react-router-dom";

export function BlogCard({ imageSrc, title, summary, date, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="blog-card" onClick={handleClick}>
      <img src={imageSrc} alt={title} className="blog-image-bc" />
      <div className="blog-content-bc">
        <h2 className="blog-title-bc">{title}</h2>
        <p className="blog-summary-bc">{summary}</p>
        <p className="blog-summary-bc">Date: {date}</p>
      </div>
    </div>
  );
}
