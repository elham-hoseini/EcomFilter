import { FaShopify } from "react-icons/fa";
import Category from "./Category/Category";
import PriceFilter from "./Price/Price";
import "./Sidebar.css";

const Sidebar = ({ handleChange, handlePriceChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1 style={{ fontSize: "50px" }}>
            <FaShopify />
          </h1>
        </div>
        <Category handleChange={handleChange} />
        <PriceFilter onChange={handlePriceChange} />
      </section>
    </>
  );
};

export default Sidebar;
