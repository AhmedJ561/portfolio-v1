import React from "react";

interface Category {
  id: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex justify-center flex-wrap gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out ${
            activeCategory === category.id
              ? "text-black shadow-lg hover:shadow-xl"
              : "hover:border-yellow-600/50"
          }`}
          style={activeCategory === category.id ? {
            background: 'linear-gradient(135deg, #c9a84c, #f0c860, #a07830)',
            boxShadow: '0 4px 18px rgba(201,168,76,0.35)',
          } : {
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.25)',
            color: '#b8bec7',
          }}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
