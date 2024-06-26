import Banner from 'components/Banner';
import styles from './Player.module.css';
import Title from 'components/Title';
import { useParams } from 'react-router-dom';
import movies from 'mocks/movies.json';


export default function Player() {
  const params = useParams();
  const movie = movies.find(movie => {
    return movie.id === Number(params.id);
  })

  return(
    <>
      <Banner image="player"/>

      <section>
        <Title>
          <h1>
            Player
          </h1>
        </Title>

        <section className={styles['player']}>
          <iframe src={movie.url} title={movie.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
        </section>
      </section>
    </>
  );
}