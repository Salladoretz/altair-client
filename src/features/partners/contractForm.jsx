import { useState } from 'react'
import CustomButton from '../../components/UI/custom-button'
import CustomCloseButton from '../../components/UI/custom-close-button'
import { toLocalDate } from '../../app/utils/date-formatter'
import { useAppSelector } from '../../app/hooks'


const ContractForm = ({ contract, partnerId, submit, error, setError, buttonName, closeForm }) => {

    const { contractTypes, constractionPlace } = useAppSelector(state => state.baseInfo.baseInfo)

    const [form, setForm] = useState({
        id: contract?.id,
        contractNumber: contract?.contractNumber,
        contractDate: contract?.contractDate,
        contractTypeId: contract?.contractTypeId,
        contractSubject: contract?.contractSubject,
        contractAmount: contract?.contractAmount,
        contractPeriod: contract?.contractPeriod,
        contractMaterials: contract?.contractMaterials,
        placeId: contract?.placeId,
        original: contract?.original,
        cloudCopy: contract?.cloudCopy,
        partnerId: contract?.partnerId || partnerId,
        comments: contract?.comments,
        status: contract?.status
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }


    return (
        <div className='partner-form'>
            <CustomCloseButton onClick={() => closeForm(false)} />
            <div className='partner-form--container'>
                <h1>Договор</h1>
                <form
                    className='partner-form--form'
                    onSubmit={event => event.preventDefault()}
                >
                    <div className='partner-form--inputs'>
                        <div className='partner-form--input'>
                            <label htmlFor="">Номер договора</label>
                            <input
                                type="text"
                                name='contractNumber'
                                className='partner-form--input-name'
                                onChange={changeHandler}
                                value={form.contractNumber}
                            />
                        </div>
                        <div className='partner-form--input'>
                            <label htmlFor="">Дата заключения</label>
                            <input
                                type="date"
                                name='contractDate'
                                onChange={changeHandler}
                                value={toLocalDate(form.contractDate) || ''}
                            />
                        </div>
                        <div className='partner-form--input'>
                            <label htmlFor="">Тип договора</label>
                            <select
                                name='contractTypeId'
                                onChange={changeHandler}>
                                {contractTypes?.map(i =>
                                    <option key={i.id} value={i.id}>{i.title || i.name || ''}</option>
                                )}
                            </select>
                        </div>
                        <div className='partner-form--input'>
                            <label htmlFor="">Предмет договора</label>
                            <textarea
                                type="text"
                                name='contractSubject'
                                rows={4}
                                onChange={changeHandler}
                                value={form.contractSubject}
                            />
                        </div>
                        <div className='partner-form--input'>
                            <label htmlFor="">Сумма договора</label>
                            <input
                                type="number"
                                name='contractAmount'
                                onChange={changeHandler}
                                value={form.contractAmount || ''}
                            />
                        </div>
                        <div className='partner-form--input'>
                            <label htmlFor="">Заключен до</label>
                            <input
                                type="date"
                                name='contractPeriod'
                                onChange={changeHandler}
                                value={form.contractPeriod || ''}
                            />
                        </div>
                        <div className='partner-form--input-checkbox'>
                            <label htmlFor="">Давальческие материалы</label>
                            <input
                                className='checkbox'
                                type="checkbox"
                                name='contractMaterials'
                                onChange={changeHandler}
                                value={form.contractPeriod || ''}
                            />
                        </div>
                        <div className='partner-form--input'>
                            <label htmlFor="">Объект</label>
                            <select
                                name='placeId'
                                onChange={changeHandler}>
                                {constractionPlace?.map(i =>
                                    <option key={i.id} value={i.id}>{i.title || i.name || ''}</option>
                                )}
                            </select>
                        </div>
                        <div className='partner-form--input-checkbox'>
                            <label htmlFor="">Наличие оригинала</label>
                            <input
                                className='checkbox'
                                type="checkbox"
                                name='contractMaterials'
                                onChange={changeHandler}
                                value={form.original || ''}
                            />
                        </div>
                        <div className='partner-form--input'>
                            <label htmlFor="">Ссылка</label>
                            <input
                                type="text"
                                name='cloudCopy'
                                onChange={changeHandler}
                                value={form.cloudCopy || ''}
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
                            onClick={() => submit(form)}
                        ></CustomButton>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContractForm