import { useState } from 'react'
import { useGetAllPartnersQuery } from '../../app/services/partners'
import InfoCards from '../../components/info-cards'
import { mockData } from '../../mockData'
import AddPartner from './addPartner'
import PartnerRow from './partnerRow'
import { useAppSelector } from '../../app/hooks'
import CustomButton from '../../components/UI/custom-button'
import { SearchOutlined } from '@ant-design/icons'


const Partners = () => {

    const { partners } = useAppSelector(state => state.partners)

    useGetAllPartnersQuery()

    const [search, setSearch] = useState('')

    const [activeAddForm, setActiveAddForm] = useState(false)

    //const partners = mockData

    const filteredPartners = partners?.filter(i => {
        return i.name?.toLowerCase().includes(search.toLowerCase())
            || i.inn.includes(search)
            || i.ogrn?.includes(search)
    })

    return (
        <div className='partners'>
            <InfoCards />
            <div className='partners--title'><h1>Контрагенты</h1></div>
            <div className='partners--head'>
                <div>
                    <input type="text" onChange={e => setSearch(e.target.value)} />
                    <SearchOutlined style={{ 'color': 'blue' }} />
                </div>
                <CustomButton onClick={() => setActiveAddForm(!activeAddForm)}>Добавить контрагента</CustomButton>
            </div>
            {activeAddForm ? <AddPartner setActiveAddForm={setActiveAddForm} /> : ''}
            <div className='partners--list'>
                {filteredPartners?.map(i =>
                    <PartnerRow key={i.id} partner={i} />
                )}
            </div>
        </div>
    )
}

export default Partners