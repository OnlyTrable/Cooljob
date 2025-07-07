import React, { useState, useEffect } from 'react';
import VacancyCard from '@/components/features/vacancyCard'; // Оновлений абсолютний шлях
import Button from '@/components/ui/Button'; // Оновлений абсолютний шлях
import vacancyCardsData from '@/components/data/vacancyCardData'; // Оновлений абсолютний шлях
import styles from './styles.module.css'; // Локальні стилі залишаються відносними

// Компонент перейменовано для ясності
function VacancyCardList() {
  console.log('VacancyCardList: Component Rendered'); // Лог при кожному рендерингу
  const [showAll, setShowAll] = useState(() => {
    console.log('VacancyCardList: Initial showAll state:', false);
    return false;
  });
  useEffect(() => {
    console.log('VacancyCardList: showAll state changed to:', showAll);
  }, [showAll]);

  const vacanciesToDisplay = showAll ? vacancyCardsData : vacancyCardsData.slice(0, 6);
  console.log('VacancyCardList: Number of vacancies to display:', vacanciesToDisplay.length);
  console.log('VacancyCardList: showAll for display logic:', showAll);

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
        <div>
          <Button className={styles.allButton} onClick={() => setShowAll(true)}>
            Все вакансии
          </Button>
        </div>
      )}
    </section>
  );
}

export default VacancyCardList;
