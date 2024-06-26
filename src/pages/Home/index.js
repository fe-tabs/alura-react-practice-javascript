import Card from 'components/Card';
import styles from './Home.module.css';
import Title from 'components/Title';
import movies from 'mocks/movies.json';

export default function Home() {
  return(
    <>
      <Title>
        <h1>
          Um lugar para guardar seus vídeos e filmes!
        </h1>
      </Title>

      <section className={styles['cards__container']}>
        {movies.map(movie => (
          <a href={movie.url} target='_blank' rel='noreferrer'>
            <Card key={movie.id} {...movie}/>
          </a>
        ))}
      </section>
    </>
  );
}