import VacancyCard from '../vacancyCard';
import vacancyCardsData from '../vacancyCardData';
import styles from './styles.module.css';

function VacancyCardList() {
  return (
    <div className={styles.cardListContainer}>
      {vacancyCardsData.map((cardData) => (
        // Для кожної картки передаємо її дані як пропси
        <VacancyCard
          key={cardData.vacancyCardText} // Ключ важливий для React
          color={cardData.color}
          category={cardData.category}
          vacancyCardText={cardData.vacancyCardText}
          locationCity={cardData.locationCity}
          locationCountry={cardData.locationCountry}
          company={cardData.company}
          companyName={cardData.companyName}
        />
      ))}
    </div>
  );
}

export default VacancyCardList;