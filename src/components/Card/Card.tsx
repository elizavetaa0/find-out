import { FC } from "react";
import { CardProps } from "./type";
import style from './styles.module.css';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { toggleLike } from "../../store/likeSlice";
import { toggleDelete } from "../../store/deleteSlice";
import { useNavigate } from "react-router-dom";

const Card: FC<CardProps> = ({ title, family, genus, image, onLike, onDelete, id }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isLiked = useSelector((state: RootState) => state.likes.likedItems[id]);

  const handleLike = () => {
    dispatch(toggleLike(id));
    onLike();
  };

  const handleDelete = () => {
    console.log(`Deleting card with ID: ${id}`);
    dispatch(toggleDelete(id));
    onDelete();
  };
  

  const handleCardClick = () => {
    navigate(`/fruit/${id}`);
  }

  return (
    <div className={style.card__container} onClick={handleCardClick}>
      <h2 className={style.card__title}>{title}</h2>
      <p className={style.card__content}>{family}</p>
      <p className={style.card__content}>{genus}</p>
      <img src={image} alt={title} className={style.card__image} />
      <div className={style.button__container} onClick={e => e.stopPropagation()}>
      <button
        type="button"
        aria-label="Кнопка лайка в виде сердца"
        className={`${style.like__button} ${isLiked ? style.like__button_active : ''}`}
        onClick={handleLike}
      >
      </button>
      <button
        type="button"
        aria-label="Кнопка удаления карточки"
        className={style.delete__button}
        onClick={handleDelete}
      >
      </button>
      </div>
    </div>
  );
}

export default Card;