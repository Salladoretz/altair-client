import { api } from './api'
import { TPartner } from '../../types'


export const partnersApi = api.injectEndpoints({

    endpoints: (builder) => ({
        getAllPartners: builder.query<TPartner[], void>({
            query: () => ({
                url: '/partner',
                method: 'GET'
            })
        })
    })
})


export const { useGetAllPartnersQuery } = partnersApi

export const { endpoints: { getAllPartners } } = partnersApi