import styles from './styles.module.css';

const MainFrame = ({ children }) => {
  return (
    <>

    <div className={styles.mainFrame}>{children}</div>
    </>
  );
};

export default MainFrame;