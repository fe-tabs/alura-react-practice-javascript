import styles from './Favorite.module.css';
import Title from 'components/Title';
import Card from 'components/Card';
import { useFavoriteContext } from 'contexts/FavoriteContext';

export default function Favorite() {
  const { favorite } = useFavoriteContext();

  return (
    <>
      <Title>
        <h1>
          Meus Favoritos
        </h1>
      </Title>

      <section className={styles['cards__container']}>
        {favorite.map(movie => (
          <Card key={movie.id} {...movie}/>
        ))}
      </section>
    </>
  );
}