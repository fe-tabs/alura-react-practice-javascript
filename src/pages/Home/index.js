import Card from 'components/Card';
import styles from './Home.module.css';
import Title from 'components/Title';
import Banner from 'components/Banner';
import { useEffect, useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5500/movies')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

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