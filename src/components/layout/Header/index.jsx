import cooljobIcon from "@/assets/icons/Cooljob.svg"
import FlexContainer from "@/components/ui/flexContainer"
import Button from "@/components/ui/Button"
import SearchBar from "@/components/ui/searchBar"
import locationIcon from "@/assets/icons/Location.svg"
import styles from './styles.module.css'

function Header () {
    return (
    <>
        <FlexContainer className={styles.fullHeaderContainer}>
            <FlexContainer className={styles.headerContainer}>
                <FlexContainer className={styles.logoContainer}>
                    <img src={cooljobIcon} alt="Cooljob logo" className={styles.logoImage}/>
                    <Button className={styles.searchButton}>Поиск работы</Button>
                    <Button className={styles.startupButton}>Поиск стартапов</Button>
                </FlexContainer>
                <FlexContainer className={styles.inputLinksContainer}>
                    <Button className={styles.registerButton}>Регистрация</Button>
                    <Button className={styles.loginButton}>Вход</Button>
                </FlexContainer>
            </FlexContainer>
            <h1>Один клик <br />
            и работа в кармане</h1>
            <FlexContainer className={styles.searchContainer}>
                <FlexContainer className={styles.searchLinksContainer}>
                    <SearchBar
                        placeholder="Должность или компания"
                        className={styles.PositionOrCompanyContainer}
                    />
                    <div className={styles.flexContainerDivider} />
                    <SearchBar
                        icon={locationIcon}
                        placeholder="Город, Страна"
                        className={styles.PositionOrCompanyContainer}
                    />
                </FlexContainer>
                <Button className={styles.searchOtherButton}>Поиск</Button>
            </FlexContainer>
        </FlexContainer>
    </>
    )
}

export default Header;