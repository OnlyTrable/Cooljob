import cooljobIcon from "../../../assets/icons/Cooljob.svg"
import instagramIcon from "../../../assets/icons/instagram.svg"
import googleIcon from "../../../assets/icons/google.svg"
import facebookIcon from "@/assets/icons/Facebook.svg"
import twitterIcon from "@/assets/icons/twitter.svg"
import FlexContainer from "@/components/ui/flexContainer"
import ListCities from "@/components/features/listCities"
import styles from './styles.module.css'

function Footer () {
    return (
        <div className={styles.footer}>
            <FlexContainer className={styles.footerContainerTop}>
                <p className={styles.p_cities}>Популярные города</p>
                    <FlexContainer className={styles.footerContainerList}>
                        <ListCities />
                    </FlexContainer>
            </FlexContainer>
            <div className={styles.footerDivider} />
            <FlexContainer className={styles.footerContainerBottom}>
                <img src={cooljobIcon} alt="Cooljob logo" className={styles.logoImage}/>
                <FlexContainer className={styles.footerContainerLinks}>
                    <img src={instagramIcon} alt="Instagram logo" className={styles.instagramIcon}/>
                    <img src={googleIcon} alt="Google logo" className={styles.googleImage}/>
                    <img src={twitterIcon} alt="Twitter logo" className={styles.twitterImage}/>
                    <img src={facebookIcon} alt="Facebook logo" className={styles.facebookIcon}/>
                </FlexContainer>
            </FlexContainer>
        </div>
    )
}

export default Footer