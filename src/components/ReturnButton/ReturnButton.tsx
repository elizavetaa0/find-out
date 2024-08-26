import style from './style.module.css';
import { ReturnProps } from './type';

const ReturnButton: React.FC<ReturnProps> = ({ onClick }) => {
  return (
    <button 
      className={style.return__button} 
      onClick={onClick}
    >
      Return
    </button>
  );
}

export default ReturnButton;
