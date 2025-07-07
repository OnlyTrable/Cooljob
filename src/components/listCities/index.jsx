import vacancyCardsData from "../vacancyCardData";

// 1. Назва компонента має починатися з великої літери: LiList
function ListCities () {
    // 2. Витягуємо тільки назви міст з масиву даних
    const cities = vacancyCardsData.map(card => card.locationCity);

    // 3. Створюємо новий масив, що містить тільки унікальні міста
    const uniqueCities = [...new Set(cities)];

    // 4. Створюємо елементи для кожного унікального міста.
    //    Важливо додавати унікальний `key` для кожного елемента у списку.
    return uniqueCities.map(city => (
        <div key={city}>{city}</div>
    ));
}

export default ListCities;
