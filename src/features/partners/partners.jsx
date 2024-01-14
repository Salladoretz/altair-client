import { useState } from 'react'
import { useGetAllPartnersQuery, useAddPartnerMutation } from '../../app/services/partners'
import InfoCards from '../../components/info-cards'
import { mockData } from '../../mockData'
import PartnerRow from './partnerRow'
import { useAppSelector } from '../../app/hooks'
import CustomButton from '../../components/UI/custom-button'
import { SearchOutlined } from '@ant-design/icons'
import PartnerForm from './partnerForm'
import { isErrorWithMessage } from '../../app/utils/error-checker'


const Partners = () => {

    const { partners } = useAppSelector(state => state.partners)

    useGetAllPartnersQuery()

    const [search, setSearch] = useState('')

    const [activeAddForm, setActiveAddForm] = useState(false)

    //const partners = mockData

    //Добавление контрагента
    const [addPartner] = useAddPartnerMutation()
    const [error, setError] = useState('')
    const add = async (form) => {
        try {

            await addPartner(form).unwrap()
            setActiveAddForm(false)

        } catch (err) {
            const mayBeError = isErrorWithMessage(err)
            if (mayBeError) {
                setError(err.data.message)
            } else {
                setError('Что-то случилось при обращении к серверу!')
            }
        }
    }

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
                <CustomButton children={'Добавить контрагента'} onClick={() => setActiveAddForm(!activeAddForm)}></CustomButton>
            </div>

            {activeAddForm ? <PartnerForm
                submit={add}
                buttonName={'Добавить'}
                error={error}
                setError={setError}
                closeForm={setActiveAddForm} /> : ''}

            <div className='partners--list'>
                {filteredPartners?.map(i =>
                    <PartnerRow key={i.id} partner={i} />
                )}
            </div>
        </div>
    )
}

export default Partners