import React, { useState } from 'react';
import { db } from '../../api/firebase';
import { collection, addDoc } from 'firebase/firestore';

function SignForm({ categories, onSignAdded }) {
  const [signName, setSignName] = useState('');
  const [description, setDescription] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signName || !categoryId) return;

    try {
      await addDoc(collection(db, 'signs'), {
        name: signName,
        description: description,
        mediaUrl: mediaUrl,
        categoryId: categoryId
      });
      console.log('Sinal adicionado com sucesso!');
      setSignName('');
      setDescription('');
      setMediaUrl('');
      setCategoryId('');
      if (onSignAdded) {
        onSignAdded();
      }
    } catch (error) {
      console.error('Erro ao adicionar sinal:', error);
    }
  };

  return (
     <form onSubmit={handleSubmit} className="admin-form">
      <h3>Adicionar Novo Sinal</h3>
      <input
        type="text"
        placeholder="Nome do Sinal"
        value={signName}
        onChange={(e) => setSignName(e.target.value)}
      />
      <textarea
        placeholder="Descrição do Movimento"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL da Mídia (GIF, MP4, JPG)"
        value={mediaUrl}
        onChange={(e) => setMediaUrl(e.target.value)}
      />
      <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
        <option value="">Selecione a Categoria</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default SignForm;