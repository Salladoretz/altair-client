import { toLocalDate } from "../../app/utils/date-formatter"
import { useAppDispatch } from '../../app/hooks'
import { removeInfoCard } from "./infoCardSlice"
import CustomCloseButton from "../UI/custom-close-button"


const AddendumCard = (props) => {

    const addendum = props.info

    const dispatch = useAppDispatch()

    return (
        <div className='info-card--contract'>
            <CustomCloseButton onClick={() => dispatch(removeInfoCard(addendum.id))} />
            <p>ДС № {addendum?.addendumNumber} от {toLocalDate(addendum.addendumDate)}</p>
            <p>к договору № {addendum?.contract.contractNumber} от {toLocalDate(addendum?.contract.contractDate)}</p>
            <p>Контрагент: {addendum?.contract.partner.shortName}</p>
            <p>Место: {addendum?.place.name}</p>
            <p>Комментарии: {addendum?.comments}</p>
        </div>
    )
}

export default AddendumCard