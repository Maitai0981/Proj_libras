import React, { useState, useEffect } from 'react';
import CategoryForm from '../components/admin/CategoryForm';
import SignForm from '../components/admin/SignForm';
import { supabase } from '../api/supabase';

function AdminPage() {
  const [categories, setCategories] = useState([]);
  const [signs, setSigns] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: categoriesData, error: catError } = await supabase.from('categories').select('*');
    const { data: signsData, error: signsError } = await supabase.from('signs').select('*, categories(name)');

    if (catError || signsError) {
      console.error('Erro ao buscar dados de administração:', catError || signsError);
    } else {
      setCategories(categoriesData);
      setSigns(signsData);
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
                <td>{sign.categories.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPage;