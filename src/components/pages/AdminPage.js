import React, { useState, useEffect } from 'react';
import CategoryForm from '../admin/CategoryForm';
import SignForm from '../admin/SignForm';
import { db } from '../../api/firebase';
import { collection, getDocs } from 'firebase/firestore';

function AdminPage() {
  const [categories, setCategories] = useState([]);
  const [signs, setSigns] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const categoriesSnapshot = await getDocs(collection(db, 'categories'));
      const categoriesData = categoriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      const signsSnapshot = await getDocs(collection(db, 'signs'));
      const signsData = signsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setCategories(categoriesData);
      setSigns(signsData);
    } catch (error) {
      console.error('Erro ao buscar dados de administração:', error);
    }
  };

  return (
    <div className="admin-container">
      <h2>Painel de Administração</h2>
      <div className="admin-forms">
        <CategoryForm onCategoryAdded={fetchData} />
        <SignForm categories={categories} onSignAdded={fetchData} />
      </div>

      <div className="admin-data">
        <h3>Categorias Existentes</h3>
        <ul>
          {categories.map(cat => (
            <li key={cat.id}>{cat.name}</li>
          ))}
        </ul>

        <h3>Sinais Existentes</h3>
        <table>
          <thead>
            <tr>
              <th>Sinal</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody>
            {signs.map(sign => (
              <tr key={sign.id}>
                <td>{sign.name}</td>
                <td>
                  {categories.find(cat => cat.id === sign.categoryId)?.name || 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPage;