import styles from './styles.module.css';

function CategoryCard({ iconColor, categoryCardText, categoryCardIcon }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer} style={{ color: iconColor }}>
        <img src={categoryCardIcon} alt={categoryCardText} />
      </div>
      <p className={styles.cardText}>{categoryCardText}</p>
    </div>
  );
}

export default CategoryCard;