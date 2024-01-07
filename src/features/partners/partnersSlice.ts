import { TPartner } from '../../types'
import { createSlice } from '@reduxjs/toolkit'
import { partnersApi } from '../../app/services/partners'
import { RootState } from '../../app/store'


interface InitialState {
    partners: TPartner[] | null
}

const initialState: InitialState = {
    partners: null
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
            .addMatcher(partnersApi.endpoints.editPartner.matchFulfilled, (state, action) => {
                let index = state.partners?.findIndex(el => el.id === action.payload.id)
                if (state.partners && index) { state.partners[index] = action.payload }
            })
    }
})

export const { clear } = slice.actions

export default slice.reducer

export const selectPartner = (state: RootState) => state.partners