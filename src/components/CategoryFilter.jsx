import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => onSelectCategory(e.target.value)}
      style={{ padding: 8, fontSize: 18, borderRadius: 20, border: "3px dashed red" ,  backgroundColor: "white" }}
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;