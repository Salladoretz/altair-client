import { useDeleteOtherContractDocMutation, useEditOtherContractDocMutation } from "../../app/services/partners"
import CloudCopyLink from "../../components/UI/cloud-copy-link"
import { DeleteOutlined } from "@ant-design/icons"
import { isErrorWithMessage } from "../../app/utils/error-checker"
import { useState } from "react"
import { useAppSelector } from '../../app/hooks'
import { getNameById, getTitleById } from "../../app/utils/getById"
import OtherContractDocForm from "./otherContractDocForm"

const OtherDocsRow = ({ otherDoc, partnerId, contractId }) => {

    const { constractionPlace, otherDocTypes } = useAppSelector(state => state.baseInfo.baseInfo)

    const [openOtherContractDocForm, setOpenOtherContractDocForm] = useState(false)
    const [errorOtherDoc, setErrorOtherDoc] = useState('')

    //Редактироване документа
    const [editOtherContractDoc] = useEditOtherContractDocMutation()

    const editOtherContractDocHandler = async (form) => {
        try {

            await editOtherContractDoc(form).unwrap()
            setOpenOtherContractDocForm(false)

        } catch (err) {
            const mayBeError = isErrorWithMessage(err)
            if (mayBeError) {
                setErrorOtherDoc(err.data.message)
            } else {
                setErrorOtherDoc('Что-то случилось при обращении к серверу!')
            }
        }
    }

    //Удаление документа
    const [deleteOtherContractDoc] = useDeleteOtherContractDocMutation()

    const deleteOtherContractDocHandler = async (id, partnerId, contractId) => {
        try {
            let otherContractDocForDelete = {}
            otherContractDocForDelete.id = id
            otherContractDocForDelete.partnerId = partnerId
            otherContractDocForDelete.contractId = contractId
            await deleteOtherContractDoc(otherContractDocForDelete).unwrap()
        } catch (err) {
            const mayBeError = isErrorWithMessage(err)
            if (mayBeError) {
                setErrorOtherDoc(err.data.message)
            } else {
                setErrorOtherDoc('Что-то случилось при обращении к серверу!')
            }
        }
    }

    return (
        <div className='other-docs-row'>
            <div
                className='other-docs-row--top'
                onDoubleClick={() => setOpenOtherContractDocForm(!openOtherContractDocForm)}>
                <div>{otherDoc.otherDocTypeId ? getTitleById(otherDoc.otherDocTypeId, otherDocTypes) : ''}</div>
                <div>{otherDoc.partnerId ? getNameById(otherDoc.placeId, constractionPlace) : ''}</div>
                <button
                    onClick={() => deleteOtherContractDocHandler(otherDoc.id, partnerId, contractId)}
                ><DeleteOutlined style={{ 'color': 'red' }} />
                </button>
                <div><CloudCopyLink link={otherDoc?.cloudCopy} /></div>
            </div>
            <div>
                {otherDoc?.description}
            </div>
            {errorOtherDoc}
            {
                openOtherContractDocForm
                    ? <OtherContractDocForm
                        otherContractDoc={otherDoc}
                        partnerId={partnerId}
                        contractId={contractId}
                        error={errorOtherDoc}
                        buttonName={'Изменить'}
                        submit={editOtherContractDocHandler}
                        closeForm={setOpenOtherContractDocForm} />
                    : ''
            }
        </div>
    )
}

export default OtherDocsRow