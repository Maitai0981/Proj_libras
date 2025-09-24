import React, { useState } from 'react';
import Header from '../common/Header';
import Navigation from '../common/Navigation';
import MediaCard from '../common/MediaCard';
import useFetchSigns from '../../hooks/useFetchSigns';

function HomePage() {
  const { data, loading, error } = useFetchSigns();
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) {
    return <div className="loading-spinner"></div>;
  }

  if (error) {
    return <div>Erro ao carregar dados: {error.message}</div>;
  }

  const { signs, categories } = data;

  const filteredSigns = signs.filter(sign => {
    const matchesCategory = activeCategory === null || sign.categoryId === activeCategory;
    const matchesSearch = sign.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar sinal..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Navigation
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <div className="content">
          <div className="media-grid">
            {filteredSigns.length > 0 ? (
              filteredSigns.map(sign => (
                <MediaCard
                  key={sign.id}
                  name={sign.name}
                  description={sign.description}
                  mediaUrl={sign.mediaUrl}
                />
              ))
            ) : (
              <p>Nenhum sinal encontrado.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;