import { api } from './api'
import { TPartner, TResponseAddPartner } from '../../types'


type TPartnerForAdd = Omit<TPartner, 'id' | 'createdContract'>
type TPartnerForEdit = Omit<TPartner, 'createdContract'>

export const partnersApi = api.injectEndpoints({

    endpoints: (builder) => ({
        getAllPartners: builder.query<TPartner[], void>({
            query: () => ({
                url: '/partner',
                method: 'GET'
            })
        }),
        addPartner: builder.mutation<TResponseAddPartner, TPartnerForAdd>({
            query: (partnerForAdd) => ({
                url: '/partner/add',
                method: 'POST',
                body: partnerForAdd
            })
        }),
        editPartner: builder.mutation<TResponseAddPartner, TPartnerForEdit>({
            query: (partnerForEdit) => ({
                url: '/partner/edit',
                method: 'PUT',
                body: partnerForEdit
            })
        })
    })
})


export const { useGetAllPartnersQuery, useAddPartnerMutation, useEditPartnerMutation } = partnersApi

export const { endpoints: { getAllPartners, addPartner, editPartner } } = partnersApi