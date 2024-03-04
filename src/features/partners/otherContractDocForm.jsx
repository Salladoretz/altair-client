import { useState } from 'react'
import CustomButton from '../../components/UI/custom-button'
import CustomCloseButton from '../../components/UI/custom-close-button'
import { useAppSelector } from '../../app/hooks'


const OtherContractDocForm = ({ otherContractDoc, contractId, partnerId, submit, error, setError, buttonName, closeForm }) => {

    const { constractionPlace, otherDocTypes } = useAppSelector(state => state.baseInfo.baseInfo)

    const [form, setForm] = useState({
        id: otherContractDoc?.id,
        otherDocTypeId: otherContractDoc?.otherDocTypeId,
        description: otherContractDoc?.description,
        contractId: contractId,
        partnerId: partnerId,
        placeId: otherContractDoc?.placeId,
        original: otherContractDoc?.original,
        cloudCopy: otherContractDoc?.cloudCopy,
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }


    return (
        <div className='partner-form'>
            <CustomCloseButton onClick={() => closeForm(false)} />
            <div className='partner-form--container'>
                <h1>Иной документ к договору</h1>
                <form
                    className='partner-form--form'
                    onSubmit={event => event.preventDefault()}
                >
                    <div className='partner-form--inputs'>
                        <div className='partner-form--input'>
                            <label htmlFor="">Тип документа</label>
                            <select
                                name='otherDocTypeId'
                                onChange={changeHandler}>
                                {otherDocTypes?.map(i =>
                                    <option key={i.id} value={i.id}>{i.title || i.name || ''}</option>
                                )}
                            </select>
                        </div>
                        <div className='partner-form--input'>
                            <label htmlFor="">Описание</label>
                            <textarea
                                type="text"
                                name='description'
                                rows={4}
                                onChange={changeHandler}
                                value={form.description || ''}
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
                                name='original'
                                onChange={event => setForm({ ...form, [event.target.name]: !form.original })}
                                value={form.original}
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

export default OtherContractDocForm