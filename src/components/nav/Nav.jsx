import "./nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">EZ Traveling</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
