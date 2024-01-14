import { createSlice } from '@reduxjs/toolkit'
import { baseInfoApi } from '../../app/services/baseInfo'


const initialState = {
    baseInfo: {
        contractTypes: [],
        otherDocTypes: [],
        constractionPlace: []
    }
}

const baseInfoSlice = createSlice({
    name: 'baseInfo',
    initialState,
    reducers: {
        clear: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(baseInfoApi.endpoints.getBaseInfo.matchFulfilled, (state, action) => {
                state.baseInfo = action.payload
            })
    }
})

export const { clear } = baseInfoSlice.actions

export default baseInfoSlice.reducer