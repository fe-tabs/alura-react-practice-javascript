import styles from './Banner.module.css';

export default function Banner() {
  const url = window.location.pathname;
  const image = url === "/" ? 'home' : url.slice(1);

  return(
    <div 
      className={styles['banner']}
      style={{ backgroundImage: `url('/images/banner-${image}.png')` }}
    >
    </div>
  );
}