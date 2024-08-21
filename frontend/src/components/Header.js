import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

function NavBar() {
  const navItems = [
    { name: "Franchise", path: "/franchise" },
    { name: "Recipes", path: "/recipes" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contactus" },
    { name: "Login", path: "/login" },
  ];

  const renderNavItem = (item, index) => (
    <li key={index}>
      <NavLink
        to={item.path}
        className={({ isActive }) => (isActive ? "current-highlight" : "")}
      >
        <h2>{item.name}</h2>
      </NavLink>
    </li>
  );

  return (
    <nav className="nav-bar">
      <Logo />
      <ul className="nav-bar-ul">
        {navItems.map(renderNavItem)}
        <li>
          <Link to={"./bookadine"} className="highlight">
            <span>Book A Dine</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src="./imgs/logo.jpg" alt="LOGO" />
      <Link to="/">NH8</Link>
    </div>
  );
}
