import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="site-header">
        <h1>E-commerce Webpage</h1>
      </header>
      <nav className="navbar" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/product">Product</NavLink>
      </nav>
    </>
  );
}

export default Header;