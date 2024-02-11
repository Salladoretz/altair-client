import { api } from './api'
import { TPartner, TContract, TAddendum, TOtherContractDoc } from '../../types'


type TPartnerForAdd = Omit<TPartner, 'id' | 'createdContract'>
type TPartnerForEdit = Omit<TPartner, 'createdContract'>

type TContractForAdd = Omit<TContract, 'id' | 'createdAddendum' | 'createdOtherContractDocs'>
type TContractForEdit = Omit<TContract, 'createdAddendum' | 'createdOtherContractDocs'>
type TContractForDelete = {
    id: string,
    partnerId: string
}

type TAddendumForAdd = Omit<TAddendum, 'id' | 'createdOtherAddendumDocs'>
type TAddendumForEdit = Omit<TAddendum, 'createdOtherAddendumDocs'>
type TAddendumForDelete = {
    id: string,
    partnerId: string,
    contractId: string
}

type TOtherContractDocAdd = Omit<TOtherContractDoc, 'id'>
type TOtherContractDocDelete = {
    id: string,
    partnerId: string,
    contractId: string
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
        }),
        addAddendum: builder.mutation<TAddendum, TAddendumForAdd>({
            query: (addendumForAdd) => ({
                url: '/addendum/add',
                method: 'POST',
                body: addendumForAdd
            })
        }),
        editAddendum: builder.mutation<TAddendum, TAddendumForEdit>({
            query: (addendumForEdit) => ({
                url: '/addendum/edit',
                method: 'PUT',
                body: addendumForEdit
            })
        }),
        deleteAddendum: builder.mutation<TAddendumForDelete, string>({
            query: (addendumForDelete) => ({
                url: '/addendum/delete',
                method: 'DELETE',
                body: addendumForDelete
            })
        }),
        addOtherContractDoc: builder.mutation<TOtherContractDoc, TOtherContractDocAdd>({
            query: (otherContractDocForAdd) => ({
                url: '/othercontractdoc/add',
                method: 'POST',
                body: otherContractDocForAdd
            })
        }),
        editOtherContractDoc: builder.mutation<TOtherContractDoc, TOtherContractDoc>({
            query: (otherContractDocForEdit) => ({
                url: '/othercontractdoc/edit',
                method: 'PUT',
                body: otherContractDocForEdit
            })
        }),
        deleteOtherContractDoc: builder.mutation<TOtherContractDocDelete, string>({
            query: (otherContractDocForDelete) => ({
                url: '/othercontractdoc/delete',
                method: 'DELETE',
                body: otherContractDocForDelete
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
    useDeleteContractMutation,
    useAddAddendumMutation,
    useEditAddendumMutation,
    useDeleteAddendumMutation,
    useAddOtherContractDocMutation,
    useEditOtherContractDocMutation,
    useDeleteOtherContractDocMutation
} = partnersApi

export const { endpoints: {
    getAllPartners,
    addPartner,
    editPartner,
    deletePartner,
    addContract,
    editContract,
    deleteContract,
    addAddendum,
    editAddendum,
    deleteAddendum,
    addOtherContractDoc,
    editOtherContractDoc,
    deleteOtherContractDoc
} } = partnersApi