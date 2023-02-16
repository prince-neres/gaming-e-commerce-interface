import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import Search from 'components/Search';

const iconeProps = {
  color: 'white',
  size: 24
};

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>Logo</span>
      <div className={styles.links}>
        <div>
          <a href='/' className={classNames(styles.link, {
            [styles.selected]: window.location.pathname === '/'
          })}>
            Página inicial
          </a>
        </div>
      </div>
      <div className={styles.busca}>
        <Search />
      </div>
      <div className={styles.icones}>
        <a href="/carrinho">
          {window.location.pathname === '/carrinho'
            ? <RiShoppingCartFill {...iconeProps} />
            : <RiShoppingCart2Line {...iconeProps} />
          }
        </a>
      </div>
    </nav>
  )
};