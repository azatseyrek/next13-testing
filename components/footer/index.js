import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className="flex items-center justify-center text-sm font-thin opacity-75">
        Created by Azat Seyrek © 2023
      </div>
    </footer>
  );
};

export default Footer;
