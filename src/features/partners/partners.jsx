//import { useGetAllPartnersQuery } from '../../app/services/partners'
import InfoCards from '../../components/info-cards'
import { mockData } from '../../mockData'
import PartnerRow from './partnerRow'


const Partners = () => {

    //const { data } = useGetAllPartnersQuery()

    const data = mockData

    return (
        <div className='partners'>
            <InfoCards />
            <div className='partners--title'><h1>Контрагенты</h1></div>
            <div className='partners--list'>
                {data?.map(i =>
                    <PartnerRow key={i.id} partner={i} />
                )}
            </div>
        </div>
    )
}

export default Partners