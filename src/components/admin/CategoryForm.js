import React, { useState } from 'react';
import { supabase } from '../../api/supabase';

function CategoryForm({ onCategoryAdded }) {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryName) return;

    const { data, error } = await supabase
      .from('categories')
      .insert([{ name: categoryName, slug: categoryName.toLowerCase().replace(/\s/g, '-') }])
      .select();

    if (error) {
      console.error('Erro ao adicionar categoria:', error);
    } else {
      console.log('Categoria adicionada:', data);
      setCategoryName('');
      if (onCategoryAdded) {
        onCategoryAdded();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      <h3>Adicionar Nova Categoria</h3>
      <input
        type="text"
        placeholder="Nome da Categoria"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default CategoryForm;