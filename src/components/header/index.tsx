import { Link } from "react-router-dom"
import { Paths } from "../../paths"
import CustomButton from "../UI/custom-button";


const Header = () => {
    return (
        <div className='header'>
            <Link to={Paths.home}>
                <h1>Строительная компания "Альтаир"</h1>
            </Link>
            <div className='header__logstatus'>
                <Link to={Paths.login}>
                    <CustomButton>Войти</CustomButton>
                </Link>
            </div>
        </ div>
    )
}

export default Header