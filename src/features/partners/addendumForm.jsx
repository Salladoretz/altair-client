import { useState } from 'react'
import CustomButton from '../../components/UI/custom-button'
import CustomCloseButton from '../../components/UI/custom-close-button'
import { toLocalDate } from '../../app/utils/date-formatter'
import { useAppSelector } from '../../app/hooks'


const AddendumForm = ({ addendum, contractId, partnerId, submit, error, setError, buttonName, closeForm }) => {

    const { constractionPlace } = useAppSelector(state => state.baseInfo.baseInfo)

    const [form, setForm] = useState({
        id: addendum?.id,
        contractId: contractId,
        partnerId: partnerId,
        addendumNumber: addendum?.addendumNumber,
        addendumDate: addendum?.addendumDate,
        addendumSubject: addendum?.addendumSubject,
        addendumAmount: addendum?.addendumAmount,
        increaseTotalAmmount: addendum?.increaseTotalAmmount,
        placeId: addendum?.placeId,
        original: addendum?.original,
        cloudCopy: addendum?.cloudCopy,
        comments: addendum?.comments
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }


    return (
        <div className='partner-form'>
            <CustomCloseButton onClick={() => closeForm(false)} />
            <div className='partner-form--container'>
                <h1>Дополнительное соглашение</h1>
                <form
                    className='partner-form--form'
                    onSubmit={event => event.preventDefault()}
                >
                    <div className='partner-form--inputs'>
                        <div className='partner-form--input'>
                            <label htmlFor="">Номер ДС</label>
                            <input
                                type="text"
                                name='addendumNumber'
                                className='partner-form--input-name'
                                onChange={changeHandler}
                                value={form.addendumNumber}
                            />
                        </div>
                        <div className='partner-form--input'>
                            <label htmlFor="">Дата заключения</label>
                            <input
                                type="date"
                                name='addendumDate'
                                onChange={changeHandler}
                                value={toLocalDate(form.addendumDate) || ''}
                            />
                        </div>
                        <div className='partner-form--input'>
                            <label htmlFor="">Предмет соглашения</label>
                            <textarea
                                type="text"
                                name='addendumSubject'
                                rows={4}
                                onChange={changeHandler}
                                value={form.addendumSubject || ''}
                            />
                        </div>
                        <div className='partner-form--input'>
                            <label htmlFor="">Сумма соглашения</label>
                            <input
                                type="number"
                                name='addendumAmount'
                                onChange={changeHandler}
                                value={form.addendumAmount || 0}
                            />
                        </div>
                        <div className='partner-form--input-checkbox'>
                            <label htmlFor="">Плюсом к цене договора</label>
                            <input
                                className='checkbox'
                                type="checkbox"
                                name='increaseTotalAmmount'
                                onChange={changeHandler}
                                value={form.increaseTotalAmmount || ''}
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
                            <textarea
                                type="text"
                                name='cloudCopy'
                                rows={2}
                                onChange={changeHandler}
                                value={form.cloudCopy || ''}
                            />
                        </div>
                        <div className='partner-form--input'>
                            <label htmlFor="">Комментарии</label>
                            <textarea
                                type="text"
                                name='comments'
                                rows={8}
                                onChange={changeHandler}
                                value={form.comments || ''}
                            />
                        </div>
                    </div>
                    <div className='partner-form--error'>
                        {error}
                    </div>
                    <div className='reset'>
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

export default AddendumForm