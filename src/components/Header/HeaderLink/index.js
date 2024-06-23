import { Link } from 'react-router-dom';
import styles from './HeaderLink.module.css';

export default function HeaderLink({ url, children }) {
  const isCurrentUrl = url === window.location.pathname;

  return(
    <Link 
      to={url} 
      className={`
        ${styles['header__link']}
        ${isCurrentUrl && styles['header__link--active']}
      `}
    >
      {children}
    </Link>
  )
}