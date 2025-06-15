import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import CategoryFilter from "./components/CategoryFilter";
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    // Fetch products from Fake Store API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        // Get unique categories, add 'all' option
        const uniqueCategories = ["all", ...new Set(data.map((p) => p.category))];
        setCategories(uniqueCategories);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  return (
    <div style={{ maxWidth: 960, margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Keshi's Product List</h1>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
          marginTop: 20,
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;