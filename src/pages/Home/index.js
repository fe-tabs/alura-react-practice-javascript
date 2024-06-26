import Card from 'components/Card';
import styles from './Home.module.css';
import Title from 'components/Title';
import movies from 'mocks/movies.json';
import Banner from 'components/Banner';

export default function Home() {
  return(
    <>
      <Banner image="home"/>
      <section>
        <Title>
          <h1>
            Um lugar para guardar seus vídeos e filmes!
          </h1>
        </Title>

        <section className={styles['cards__container']}>
          {movies.map(movie => (
            <Card key={movie.id} {...movie}/>
          ))}
        </section>
      </section>
    </>
  );
}