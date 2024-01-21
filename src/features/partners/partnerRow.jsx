import { useState } from "react"
import ContractRow from "./contractRow"
import { PlusCircleTwoTone, MinusCircleTwoTone, DeleteOutlined } from "@ant-design/icons"
import PartnerForm from "./partnerForm"
import { useAppDispatch } from "../../app/hooks"
import { toggleCard } from "../../components/info-cards/infoCardSlice"
import { isErrorWithMessage } from '../../app/utils/error-checker'
import { useEditPartnerMutation, useAddContractMutation, useDeletePartnerMutation } from "../../app/services/partners"
import CustomButton from "../../components/UI/custom-button"
import ContractForm from "./contractForm"

const PartnerRow = ({ partner }) => {

    const contracts = partner.createdContract

    const dispatch = useAppDispatch()

    const [openContracts, setOpenContracts] = useState(false)

    //Редактирование контрагента
    const [editPartner] = useEditPartnerMutation()
    const [openPartnerForm, setOpenPartnerForm] = useState(false)
    const [errorPartner, setErrorPartner] = useState('')

    const editPartnerHandler = async (form) => {
        try {
            await editPartner(form).unwrap()
            setOpenPartnerForm(false)

        } catch (err) {
            const mayBeError = isErrorWithMessage(err)
            if (mayBeError) {
                setErrorPartner(err.data.message)
            } else {
                setErrorPartner('Что-то случилось при обращении к серверу!')
            }
        }
    }

    //Удаление контрагента
    const [deletePartner] = useDeletePartnerMutation()

    const deletePartnerHandler = async (id) => {
        try {
            let partnerForDelete = {}
            partnerForDelete.id = id
            await deletePartner(partnerForDelete).unwrap()
        } catch (err) {
            const mayBeError = isErrorWithMessage(err)
            if (mayBeError) {
                setErrorPartner(err.data.message)
            } else {
                setErrorPartner('Что-то случилось при обращении к серверу!')
            }
        }
    }

    //Добавление контракта
    const [addContract] = useAddContractMutation()
    const [openContractForm, setOpenContractForm] = useState(false)
    const [errorContract, setErrorContract] = useState('')

    const addContractHandler = async (form) => {
        try {
            await addContract(form).unwrap()
            setOpenContractForm(false)
        }
        catch (err) {
            const mayBeError = isErrorWithMessage(err)
            if (mayBeError) {
                setErrorContract(err.data.message)
            } else {
                setErrorContract('Что-то случилось при обращении к серверу!')
            }
        }
    }

    return (
        <div className='partners-row'>
            <div className='partners-row--card'>
                <div className='partners-row--title'>
                    <h3 onDoubleClick={() => setOpenPartnerForm(!openPartnerForm)}>{partner.shortName || partner.name}</h3>
                    <div>{partner.name}</div>
                </div>
                <div className='partners-row--info'>
                    <div>
                        <label>ОГРН:</label>
                        {partner.ogrn}
                    </div>
                    <div>
                        <label>ИНН:</label>
                        {partner.inn}
                    </div>
                    <div className='partners-row--infoBtn'>
                        <button
                            onClick={() => deletePartnerHandler(partner.id)}
                        ><DeleteOutlined style={{ 'color': 'red' }} /></button>
                        <button
                            onClick={() => dispatch(toggleCard(partner))}
                        >Info</button>
                    </div>
                </div>
                <div className='partners-row--numbers'>
                    <h3>{contracts?.length || 0}</h3>
                    <button onClick={() => setOpenContracts(!openContracts)}>
                        {openContracts
                            ? <MinusCircleTwoTone style={{ 'color': 'blue', 'fontSize': '13px' }} />
                            : <PlusCircleTwoTone style={{ 'color': 'blue', 'fontSize': '13px' }} />}
                    </button>
                </div>
            </div>
            {
                openContracts
                    ? <div className='partners-row--contracts' >
                        <div className='partners-row--contractsBtn'>
                            <CustomButton
                                children={'+ Добавить контракт'}
                                onClick={() => setOpenContractForm(!openContractForm)}></CustomButton>
                        </div>
                        {contracts.map(item =>
                            <ContractRow key={item.id} contracts={item} />
                        )}
                    </div>
                    : ''
            }
            {
                openPartnerForm ? <PartnerForm
                    partner={partner}
                    error={errorPartner}
                    setError={setErrorPartner}
                    buttonName={'Изменить'}
                    submit={editPartnerHandler}
                    closeForm={setOpenPartnerForm} /> : ''
            }
            {
                openContractForm ? <ContractForm
                    partnerId={partner.id}
                    error={errorContract}
                    buttonName={'Добавить'}
                    submit={addContractHandler}
                    closeForm={setOpenContractForm} /> : ''
            }
        </div >
    )
}

export default PartnerRow