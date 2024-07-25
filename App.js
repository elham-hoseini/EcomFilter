import { useState } from "react";
import React from "react"; // Don't forget to import React!
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (selectedRange) => {
    setSelectedPriceRange(selectedRange);
  };

  function filteredData(products, selectedCat, selectedPrice, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = products.filter(
        (product) =>
          product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }

    if (selectedCat) {
      if (selectedCat != "All")
        filteredProducts = filteredProducts.filter(
          ({ category }) => category === selectedCat
        );
    }
    if (selectedPrice) {
      filteredProducts = filteredProducts.filter(
        ({ newPrice }) =>
          newPrice >= selectedPrice[0] && newPrice <= selectedPrice[1]
      );
    }

    return filteredProducts.map(({ img, title, star, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  }

  const result = filteredData(
    products,
    selectedCategory,
    selectedPriceRange,
    query
  );

  return (
    <>
      <Sidebar
        handleChange={handleChange}
        handlePriceChange={handlePriceChange}
      />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Products result={result} />
    </>
  );
}

export default App;
