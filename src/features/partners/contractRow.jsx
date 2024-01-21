import { useState } from "react"
import OtherDocsRow from "./otherDocsRow"
import { PlusCircleTwoTone, MinusCircleTwoTone, DeleteOutlined } from "@ant-design/icons"
import { toRuDate } from "../../app/utils/date-formatter"
import AddendumRow from "./addendumRow"
import CloudCopyLink from "../../components/UI/cloud-copy-link"
import HaveOriginal from "../../components/UI/have-original"
import { useAppDispatch } from "../../app/hooks"
import { toggleCard } from "../../components/info-cards/infoCardSlice"
import { useDeleteContractMutation, useEditContractMutation, useAddAddendumMutation } from "../../app/services/partners"
import { isErrorWithMessage } from "../../app/utils/error-checker"
import ContractForm from "./contractForm"
import CustomButton from "../../components/UI/custom-button"
import AddendumForm from "./addendumForm"


const ContractRow = (props) => {

    const [openContractForm, setOpenContractForm] = useState(false)

    const [openAddendums, setOpenAddendums] = useState(false)
    const [openAddendumForm, setOpenAddendumForm] = useState(false)

    const [errorContract, setErrorContract] = useState(false)

    const contract = props.contracts
    const addendums = contract.createdAddendum
    const otherDocs = contract.createdOtherContractDocs

    const dispatch = useAppDispatch()

    //Редактироване договора
    const [editContract] = useEditContractMutation()

    const editContractHandler = async (form) => {
        try {

            await editContract(form).unwrap()
            setOpenContractForm(false)

        } catch (err) {
            const mayBeError = isErrorWithMessage(err)
            if (mayBeError) {
                setErrorContract(err.data.message)
            } else {
                setErrorContract('Что-то случилось при обращении к серверу!')
            }
        }
    }

    //Удаление договора
    const [deleteContract] = useDeleteContractMutation()

    const deleteContractHandler = async (id, partnerId) => {
        try {
            let contractForDelete = {}
            contractForDelete.id = id
            contractForDelete.partnerId = partnerId
            await deleteContract(contractForDelete).unwrap()
        } catch (err) {
            const mayBeError = isErrorWithMessage(err)
            if (mayBeError) {
                setErrorContract(err.data.message)
            } else {
                setErrorContract('Что-то случилось при обращении к серверу!')
            }
        }
    }

    //Добавление ДС
    const [addAddendum] = useAddAddendumMutation()
    const [errorAddendum, setErrorAddendum] = useState('')

    const addAddendumHandler = async (form) => {
        try {
            await addAddendum(form).unwrap()
            setOpenAddendumForm(false)
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
        <div className='contract-row'>

            <div className='contract-row--card'>
                <div className='contract-row--title'>
                    <h4 onDoubleClick={() => setOpenContractForm(!openContractForm)}>Договор № {contract.contractNumber} от {toRuDate(contract.contractDate)}</h4>
                    <p>{contract.partner?.shortName}</p>
                    <div>
                        <h3>{contract.place?.name}</h3>
                        <p>Тип: {contract.contractType?.title}</p>
                    </div>
                </div>
                <div>
                    <div className='contract-row--info'>
                        <HaveOriginal original={contract.original} />
                        <CloudCopyLink link={contract.cloudCopy} />
                    </div>
                    <div className='contract-row--infoBtn'>
                        <button
                            onClick={() => deleteContractHandler(contract.id, contract.partnerId)}
                        ><DeleteOutlined style={{ 'color': 'red' }} /></button>
                        <button
                            onClick={() => dispatch(toggleCard(contract))}
                        >Info</button>
                    </div>
                </div>
                <div className='contract-row--numbers'>
                    <h3>{addendums?.length || 0}</h3>
                    <button onClick={() => setOpenAddendums(!openAddendums)}>
                        {openAddendums
                            ? <MinusCircleTwoTone style={{ 'color': 'blue', 'fontSize': '13px' }} />
                            : <PlusCircleTwoTone style={{ 'color': 'blue', 'fontSize': '13px' }} />}
                    </button>
                </div>
            </div>
            {errorContract}
            {
                openAddendums
                    ? <div className='partners-row--contracts' >
                        <div className='partners-row--contractsBtn'>
                            <CustomButton
                                children={'+ Добавить ДС'}
                                onClick={() => setOpenAddendumForm(!openAddendumForm)}></CustomButton>
                        </div>
                        {addendums.map(item =>
                            <AddendumRow
                                key={item.id}
                                addendum={item}
                                partnerId={contract.partnerId}
                                contractId={contract.id}
                            />
                        )}
                        <div>
                            {otherDocs?.map(item =>
                                <OtherDocsRow key={item.id} otherDoc={item} />
                            )}
                        </div>
                    </div>
                    : ''
            }
            {
                openContractForm
                    ? <ContractForm
                        contract={contract}
                        partnerId={contract.partnerId}
                        error={errorContract}
                        buttonName={'Изменить'}
                        submit={editContractHandler}
                        closeForm={setOpenContractForm} />
                    : ''
            }
            {
                openAddendumForm
                    ? <AddendumForm
                        partnerId={contract.partnerId}
                        contractId={contract.id}
                        error={errorAddendum}
                        buttonName={'Добавить'}
                        submit={addAddendumHandler}
                        closeForm={setOpenAddendumForm} />
                    : ''
            }

        </div >
    )
}

export default ContractRow