import { useState } from "react"
import ContractRow from "./contractRow"
import { PlusCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons"

const PartnerRow = (props) => {

    const info = props.partner

    const contracts = info.createdContract

    const [openContracts, setOpenContracts] = useState(false)

    return (
        <div className='partners-row'>
            <div className='partners-row--card'>
                <div className='partners-row--title'>
                    <div> <h3>{info.shortName}</h3> </div>
                    <div className='partners-row--name'>{info.name}</div>
                </div>
                <div className='partners-row--info'>
                    <div>
                        <label>ОГРН:</label>
                        {info.ogrn}
                    </div>
                    <div>
                        <label>ИНН:</label>
                        {info.inn}</div>
                </div>
                <div className='partners-row--numbers'>
                    <h3>{contracts.length}</h3>
                    <button onClick={() => setOpenContracts(!openContracts)}>
                        {openContracts || contracts.length < 1 ? <MinusCircleTwoTone /> : <PlusCircleTwoTone />}
                    </button>
                </div>
            </div>
            {openContracts ?
                contracts?.map(item =>
                    <ContractRow key={item.id} contracts={item} />
                )
                : ''
            }
        </div>
    )
}

export default PartnerRow