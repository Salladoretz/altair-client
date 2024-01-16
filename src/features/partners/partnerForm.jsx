import { useState } from 'react'
import CustomButton from '../../components/UI/custom-button'
import CustomCloseButton from '../../components/UI/custom-close-button'
import { toLocalDate } from '../../app/utils/date-formatter'


const PartnerForm = ({ partner, submit, error, setError, buttonName, closeForm }) => {


    const [form, setForm] = useState({
        id: partner?.id,
        name: partner?.name,
        shortName: partner?.shortName,
        ogrn: partner?.ogrn,
        ogrnDate: partner?.ogrnDate,
        inn: partner?.inn,
        kpp: partner?.kpp,
        address1: partner?.address1,
        address2: partner?.address2,
        email: partner?.email,
        phone: partner?.phone,
        bank: partner?.bank,
        bossTitle: partner?.bossTitle,
        boss: partner?.boss,
        comments: partner?.comments
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const validation = (form) => {
        setError('')
        !form.name ? setError('Наименование контрагента не указано!')
            : !form.inn ? setError('ИНН не введен!')
                : submit(form)
    }

    return (
        <div className='partner-form'>
            <CustomCloseButton onClick={() => closeForm(false)} />
            <div className='partner-form--container'>
                <h1>Контрагент</h1>
                <form
                    className='partner-form--form'
                    onSubmit={event => event.preventDefault()}
                >
                    <div className='partner-form--inputs'>
                        <div className='partner-form--input'>
                            <label htmlFor="">Название *</label>
                            <textarea
                                type="text"
                                name='name'
                                rows={2}
                                className='partner-form--input-name'
                                onChange={changeHandler}
                                value={form.name || ''}
                            />
                        </div>
                        <div className='partner-form--input'>
                            <label htmlFor="">Короткое название</label>
                            <input
                                type="text"
                                name='shortName'
                                onChange={changeHandler}
                                value={form.shortName || ''}
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
                                value={toLocalDate(form.ogrnDate) || ''}
                            />
                        </div>
                        <div className='partner-form--input'>
                            <label htmlFor="">ИНН *</label>
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
                            <label htmlFor="">Дополнительный<br></br>адрес</label>
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
                            <label htmlFor="">Банковские<br></br>реквизиты</label>
                            <textarea
                                type="text"
                                name='bank'
                                onChange={changeHandler}
                                rows={4}
                                value={form.bank || ''}
                            />
                        </div>
                        <div className='partner-form--input'>
                            <label htmlFor="">Должность<br></br>руководителя</label>
                            <input
                                type="text"
                                name='bossTitle'
                                onChange={changeHandler}
                                value={form.bossTitle || ''}
                            />
                        </div>
                        <div className='partner-form--input'>
                            <label htmlFor="">ФИО<br></br>руководителя</label>
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
                            <textarea
                                type="text"
                                name='comments'
                                rows={5}
                                onChange={changeHandler}
                                value={form.comments || ''}
                            />
                        </div>
                    </div>
                    <div className='partner-form--error'>
                        {error}
                    </div>
                    <div>
                        <CustomButton
                            children={buttonName}
                            onClick={() => validation(form)}
                        ></CustomButton>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PartnerForm