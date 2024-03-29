import { useAppSelector } from '../../app/hooks'
import AddendumCard from './addendumCard'
import ContractCard from './contractCard'
import PartnerCard from './partnerCard'


const InfoCards = () => {

    const cards = useAppSelector(state => state.infoCards.infoCard)

    return (
        <div className='info-card'>
            {
                cards?.map(
                    i => {
                        if (i.hasOwnProperty('inn')) {
                            return <PartnerCard key={i.id} info={i} />
                        } else if (i.hasOwnProperty('contractNumber')) {
                            return <ContractCard key={i.id} info={i} />
                        } else if (i.hasOwnProperty('addendumNumber')) {
                            return <AddendumCard key={i.id} info={i} />
                        }
                        return i
                    }
                )
            }
        </div>
    )
}

export default InfoCards