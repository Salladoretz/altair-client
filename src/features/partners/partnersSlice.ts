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
                state.partners = action.payload;
            })
    }
})

export const { clear } = slice.actions

export default slice.reducer

export const selectPartner = (state: RootState) => state.partners