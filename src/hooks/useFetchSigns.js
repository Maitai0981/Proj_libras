import { useState, useEffect } from 'react';
import { db } from '../api/firebase';
import { collection, getDocs } from 'firebase/firestore';

function useFetchSigns() {
  const [data, setData] = useState({ signs: [], categories: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const categoriesCollectionRef = collection(db, 'categories');
        const signsCollectionRef = collection(db, 'signs');

        const [categoriesSnapshot, signsSnapshot] = await Promise.all([
          getDocs(categoriesCollectionRef),
          getDocs(signsCollectionRef)
        ]);

        const categoriesData = categoriesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const signsData = signsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setData({
          signs: signsData,
          categories: categoriesData
        });
      } catch (err) {
        console.error("Erro ao buscar dados do Firebase:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

export default useFetchSigns;