import { Link } from "react-router-dom"
import { Paths } from "../../paths"
import CustomButton from "../UI/custom-button";
import { useAppSelector } from "../../app/hooks";


const Header = () => {

    const { user } = useAppSelector(state => state.auth)


    return (
        <div className='header'>
            <Link to={Paths.home}>
                <h1>Строительная компания "Альтаир"</h1>
            </Link>

            <div className='header--logstatus'>
                {user
                    ? <p>{user.name}</p>
                    : <Link to={Paths.login}>
                        <CustomButton
                            children={'Войти'}
                        ></CustomButton>
                    </Link>
                }
            </div>
        </ div>
    )
}

export default Header