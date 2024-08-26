import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store/store';
import { fetchFruitsStart, fetchFruitsSuccess, fetchFruitsFailure } from './store/fruitSlice';
import Card from './components/Card/Card';
import Filter from './components/FilterButton/FilterButton';
import { getFruitsApi } from './service/api';
import { uniqueIDGenerator } from './service/uniqueID';
import fruitImages from './service/imagesPath';
import style from './app.module.css';
import Spinner from './components/Spinner/Spinner';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: fruits, loading, error } = useSelector((state: RootState) => state.fruits);
  const likedItems = useSelector((state: RootState) => state.likes.likedItems);
  const deletedItems = useSelector((state: RootState) => state.delete.deletedItems);
  const [showLikedOnly, setShowLikedOnly] = useState(false);

  useEffect(() => {
    dispatch(fetchFruitsStart());
    getFruitsApi()
      .then((data) => {
        dispatch(fetchFruitsSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchFruitsFailure(err.message));
      });
  }, [dispatch]);

  const handleLike = (id: number) => {
    console.log(`Like button clicked for fruit with ID ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete button clicked for fruit with ID ${id}`);
  };

  const formatFruitName = (name: string) => {
    return name.replace(/\s+/g, '').toLowerCase();
  };

  const filteredFruits = showLikedOnly 
    ? fruits.filter(fruit => likedItems[fruit.id] && !deletedItems[fruit.id])
    : fruits.filter(fruit => !deletedItems[fruit.id]);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={style.app__container}>
      <h1>Find Out Everything About Fruits!</h1>
      <Filter 
        onClick={() => setShowLikedOnly(!showLikedOnly)}
        isActive={showLikedOnly}
      />
      <div className={style.cards__container}>
        {filteredFruits.map((fruit) => {
          const formattedName = formatFruitName(fruit.name);
          const fruitImage = fruitImages[formattedName];

          return (
            <Card
              key={uniqueIDGenerator()}
              title={fruit.name}
              family={`Family: ${fruit.family}`}
              genus={`Genus: ${fruit.genus}`}
              image={fruitImage}
              onLike={() => handleLike(fruit.id)}
              onDelete={() => handleDelete(fruit.id)}
              id={fruit.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

