import  financeIcon  from "../../assets/icons/Finance.svg"
import FlexContainer from "../flexContainer"

function Header () {
    return (
    <>
        <h1>Header</h1>
        <FlexContainer className="header-container">
            <FlexContainer className="logo-container">
                <img src="src/assets/icons/Cooljob.svg" alt="Cooljob logo" className="logo-image"/>
                <p>Поиск работы</p>
                <p>Поиск стартапов</p>
            </FlexContainer>
            <FlexContainer className="input-links-container"> {/* This FlexContainer is for navigation links */}
                <p>Регистрация</p>
                <button className="login-button">Вход</button>
            </FlexContainer>
        </FlexContainer>
        <img src={financeIcon} alt="unionIcon" />
    </>
    )
}

export default Header;