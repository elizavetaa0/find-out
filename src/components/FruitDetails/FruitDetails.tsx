import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import style from './style.module.css';
import ReturnButton from '../ReturnButton/ReturnButton';
import fruitImages from '../../service/imagesPath';

const FruitDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const fruit = useSelector((state: RootState) =>
    state.fruits.items.find((fruit) => fruit.id === Number(id))
  );
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  if (!fruit) {
    return <div>Fruit not found</div>;
  }
  
  const formatFruitName = (name: string) => {
    return name.replace(/\s+/g, '').toLowerCase();
  };

  const formattedName = formatFruitName(fruit.name);
  const image = fruitImages[formattedName];

  return (
    <div className={style.details__container}>
      <h1>{fruit.name}</h1>
      <div className={style.details__text_container}>
        <p className={style.details__text}>Family: {fruit.family}</p>
        <p className={style.details__text}>Genus: {fruit.genus}</p>
      </div>
      {image && <img src={image} alt={fruit.name} className={style.details__img}/>}
      <div className={style.details__description}>
        <h5>Nutritions</h5>
        <div className={style.details__description_container}>
        <p className={style.details__text}>Carbohydrates: {fruit.nutritions.carbohydrates}</p>
          <p className={style.details__text}>Calories: {fruit.nutritions.calories}</p>
          <p className={style.details__text}>Protein: {fruit.nutritions.protein}</p>
          <p className={style.details__text}>Sugar: {fruit.nutritions.sugar}</p>
          <p className={style.details__text}>Fat: {fruit.nutritions.fat}</p>
        </div>
      </div>
      <ReturnButton onClick={handleReturn} />
    </div>
  );
};

export default FruitDetails;
