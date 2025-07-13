import FlexContainer from '@/components/ui/flexContainer';
import styles from './styles.module.css';
import locationIcon from '@/assets/icons/Location.svg';

// Створимо об'єкт-карту для кольорів логотипів.
// Це більш чисто та масштабовано, ніж ланцюжок if-else.
const companyLogoColors = {
  Sony: '#000000',
  Facebook: '#004F9D',
  CocaCola: '#F40009',
};

// Функція для визначення кольору логотипа.
function getCompanyColor(companyName) {
  for (const [name, color] of Object.entries(companyLogoColors)) {
    if (companyName.startsWith(name)) {
      return color;
    }
  }
  return 'currentColor'; // Колір за замовчуванням
}
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
  // JSX вимагає, щоб імена компонентів починалися з великої літери.
  // Створюємо змінну з великої літери, щоб задовольнити цю вимогу та уникнути помилки лінтера.
  const CompanyLogoComponent = company;

  const logoColor = getCompanyColor(companyName);

  return (
    // Використовуємо дані з пропсів для відображення
    <div className={styles.card}>
      <FlexContainer className={styles.categoryContainer}>
        <span
          className={styles.colorDot}
          style={{ backgroundColor: color }}
        ></span>
        <p className={styles.categoryText}>{category}</p>
      </FlexContainer>

      <h3 className={styles.vacancyText}>{vacancyCardText}</h3>

      <p className={styles.location}>
        <img
          src={locationIcon}
          alt="Location icon"
          className={styles.locationIcon}
        />
        {`${locationCity}, ${locationCountry}`}
      </p>

      <FlexContainer className={styles.companyContainer}>
        <CompanyLogoComponent
          className={styles.companyLogo}
          style={{ color: logoColor }}
        />
        <p className={styles.companyName}>{companyName}</p>
      </FlexContainer>
    </div>
  );
}

export default VacancyCard;