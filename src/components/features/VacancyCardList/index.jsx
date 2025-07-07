import React, { useState } from 'react';
import VacancyCard from '@/components/features/vacancyCard'; // Оновлений абсолютний шлях
import Button from '@/components/ui/Button'; // Оновлений абсолютний шлях
import vacancyCardsData from '@/components/data/vacancyCardData'; // Оновлений абсолютний шлях
import styles from './styles.module.css'; // Локальні стилі залишаються відносними

// Компонент перейменовано для ясності
function VacancyCardList() {
  const [showAll, setShowAll] = useState(false);

  const vacanciesToDisplay = showAll ? vacancyCardsData : vacancyCardsData.slice(0, 6);

  return (
    <section className={styles.vacancySection}>
      <h2 className={styles.sectionTitle}>Новые вакансии</h2>
      <p>Найди работу своей мечты прямо сейчас</p>
      <div className={styles.vacancyGrid}>
        {vacanciesToDisplay.map((vacancy, index) => (
          <VacancyCard key={index} {...vacancy} />
        ))}
      </div>

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

export default VacancyCardList;
