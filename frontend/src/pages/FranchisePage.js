import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export function FranchisePage() {
  return (
    <>
      <Franchises />
      <Footer />
    </>
  );
}

const franchiseData = [
  { name: "Hyderabad", src: "/imgs/franchise/res1.jpeg", id: 1 },
  { name: "Chennai", src: "/imgs/franchise/res2.jpeg", id: 2 },
  { name: "Mumbai", src: "/imgs/franchise/res3.jpeg", id: 3 },
  { name: "Kolkata", src: "/imgs/franchise/res4.jpeg", id: 4 },
  { name: "Delhi", src: "/imgs/franchise/res5.jpeg", id: 5 },
  { name: "Madurai", src: "/imgs/franchise/res6.jpg", id: 6 },
  { name: "Nagpur", src: "/imgs/franchise/res7.jpg", id: 7 },
  { name: "Bangalore", src: "/imgs/franchise/res8.jpg", id: 8 },
];

function Franchises() {
  return (
    <section id="franchise-branches" className="franchise-branches">
      <h2 className="franchise-heading">Our Franchises</h2>
      <div className="franchise-branch-container">
        {franchiseData.map((el, index) => (
          <Franchise
            resName={el.name}
            index={index}
            imgSrc={el.src}
            id={el.id}
            key={el.id}
          />
        ))}
      </div>
    </section>
  );
}

function Franchise({ resName, index, imgSrc, id }) {
  return (
    <>
      <div className="franchise-each-branch">
        <h3>{`Restaurant ${index + 1} - ${resName}`}</h3>
        <img src={imgSrc} alt={`Restaurant ${index + 1} in ${resName}`} />
        <div className="franchise-buttons-2">
          <button className="franchise-btn franchise-book-now">Book Now</button>
          <Link
            to={`/viewmenu/${id}`}
            className="franchise-btn franchise-explore"
          >
            View Menu
          </Link>
        </div>
      </div>
    </>
  );
}
