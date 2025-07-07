import React, { useState } from 'react';
import VacancyCard from '../vacancyCard';
import Button from '../button';
import vacancyCardsData from '../vacancyCardData'; // 1. Імпортуємо дані з вашого файлу
import styles from './styles.module.css';

function VacancyList() {
  const [showAll, setShowAll] = useState(false);

  // Визначаємо, які картки показувати: перші 6 або всі
  const vacanciesToDisplay = showAll ? vacancyCardsData : vacancyCardsData.slice(0, 6);

  return (
    <section className={styles.vacancySection}>
      <h2 className={styles.sectionTitle}>Гарячі вакансії</h2>
      <div className={styles.vacancyGrid}>
        {/* 2. Використовуємо індекс як ключ, оскільки в даних немає унікального id */}
        {vacanciesToDisplay.map((vacancy, index) => (
          <VacancyCard key={index} {...vacancy} />
        ))}
      </div>

      {/* Показуємо кнопку, тільки якщо є більше 6 вакансій і вони ще не всі показані */}
      {!showAll && vacancyCardsData.length > 6 && (
        <div className={styles.buttonContainer}>
          <Button onClick={() => setShowAll(true)}>
            Все вакансии
          </Button>
        </div>
      )}
    </section>
  );
}

export default VacancyList;