import { useDeleteOtherContractDocMutation } from "../../app/services/partners"
import CloudCopyLink from "../../components/UI/cloud-copy-link"
import { DeleteOutlined } from "@ant-design/icons"
import { isErrorWithMessage } from "../../app/utils/error-checker"
import { useState } from "react"
import { useAppSelector } from '../../app/hooks'
import { getNameById, getTitleById } from "../../app/utils/getById"

const OtherDocsRow = ({ otherDoc, partnerId, contractId }) => {

    const { constractionPlace, otherDocTypes } = useAppSelector(state => state.baseInfo.baseInfo)

    const [errorOtherDoc, setErrorOtherDoc] = useState('')
    console.log(otherDoc)
    //Удаление ДС
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
    //
    //<div>{getNameById(otherDoc.placeId, constractionPlace)}</div>
    return (
        <div className='other-docs-row'>
            <div>{otherDoc ? getTitleById(otherDoc.otherDocTypeId, otherDocTypes) : ''}</div>
            <div>{otherDoc ? getNameById(otherDoc.placeId, constractionPlace) : ''}</div>
            <div>{otherDoc?.description}</div>
            <button
                onClick={() => deleteOtherContractDocHandler(otherDoc.id, partnerId, contractId)}
            ><DeleteOutlined style={{ 'color': 'red' }} />
            </button>
            <div><CloudCopyLink link={otherDoc?.cloudCopy} /></div>
            <div>{errorOtherDoc}</div>
        </div>
    )
}

export default OtherDocsRow