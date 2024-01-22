import { toLocalDate } from "../../app/utils/date-formatter"
import CloudCopyLink from "../../components/UI/cloud-copy-link"
import HaveOriginal from "../../components/UI/have-original"
import OtherDocsRow from "./otherDocsRow"
import { useAppDispatch } from "../../app/hooks"
import { toggleCard } from "../../components/info-cards/infoCardSlice"
import { useDeleteAddendumMutation, useEditAddendumMutation } from "../../app/services/partners"
import AddendumForm from "./addendumForm"
import { useState } from "react"
import { isErrorWithMessage } from "../../app/utils/error-checker"
import { DeleteOutlined } from "@ant-design/icons"


const AddendumRow = ({ addendum, partnerId, contractId }) => {

    const otherAddendumDocs = addendum?.createdOtherAddendumDocs || []

    const dispatch = useAppDispatch()

    const [openAddendumForm, setOpenAddendumForm] = useState(false)
    const [errorAddendum, setErrorAddendum] = useState(false)


    //Редактироване ДС
    const [editAddendum] = useEditAddendumMutation()

    const editAddendumHandler = async (form) => {
        try {

            await editAddendum(form).unwrap()
            setOpenAddendumForm(false)

        } catch (err) {
            const mayBeError = isErrorWithMessage(err)
            if (mayBeError) {
                setErrorAddendum(err.data.message)
            } else {
                setErrorAddendum('Что-то случилось при обращении к серверу!')
            }
        }
    }

    //Удаление ДС
    const [deleteAddendum] = useDeleteAddendumMutation()

    const deleteAddendumHandler = async (id, partnerId, contractId) => {
        try {
            let addendumForDelete = {}
            addendumForDelete.id = id
            addendumForDelete.partnerId = partnerId
            addendumForDelete.contractId = contractId
            await deleteAddendum(addendumForDelete).unwrap()
        } catch (err) {
            const mayBeError = isErrorWithMessage(err)
            if (mayBeError) {
                setErrorAddendum(err.data.message)
            } else {
                setErrorAddendum('Что-то случилось при обращении к серверу!')
            }
        }
    }

    console.log(addendum)

    return (
        <div className='addendum-row'>
            <div className='addendum-row--card'>
                <div className='addendum-row--title'>
                    <h4 onDoubleClick={() => setOpenAddendumForm(!openAddendumForm)} >ДС № {addendum?.addendumNumber} от {toLocalDate(addendum?.addendumDate)}</h4>
                    <h3>{addendum?.place?.name}</h3>
                </div>
                <div>
                    <div className='addendum-row--info'>
                        <HaveOriginal original={addendum?.original} />
                        <CloudCopyLink link={addendum?.cloudCopy} />
                    </div>
                    <div className='addendum-row--infoBtn'>
                        <button
                            onClick={() => deleteAddendumHandler(addendum.id, partnerId, contractId)}
                        ><DeleteOutlined style={{ 'color': 'red' }} /></button>
                        <button onClick={() => dispatch(toggleCard(addendum))}>Info</button>
                    </div>
                </div>
                <div className='addendum-row--numbers'></div>
            </div>
            {errorAddendum}
            {otherAddendumDocs
                ? otherAddendumDocs?.map(i =>
                    <OtherDocsRow key={i.id} otherAddendumDocs={i} />
                )
                : ''
            }
            {
                openAddendumForm
                    ? <AddendumForm
                        partnerId={partnerId}
                        contractId={contractId}
                        addendum={addendum}
                        error={errorAddendum}
                        buttonName={'Изменить'}
                        submit={editAddendumHandler}
                        closeForm={setOpenAddendumForm} />
                    : ''
            }
        </div>
    )
}

export default AddendumRow