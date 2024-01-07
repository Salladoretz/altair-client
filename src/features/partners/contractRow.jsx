import { useState } from "react"
import OtherDocsRow from "./otherDocsRow"
import { PlusCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons"
import { dateFormatter } from "../../app/utils/date-formatter"
import AddendumRow from "./addendumRow"
import CloudCopyLink from "../../components/UI/cloud-copy-link"
import HaveOriginal from "../../components/UI/have-original"
import { useAppDispatch } from "../../app/hooks"
import { toggleCard } from "../../components/info-cards/infoCardSlice"

const ContractRow = (props) => {

    const [openDocs, setOpenDocs] = useState(false)
    const contract = props.contracts
    const addendums = contract.createdAddendum
    const otherDocs = contract.createdOtherContractDocs

    const dispatch = useAppDispatch()

    return (
        <div className='contract-row'>
            <div className='contract-row--card'>
                <div className='contract-row--title'>
                    <h4>Договор № {contract.contractNumber} от {dateFormatter(contract.contractDate)}</h4>
                    <h3>{contract.place.name}</h3>
                </div>
                <div>
                    <div className='contract-row--info'>
                        <HaveOriginal original={contract.original} />
                        <CloudCopyLink link={contract.cloudCopy} />
                    </div>
                    <div className='contract-row--infoBtn'>
                        <button onClick={() => dispatch(toggleCard(contract))}>Info</button>
                    </div>
                </div>

                <div className='contract-row--numbers'>
                    <h3>{addendums.length}</h3>
                    <button onClick={() => setOpenDocs(!openDocs)}>
                        {openDocs || addendums.length < 1 ? <MinusCircleTwoTone /> : <PlusCircleTwoTone />}
                    </button>
                </div>
            </div>
            {
                openDocs ?
                    addendums.map(item =>
                        <AddendumRow key={item.id} addendums={item} />
                    )
                    : ''
            }
            {
                otherDocs?.map(item =>
                    <OtherDocsRow key={item.id} otherDoc={item} />
                )
            }
        </div>
    )
}

export default ContractRow