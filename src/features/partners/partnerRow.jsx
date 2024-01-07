import { useState } from "react"
import ContractRow from "./contractRow"
import { PlusCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons"
import PartnerForm from "./partnerForm"
import { useAppDispatch } from "../../app/hooks"
import { toggleCard } from "../../components/info-cards/infoCardSlice"

const PartnerRow = ({ partner }) => {

    const contracts = partner.createdContract

    const dispatch = useAppDispatch()

    const [openPartnerForm, setOpenPartnerForm] = useState(false)
    const [openContracts, setOpenContracts] = useState(false)

    return (
        <div className='partners-row'>
            <div className='partners-row--card'>
                <div className='partners-row--title'>
                    <h3 onDoubleClick={() => setOpenPartnerForm(!openPartnerForm)}>{partner.shortName}</h3>
                    <div className='partners-row--name'>{partner.name}</div>
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
                        <button onClick={() => dispatch(toggleCard(partner))}>Info</button>
                    </div>
                </div>
                <div className='partners-row--numbers'>
                    <h3>{contracts?.length}</h3>
                    <button onClick={() => setOpenContracts(!openContracts)}>
                        {openContracts || contracts?.length < 1
                            ? <MinusCircleTwoTone style={{ 'color': 'blue', 'fontSize': '13px' }} />
                            : <PlusCircleTwoTone style={{ 'color': 'blue', 'fontSize': '13px' }} />}
                    </button>
                </div>
            </div>
            {openContracts ?
                contracts?.map(item =>
                    <ContractRow key={item.id} contracts={item} />
                )
                : ''
            }
            {openPartnerForm ? <PartnerForm close={setOpenPartnerForm} partner={partner} /> : ''}
        </div>
    )
}

export default PartnerRow