import { useState } from 'react'
import { useAddPartnerMutation } from '../../app/services/partners'
import { isErrorWithMessage } from '../../app/utils/error-checker'
import CustomButton from '../../components/UI/custom-button'
import CustomCloseButton from '../../components/UI/custom-close-button'

const AddPartner = ({ setActiveAddForm }) => {

    const [error, setError] = useState('')

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const [addPartner] = useAddPartnerMutation()

    const [form, setForm] = useState({
        shortName: '',
        inn: ''
    })

    const validation = (form) => {
        setError('')
        !form.shortName ? setError('Короткое наименование контрагента не указано!')
            : !form.inn ? setError('ИНН не введен!')
                : add(form)
    }

    const add = async (form) => {
        try {
            console.log(form)
            await addPartner(form).unwrap()
            setActiveAddForm(false)
        } catch (err) {
            const mayBeError = isErrorWithMessage(err)
            if (mayBeError) {
                setError(err.data.message)
            } else {
                setError('Что-то случилось при обращении к серверу!')
            }
        }
    }

    return (
        <div className='add-partner'>

            <CustomCloseButton onClick={() => setActiveAddForm(false)} />

            <div className='add-partner--container'>
                <form onSubmit={event => event.preventDefault()}
                >
                    <div className='add-partner--input'>
                        <label htmlFor="">Название</label>
                        <input
                            type="text"
                            name='name'
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='add-partner--input'>
                        <label htmlFor="">Короткое название</label>
                        <input
                            type="text"
                            name='shortName'
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='add-partner--input'>
                        <label htmlFor="">ОГРН</label>
                        <input
                            type="text"
                            name='ogrn'
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='add-partner--input'>
                        <label htmlFor="">Дата ОГРН</label>
                        <input
                            type="date"
                            name='ogrnDate'
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='add-partner--input'>
                        <label htmlFor="">ИНН</label>
                        <input
                            type="text"
                            name='inn'
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='add-partner--input'>
                        <label htmlFor="">КПП</label>
                        <input
                            type="text"
                            name='kpp'
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='add-partner--input'>
                        <label htmlFor="">Адрес</label>
                        <input
                            type="text"
                            name='address1'
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='add-partner--input'>
                        <label htmlFor="">Дополнительный адрес</label>
                        <input
                            type="text"
                            name='address2'
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='add-partner--input'>
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            name='email'
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='add-partner--input'>
                        <label htmlFor="">Телефон</label>
                        <input
                            type="text"
                            name='phone'
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='add-partner--input'>
                        <label htmlFor="">Банковские реквизиты</label>
                        <input
                            type="text"
                            name='bank'
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='add-partner--input'>
                        <label htmlFor="">Должность</label>
                        <input
                            type="text"
                            name='bossTitle'
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='add-partner--input'>
                        <label htmlFor="">ФИО руководителя</label>
                        <input
                            type="text"
                            name='boss'
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='add-partner--input'>
                        <label htmlFor="">Комментарии</label>
                        <input
                            type="text"
                            name='comments'
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='add-partner--error'>
                        {error}
                    </div>
                    <CustomButton
                        onClick={() => validation(form)}
                    >Добавить</CustomButton>
                </form>
            </div>
        </div>
    )
}

export default AddPartner