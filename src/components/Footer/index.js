import styles from './Footer.module.css';

export default function Footer() {
  return(
    <footer className={styles['footer']}>
      <p className={styles['footer__text']}>Desenvolvido com Alura</p>
    </footer>
  )
}