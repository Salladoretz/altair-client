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
    }
})

export const { clear } = slice.actions

export default slice.reducer

export const selectPartner = (state: RootState) => state.partners