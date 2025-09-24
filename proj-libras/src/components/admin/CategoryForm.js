import React, { useState } from 'react';
import { db } from '../../api/firebase';
import { collection, addDoc } from 'firebase/firestore';

function CategoryForm({ onCategoryAdded }) {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryName) return;

    try {
      const docRef = await addDoc(collection(db, 'categories'), {
        name: categoryName,
        slug: categoryName.toLowerCase().replace(/\s/g, '-')
      });
      console.log('Categoria adicionada com ID:', docRef.id);
      setCategoryName('');
      if (onCategoryAdded) {
        onCategoryAdded();
      }
    } catch (error) {
      console.error('Erro ao adicionar categoria:', error);
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