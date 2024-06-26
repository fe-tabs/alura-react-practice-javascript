import styles from './Favorite.module.css';
import Title from 'components/Title';
import Card from 'components/Card';
import { useFavoriteContext } from 'contexts/FavoriteContext';
import Banner from 'components/Banner';

export default function Favorite() {
  const { favorite } = useFavoriteContext();

  return (
    <>
      <Banner image="favorite"/>
      <section>
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
      </section>
    </>
  );
}