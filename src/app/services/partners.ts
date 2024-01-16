import { api } from './api'
import { TPartner, TContract } from '../../types'


type TPartnerForAdd = Omit<TPartner, 'id' | 'createdContract'>
type TPartnerForEdit = Omit<TPartner, 'createdContract'>

type TContractForAdd = Omit<TContract, 'id' | 'createdAddendum' | 'createdOtherContractDocs'>
type TContractForEdit = Omit<TContract, 'createdAddendum' | 'createdOtherContractDocs'>
type TContractForDelete = {
    id: string,
    partnerId: string
}

export const partnersApi = api.injectEndpoints({

    endpoints: (builder) => ({
        getAllPartners: builder.query<TPartner[], void>({
            query: () => ({
                url: '/partner',
                method: 'GET'
            })
        }),
        addPartner: builder.mutation<TPartner, TPartnerForAdd>({
            query: (partnerForAdd) => ({
                url: '/partner/add',
                method: 'POST',
                body: partnerForAdd
            })
        }),
        editPartner: builder.mutation<TPartner, TPartnerForEdit>({
            query: (partnerForEdit) => ({
                url: '/partner/edit',
                method: 'PUT',
                body: partnerForEdit
            })
        }),
        deletePartner: builder.mutation<String, String>({
            query: (partnerForDelete) => ({
                url: '/partner/delete',
                method: 'DELETE',
                body: partnerForDelete
            })
        }),
        addContract: builder.mutation<TContract, TContractForAdd>({
            query: (contractForAdd) => ({
                url: '/contract/add',
                method: 'POST',
                body: contractForAdd
            })
        }),
        editContract: builder.mutation<TContract, TContractForEdit>({
            query: (contractForEdit) => ({
                url: '/contract/edit',
                method: 'PUT',
                body: contractForEdit
            })
        }),
        deleteContract: builder.mutation<TContractForDelete, TContractForDelete>({
            query: (contractForDelete) => ({
                url: '/contract/delete',
                method: 'DELETE',
                body: contractForDelete
            })
        })
    })
})


export const {
    useGetAllPartnersQuery,
    useAddPartnerMutation,
    useEditPartnerMutation,
    useDeletePartnerMutation,
    useAddContractMutation,
    useEditContractMutation,
    useDeleteContractMutation
} = partnersApi

export const { endpoints: {
    getAllPartners,
    addPartner,
    editPartner,
    deletePartner,
    addContract,
    editContract,
    deleteContract
} } = partnersApi