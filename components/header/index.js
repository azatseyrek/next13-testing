import Link from 'next/link';

import { SiLichess } from 'react-icons/si';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className="flex cursor-pointer items-center justify-between ">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold uppercase text-green-800 "
        >
          <SiLichess size={56} /> TEST APP
        </Link>
        <nav className="flex cursor-pointer justify-between gap-12 font-bold">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">References</Link>
          <Link href="/">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
