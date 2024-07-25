import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="men clothing"
          title="men clothing"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="jewelery"
          title="jewelery"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="electronics"
          title="electronics"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="women clothing"
          title="women clothing"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
