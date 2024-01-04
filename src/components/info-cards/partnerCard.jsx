import { dateFormatter } from "../../app/utils/date-formatter"
import CustomCloseButton from "../UI/custom-close-button"
import { useAppDispatch } from '../../app/hooks'
import { removeInfoCard } from "./infoCardSlice"

const PartnerCard = (props) => {

    const partner = props.info

    const dispatch = useAppDispatch()

    return (
        <div className='info-card--partner'>
            <p>{partner.name}</p>
            <p>ОГРН: {partner.ogrn} от {dateFormatter(partner.ogrnDate)}</p>
            <p>ИНН: {partner.inn} / КПП: {partner.kpp}</p>
            <p>Адрес: {partner.address1}</p>
            <p>Дополнительный адрес: {partner.address2}</p>
            <p>т. {partner.phone} email: {partner.email}</p>
            <p>Банковские реквизиты: {partner.bank}</p>
            <p>{partner.bossTitle} {partner.boss}</p>
            <p>Комментарии: {partner.comments}</p>
            <CustomCloseButton onClick={() => dispatch(removeInfoCard(partner.id))} />
        </div>
    )
}

export default PartnerCard