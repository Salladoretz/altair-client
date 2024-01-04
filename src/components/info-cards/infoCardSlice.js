import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    infoCard: [{
        "id": "4bde77cd-d58c-48e4-a93b-4a7f2f9c1876",
        "name": "ООО \"Абсолют-строй\"",
        "shortName": "Абсолют-строй",
        "ogrn": "1175074011969",
        "ogrnDate": "2017-08-11T00:00:00.000Z",
        "inn": "5036168415",
        "kpp": "503601001",
        "address1": "142100, Московская область, г. Подольск, ул. Комсомольская, д. 1, стр. 4, пом. 5, оф. 102Л",
        "address2": "Адрес 2",
        "email": "email@mail.com",
        "phone": "+7 914 543 0000",
        "bank": "р/с: 40702810163000000000 в Тверском отделении №8607 ПАО Сбербанк БИК 042809679 к/с: 30101810700000000000",
        "bossTitle": "Директор",
        "boss": "Сирида Анатолий Владимирович",
        "bossGenitive": "Сирида Анатолия Владимировича",
        "comments": "Тестовая фирма",
        "status": true,
        "createdAt": "2024-01-01T07:11:42.000Z",
        "onDelete": false
    }, {
        "id": "548bcff2-9f53-479c-b609-4af2a550a2ad",
        "contractNumber": "12/01",
        "contractDate": "2022-01-17T00:00:00.000Z",
        "contractTypeId": 4,
        "placeId": 2,
        "original": true,
        "cloudCopy": "https://altairsk.ru/index.php/f/607010",
        "partnerId": "4bde77cd-d58c-48e4-a93b-4a7f2f9c1876",
        "comments": "Первая фирма",
        "status": true,
        "createdAt": "2024-01-01T07:11:42.000Z",
        "onDelete": false,
        "place": {
            "name": "Головинское"
        },
        "contractType": {
            "title": "Аренда"
        },
        "createdAddendum": []
    }, {
        "id": "844c43f9-7d3e-4b29-a197-4897fb6ae21b",
        "addendumNumber": "1",
        "addendumDate": "2022-07-21T00:00:00.000Z",
        "placeId": 2,
        "original": true,
        "cloudCopy": "https://altairsk.ru/index.php/f/607061",
        "contractId": "5bd217d4-967e-475e-97cc-02691f146141",
        "comments": "Первый допник",
        "createdAt": "2024-01-02T15:05:40.914Z",
        "onDelete": false,
        "place": {
            "name": "Головинское"
        }
    }]
}

const infoCardSlice = createSlice({
    name: 'infoCards',
    initialState,
    reducers: {
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

export const { addInfoCard, removeInfoCard, removeAllInfoCard } = infoCardSlice.actions

export default infoCardSlice.reducer