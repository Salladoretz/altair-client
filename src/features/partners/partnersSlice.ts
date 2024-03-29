import { TPartner } from '../../types'
import { createSlice } from '@reduxjs/toolkit'
import { partnersApi } from '../../app/services/partners'
import { RootState } from '../../app/store'


interface InitialState {
    partners: TPartner[]
}

const initialState: InitialState = {
    partners: []
}

const slice = createSlice({
    name: 'partners',
    initialState,
    reducers: {
        clear: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(partnersApi.endpoints.getAllPartners.matchFulfilled, (state, action) => {
                state.partners = action.payload
            })
            .addMatcher(partnersApi.endpoints.addPartner.matchFulfilled, (state, action) => {
                state.partners.push(action.payload)
            })
            .addMatcher(partnersApi.endpoints.editPartner.matchFulfilled, (state, action) => {
                let index = state.partners.findIndex(el => el.id === action.payload.id)
                if (index !== -1) { state.partners[index] = action.payload }
            })
            .addMatcher(partnersApi.endpoints.deletePartner.matchFulfilled, (state, action) => {
                state.partners = state.partners.filter(el => el.id !== action.payload)
            })
            .addMatcher(partnersApi.endpoints.addContract.matchFulfilled, (state, action) => {
                let indexPartner = state.partners.findIndex(el => el.id === action.payload.partnerId)
                if (indexPartner !== -1) { state.partners[indexPartner].createdContract.push(action.payload) }
            })
            .addMatcher(partnersApi.endpoints.editContract.matchFulfilled, (state, action) => {
                let indexPartner = state.partners.findIndex(el => el.id === action.payload.partnerId)
                let indexContract = state.partners[indexPartner].createdContract.findIndex(el => el.id === action.payload.id)
                if (indexContract !== -1) { state.partners[indexPartner].createdContract[indexContract] = action.payload }
            })
            .addMatcher(partnersApi.endpoints.deleteContract.matchFulfilled, (state, action) => {
                let indexPartner = state.partners.findIndex(el => el.id === action.payload.partnerId)
                state.partners[indexPartner].createdContract = state.partners[indexPartner].createdContract.filter(el => el.id !== action.payload.id)
            })
            .addMatcher(partnersApi.endpoints.addAddendum.matchFulfilled, (state, action) => {
                let indexPartner = state.partners.findIndex(el => el.id === action.payload.partnerId)
                let indexContract = state.partners[indexPartner].createdContract.findIndex(el => el.id === action.payload.contractId)
                if (indexContract !== -1) { state.partners[indexPartner].createdContract[indexContract].createdAddendum.push(action.payload) }
            })
            .addMatcher(partnersApi.endpoints.editAddendum.matchFulfilled, (state, action) => {
                let indexPartner = state.partners.findIndex(el => el.id === action.payload.partnerId)
                let indexContract = state.partners[indexPartner].createdContract.findIndex(el => el.id === action.payload.contractId)
                let indexAddendum = state.partners[indexPartner].createdContract[indexContract].createdAddendum.findIndex(el => el.id === action.payload.id)
                if (indexAddendum !== -1) { state.partners[indexPartner].createdContract[indexContract].createdAddendum[indexAddendum] = action.payload }
            })
            .addMatcher(partnersApi.endpoints.deleteAddendum.matchFulfilled, (state, action) => {
                let indexPartner = state.partners.findIndex(el => el.id === action.payload.partnerId)
                let indexContract = state.partners[indexPartner].createdContract.findIndex(el => el.id === action.payload.contractId)
                state.partners[indexPartner].createdContract[indexContract].createdAddendum = state.partners[indexPartner].createdContract[indexContract].createdAddendum.filter(el => el.id !== action.payload.id)
            })
            .addMatcher(partnersApi.endpoints.addOtherContractDoc.matchFulfilled, (state, action) => {
                let indexPartner = state.partners.findIndex(el => el.id === action.payload.partnerId)
                let indexContract = state.partners[indexPartner].createdContract.findIndex(el => el.id === action.payload.contractId)
                if (indexContract !== -1) { state.partners[indexPartner].createdContract[indexContract].createdOtherContractDocs.push(action.payload) }
            })
            .addMatcher(partnersApi.endpoints.editOtherContractDoc.matchFulfilled, (state, action) => {
                let indexPartner = state.partners.findIndex(el => el.id === action.payload.partnerId)
                let indexContract = state.partners[indexPartner].createdContract.findIndex(el => el.id === action.payload.contractId)
                let indexOtherContractDoc = state.partners[indexPartner].createdContract[indexContract].createdOtherContractDocs.findIndex(el => el.id === action.payload.id)
                if (indexOtherContractDoc !== -1) { state.partners[indexPartner].createdContract[indexContract].createdOtherContractDocs[indexOtherContractDoc] = action.payload }
            })
            .addMatcher(partnersApi.endpoints.deleteOtherContractDoc.matchFulfilled, (state, action) => {
                let indexPartner = state.partners.findIndex(el => el.id === action.payload.partnerId)
                let indexContract = state.partners[indexPartner].createdContract.findIndex(el => el.id === action.payload.contractId)
                state.partners[indexPartner].createdContract[indexContract].createdOtherContractDocs = state.partners[indexPartner].createdContract[indexContract].createdOtherContractDocs.filter(el => el.id !== action.payload.id)
            })
    }
})

export const { clear } = slice.actions

export default slice.reducer

export const selectPartner = (state: RootState) => state.partners