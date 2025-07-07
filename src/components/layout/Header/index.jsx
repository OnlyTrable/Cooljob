import cooljobIcon from "@/assets/icons/Cooljob.svg"
import FlexContainer from "@/components/ui/flexContainer"
import Button from "@/components/ui/Button"
import styles from './styles.module.css'

function Header () {
    return (
    <>
        <FlexContainer className={styles.headerContainer}>
            <FlexContainer className={styles.logoContainer}>
                <img src={cooljobIcon} alt="Cooljob logo" className={styles.logoImage}/>
                <p>Поиск работы</p>
                <p>Поиск стартапов</p>
            </FlexContainer>
            <FlexContainer className={styles.inputLinksContainer}> {/* This FlexContainer is for navigation links */}
                <p>Регистрация</p>
                <Button className={styles.loginButton}>Вход</Button>
            </FlexContainer>
        </FlexContainer>
    </>
    )
}

export default Header;