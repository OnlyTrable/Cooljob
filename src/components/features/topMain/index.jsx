import FlexContainer from "@/components/ui/flexContainer"
import styles from './styles.module.css'; // Локальні стилі залишаються відносними
import disneyIcon from "@/assets/icons/disney.svg"
import facebookIcon from "@/assets/icons/facebook.svg"
import microsoftIcon from "@/assets/icons/microsoft.svg"
import sonyIcon from "@/assets/icons/sony.svg"
import colaIcon from "@/assets/icons/cocacola.svg"

// Компонент перейменовано для ясності
function TopMain() {
  return (
    <FlexContainer className={styles.TopMain}>
      <FlexContainer className={styles.LeftTopMain}>
          <p className="p_text" styles={"color: #696969CC"}>Помогаем найти работу:</p>
      </FlexContainer>
      <FlexContainer className={styles.RightTopMain}>
        <img src={disneyIcon} alt="Disney logo" className={styles.disneyIcon}/>
        <img src={facebookIcon} alt="Facebook logo" className={styles.facebookIcon}/>
        <img src={microsoftIcon} alt="Microsoft logo" className={styles.microsoftIcon}/>
        <img src={sonyIcon} alt="Sony logo" className={styles.sonyIcon}/>
        <img src={colaIcon} alt="Coca-Cola logo" className={styles.colaIcon}/>
      </FlexContainer>
    </FlexContainer>
  );
}

export default TopMain;
