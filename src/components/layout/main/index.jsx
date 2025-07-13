import React from 'react';
import VacancyCardList from "@/components/features/VacancyCardList";
import CategoryCardList from "@/components/features/categoryCardList";

function Main () {
    return (
    <>    
        <CategoryCardList />
        <VacancyCardList />
    </>
    )
}

export default Main;