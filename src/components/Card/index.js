import styles from './Card.module.css';
import addFavorite from './favorite_outline.png';
import removeFavorite from './favorite.png';
import { useFavoriteContext } from 'contexts/FavoriteContext';
import { Link } from 'react-router-dom';

export default function Card({
  id, 
  title, 
  cover,
  url
}) {
  const { favorite, addToFavorite } = useFavoriteContext();
  const isFavorite = favorite.some(item => item.id === id);

  return(
    <div className={styles['card']}>
      <img src={cover} alt={title} className={styles['card__cover']}/>
      <Link to={`/${id}`}>
        <h2 className={styles['card__title']}>{title}</h2>
      </Link>
      <img 
        src={isFavorite ? removeFavorite : addFavorite}
        alt={isFavorite ? 'Remover dos Favoritos': 'Adicionar aos Favoritos'}
        className={styles['card__icons']}
        onClick={() => addToFavorite({ id, title, cover, url })}
      />
    </div>
  );
}