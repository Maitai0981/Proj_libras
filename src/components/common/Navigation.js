import React from 'react';

function Navigation({ categories, activeCategory, onCategoryChange }) {
  return (
    <nav>
      <div className="nav-buttons">
        <button
          className={`nav-btn ${activeCategory === null ? 'active' : ''}`}
          onClick={() => onCategoryChange(null)}
        >
          Todos
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            className={`nav-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;