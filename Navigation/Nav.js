import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Searching for ..."
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
