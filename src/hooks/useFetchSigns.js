import { useState, useEffect } from 'react';
import { supabase } from '../api/supabase';

function useFetchSigns() {
  const [data, setData] = useState({ signs: [], categories: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data: signsData, error: signsError } = await supabase
          .from('signs')
          .select('*, categories(name, slug)');

        const { data: categoriesData, error: categoriesError } = await supabase
          .from('categories')
          .select('*');

        if (signsError || categoriesError) {
          throw signsError || categoriesError;
        }

        setData({
          signs: signsData,
          categories: categoriesData
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // A dependência vazia garante que o efeito só rode uma vez

  return { data, loading, error };
}

export default useFetchSigns;