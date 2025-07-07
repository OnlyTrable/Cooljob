import FlexContainer from '../../ui/flexContainer';
import styles from './styles.module.css';
import locationIcon from "../../../assets/icons/Location.svg"

// Компонент приймає об'єкт з даними через пропси
function VacancyCard({
  color,
  category,
  vacancyCardText,
  locationCity,
  locationCountry,
  company,
  companyName,
}) {
  return (
    // Використовуємо дані з пропсів для відображення
    <div className={styles.card}>
      <FlexContainer className={styles.categoryContainer}>
        <span className={styles.colorDot} style={{ backgroundColor: color }}></span>
        <p className={styles.categoryText}>{category}</p>
      </FlexContainer>

      <h3 className={styles.vacancyText}>{vacancyCardText}</h3>

      <p className={styles.location}>
        <img src={locationIcon} alt="Location icon" className={styles.locationIcon} />
        {`${locationCity}, ${locationCountry}`}
      </p>

      <FlexContainer className={styles.companyContainer}>
        <img src={company} alt={companyName} className={styles.companyLogo} />
        <p className={styles.companyName}>{companyName}</p>
      </FlexContainer>
    </div>
  );
}

export default VacancyCard;