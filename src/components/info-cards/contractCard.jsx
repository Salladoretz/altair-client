import { dateFormatter } from "../../app/utils/date-formatter"
import { useAppDispatch } from '../../app/hooks'
import { removeInfoCard } from "./infoCardSlice"
import CustomCloseButton from "../UI/custom-close-button"

const ContractCard = (props) => {

    const contract = props.info

    const dispatch = useAppDispatch()

    return (
        <div className='info-card--contract'>
            <CustomCloseButton onClick={() => dispatch(removeInfoCard(contract.id))} />
            <p>Договор № {contract?.contractNumber} от {dateFormatter(contract.contractDate)}</p>
            <p>Контрагент: {contract?.partner.name}</p>
            <p>Тип: {contract?.contractType.title}</p>
            <p>Место: {contract?.place.name}</p>
            <p>Дополнительные соглашения: {contract?.createdAddendum.length} </p>
            <p>Комментарии: {contract?.comments}</p>

        </div>
    )
}

export default ContractCard