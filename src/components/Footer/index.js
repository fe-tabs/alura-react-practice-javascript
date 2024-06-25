import styles from './Footer.module.css';

export default function Footer() {
  return(
    <footer className={styles['footer']}>
      <div className={styles['footer__container']}>
        <p className={styles['footer__text']}>Desenvolvido com Alura</p>
      </div>
    </footer>
  )
}