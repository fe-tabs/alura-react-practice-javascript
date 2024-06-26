import Banner from 'components/Banner';
import styles from './Player.module.css';
import Title from 'components/Title';
import { useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { useEffect, useState } from 'react';

export default function Player() {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5500/movies/${params.id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, []);

  if(!movie) {
    return <NotFound/>;
  }

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