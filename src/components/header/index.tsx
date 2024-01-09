import { Link } from "react-router-dom"
import { Paths } from "../../paths"
import CustomButton from "../UI/custom-button";
import { useAppSelector } from "../../app/hooks";
import { useCurrentQuery } from "../../app/services/auth";


const Header = () => {

    const { user } = useAppSelector(state => state.auth)
    useCurrentQuery()

    return (
        <div className='header'>
            <Link to={Paths.home}>
                <h1>Строительная компания "Альтаир"</h1>
            </Link>

            <div className='header__logstatus'>
                <p>{user?.name}</p>
                <Link to={Paths.login}>
                    <CustomButton>Войти</CustomButton>
                </Link>
            </div>
        </ div>
    )
}

export default Header