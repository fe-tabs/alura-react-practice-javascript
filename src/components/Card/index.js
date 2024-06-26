import styles from './Card.module.css';
import addFavorite from './favorite_outline.png';
import removeFavorite from './favorite.png';

export default function Card({
  id, 
  title, 
  cover,
  url,
  isFavorite
}) {
  return(
    <div className={styles['card']}>
      <img src={cover} alt={title} className={styles['card__cover']}/>
      <a href={url} target='_blank' rel='noreferrer'>
        <h2 className={styles['card__title']}>{title}</h2>
      </a>
      <img 
        src={isFavorite ? removeFavorite : addFavorite}
        alt={isFavorite ? 'Remover dos Favoritos': 'Adicionar aos Favoritos'}
        className={styles['card__icons']}
      />
    </div>
  );
}