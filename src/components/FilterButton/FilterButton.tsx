import style from './style.module.css';
import { FilterProps } from './type';

const Filter: React.FC<FilterProps> = ({ onClick, isActive }) => {
  return (
    <button 
      className={style.filter__button} 
      onClick={onClick}
    >
      {isActive ? 'Show all fruits' : 'Filter liked fruits'}
    </button>
  );
}

export default Filter;
