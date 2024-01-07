import { useState } from 'react'
import { useEditPartnerMutation } from '../../app/services/partners'
import { isErrorWithMessage } from '../../app/utils/error-checker'
import CustomButton from '../../components/UI/custom-button'
import CustomCloseButton from '../../components/UI/custom-close-button'
import { useNavigate } from 'react-router-dom'


const PartnerForm = (props) => {

    const close = props.close
    const partner = props.partner

    const navigate = useNavigate()

    const [form, setForm] = useState({
        id: partner.id,
        name: partner.name,
        shortName: partner.shortName,
        ogrn: partner.ogrn,
        ogrnDate: partner.ogrnDate,
        inn: partner.inn,
        kpp: partner.kpp,
        address1: partner.address1,
        address2: partner.address2,
        email: partner.email,
        phone: partner.phone,
        bank: partner.bank,
        bossTitle: partner.bossTitle,
        boss: partner.boss,
        comments: partner.comments
    })
    const [error, setError] = useState('')

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const [editPartner] = useEditPartnerMutation()

    const validation = (form) => {
        setError('')
        !form.shortName ? setError('Короткое наименование контрагента не указано!')
            : !form.inn ? setError('ИНН не введен!')
                : edit(form)
    }

    const edit = async (form) => {
        try {
            await editPartner(form).unwrap()
            close(false)
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
        <div className='partner-form'>

            <CustomCloseButton onClick={() => close(false)} />

            <div className='partner-form--container'>
                <form onSubmit={event => event.preventDefault()}
                >
                    <div className='partner-form--input'>
                        <label htmlFor="">Название</label>
                        <textarea
                            type="text"
                            name='name'
                            rows={2}
                            className='partner-form--input-name'
                            onChange={changeHandler}
                            value={form.name}
                        />
                    </div>
                    <div className='partner-form--input'>
                        <label htmlFor="">Короткое название</label>
                        <input
                            type="text"
                            name='shortName'
                            onChange={changeHandler}
                            value={form.shortName}
                        />
                    </div>
                    <div className='partner-form--input'>
                        <label htmlFor="">ОГРН</label>
                        <input
                            type="text"
                            name='ogrn'
                            onChange={changeHandler}
                            value={form.ogrn || ''}
                        />
                    </div>
                    <div className='partner-form--input'>
                        <label htmlFor="">Дата ОГРН</label>
                        <input
                            type="date"
                            name='ogrnDate'
                            onChange={changeHandler}
                            value={form.ogrnDate?.split('T', 1) || ''}
                        />
                    </div>
                    <div className='partner-form--input'>
                        <label htmlFor="">ИНН</label>
                        <input
                            type="text"
                            name='inn'
                            onChange={changeHandler}
                            value={form.inn || ''}
                        />
                    </div>
                    <div className='partner-form--input'>
                        <label htmlFor="">КПП</label>
                        <input
                            type="text"
                            name='kpp'
                            onChange={changeHandler}
                            value={form.kpp || ''}
                        />
                    </div>
                    <div className='partner-form--input'>
                        <label htmlFor="">Адрес</label>
                        <textarea
                            type="text"
                            name='address1'
                            rows={3}
                            onChange={changeHandler}
                            value={form.address1 || ''}
                        />
                    </div>
                    <div className='partner-form--input'>
                        <label htmlFor="">Дополнительный адрес</label>
                        <textarea
                            type="text"
                            name='address2'
                            rows={3}
                            onChange={changeHandler}
                            value={form.address2 || ''}
                        />
                    </div>
                    <div className='partner-form--input'>
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            name='email'
                            onChange={changeHandler}
                            value={form.email || ''}
                        />
                    </div>
                    <div className='partner-form--input'>
                        <label htmlFor="">Телефон</label>
                        <input
                            type="text"
                            name='phone'
                            onChange={changeHandler}
                            value={form.phone || ''}
                        />
                    </div>
                    <div className='partner-form--input'>
                        <label htmlFor="">Банковские реквизиты</label>
                        <textarea
                            type="text"
                            name='bank'
                            onChange={changeHandler}
                            rows={4}
                            value={form.bank || ''}
                        />
                    </div>
                    <div className='partner-form--input'>
                        <label htmlFor="">Должность</label>
                        <input
                            type="text"
                            name='bossTitle'
                            onChange={changeHandler}
                            value={form.bossTitle || ''}
                        />
                    </div>
                    <div className='partner-form--input'>
                        <label htmlFor="">ФИО руководителя</label>
                        <textarea
                            type="text"
                            name='boss'
                            rows={2}
                            className='partner-form--input-name'
                            onChange={changeHandler}
                            value={form.boss || ''}
                        />
                    </div>
                    <div className='partner-form--input'>
                        <label htmlFor="">Комментарии</label>
                        <input
                            type="text"
                            name='comments'
                            onChange={changeHandler}
                            value={form.comments || ''}
                        />
                    </div>
                    <div className='partner-form--error'>
                        {error}
                    </div>
                    <CustomButton
                        onClick={() => validation(form)}
                    >Изменить</CustomButton>
                </form>
            </div>
        </div>
    )
}

export default PartnerForm