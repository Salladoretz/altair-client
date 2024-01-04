import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../../components/UI/custom-button'
import { UserForLogin, useLoginMutation } from '../../app/services/auth'
import { isErrorWithMessage } from '../../app/utils/error-checker'



const Login = () => {

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const changeHandler = (event: any) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const [loginUser] = useLoginMutation()

    const [form, setForm] = useState({
        nickname: '',
        password: ''
    })


    const logining = async (form: UserForLogin) => {

        try {
            await loginUser(form).unwrap()

            navigate('/')

        } catch (err) {
            const mayBeError = isErrorWithMessage(err)
            if (mayBeError) {
                setError(err.data.message)
            } else {
                setError('Что-то случилось при обращении к серверу!')
            }
        }
    }

    const validation = (form: any) => {
        setError('')
        !form.nickname ? setError('Пользователь не указан!')
            : !form.password ? setError('Пароль не введен!')
                : logining(form)
    }


    return (
        <div className='login'>
            <form
                onSubmit={event => event.preventDefault()}
                className='login-form'
            >
                <div className='login-input'>
                    <label htmlFor="nickname">Имя пользователя</label>
                    <input
                        type='text'
                        name='nickname'
                        onChange={changeHandler}
                    />
                </div>
                <div className='login-input'>
                    <label htmlFor='password'>Пароль</label>
                    <input
                        type='password'
                        name='password'
                        onChange={changeHandler}
                    />
                </div>
                <div className='login-error'>
                    {error}
                </div>
                <CustomButton
                    onClick={() => validation(form)}
                >Войти</CustomButton>
            </form>
        </div>
    )
}

export default Login