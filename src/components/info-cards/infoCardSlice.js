import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    infoCard: []
}

const infoCardSlice = createSlice({
    name: 'infoCards',
    initialState,
    reducers: {
        toggleCard: (state, action) => {
            let index = state.infoCard.findIndex(el => el.id === action.payload.id)
            index < 0
                ? state.infoCard.push(action.payload)
                : state.infoCard.splice(index, 1)
        },
        addInfoCard: (state, action) => {
            state.infoCard.push(action.payload)
        },
        removeInfoCard: (state, action) => {
            let index = state.infoCard.findIndex(el => el.id === action.payload)
            state.infoCard.splice(index, 1)
        },
        removeAllInfoCard: (state) => {
            state.infoCard.splice(0, state.infoCard.length)
        }
    }
})

export const { toggleCard, addInfoCard, removeInfoCard, removeAllInfoCard } = infoCardSlice.actions

export default infoCardSlice.reducer