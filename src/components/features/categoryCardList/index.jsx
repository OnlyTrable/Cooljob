import CategoryCard from "../categoryCard";
import styles from "./styles.module.css";
import categoryCardsData from "@/components/data/categoryCardData";

function CategoryCardList() {
  return (
    <section className={styles.categorySection}>
      <h2 className={styles.sectionTitle}>Работа <br/> по категориям</h2>
      <div className={styles.categoryGrid}>
        {categoryCardsData.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </section>
  );
}

export default CategoryCardList;