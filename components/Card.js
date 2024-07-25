import { BsFillBagFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {[...Array(star)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </section>
          <section className="card-price">
            <div className="price">
              <del>${prevPrice}</del> ${newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
