export const mockData = [
    {
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
        "onDelete": false,
        "createdContract": [
            {
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
                "createdAddendum": [],
                "createdOtherContractDocs": []
            },
            {
                "id": "238a869d-72a4-4865-83c9-c1cc445d7852",
                "contractNumber": "11/02",
                "contractDate": "2022-02-11T00:00:00.000Z",
                "contractTypeId": 4,
                "placeId": 2,
                "original": false,
                "cloudCopy": "https://altairsk.ru/index.php/f/621507",
                "partnerId": "4bde77cd-d58c-48e4-a93b-4a7f2f9c1876",
                "comments": "Второй договор первой фирмы",
                "status": true,
                "createdAt": "2024-01-01T07:11:42.000Z",
                "onDelete": false,
                "place": {
                    "name": "Головинское"
                },
                "contractType": {
                    "title": "Аренда"
                },
                "createdAddendum": [],
                "createdOtherContractDocs": [
                    {
                        "id": "0e9482c3-0568-4533-b772-50860abb1712",
                        "otherDocTypeId": 4,
                        "description": "Спецификация",
                        "contractId": "238a869d-72a4-4865-83c9-c1cc445d7852",
                        "original": true,
                        "cloudCopy": "ссылка",
                        "createdAt": "2024-01-02T15:11:40.233Z",
                        "onDelete": false,
                        "otherDocType": {
                            "title": "Спецификация"
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": "e2e64d79-1efc-43f7-b921-231545e2ba39",
        "name": "ООО \"Академия госаттестации\"",
        "shortName": "Академия госаттестации",
        "ogrn": "1191832005353",
        "ogrnDate": "2019-03-04T00:00:00.000Z",
        "inn": "1831193498",
        "kpp": "183101001",
        "address1": "426011, Удмуртская Республика, г. Ижевск, ул. Свободы, д. 173-Б, оф. 907",
        "address2": null,
        "email": "email@mail.com",
        "phone": "+7 914 543 0000",
        "bank": "р/с: 40702810163000000000 в Тверском отделении №8607 ПАО Сбербанк БИК 042809679 к/с: 30101810700000000000",
        "bossTitle": "директор",
        "boss": "Васильков Александр Владимирович",
        "bossGenitive": "Василькова Александра Владимировича",
        "comments": "Вторая тестовая фирма",
        "status": true,
        "createdAt": "2024-01-02T14:49:45.029Z",
        "onDelete": false,
        "createdContract": [
            {
                "id": "1be87706-bc0d-492a-9ddd-c478ac17d8aa",
                "contractNumber": "286.04-Р",
                "contractDate": "2021-05-11T00:00:00.000Z",
                "contractTypeId": 1,
                "placeId": 1,
                "original": true,
                "cloudCopy": "https://altairsk.ru/index.php/f/621509",
                "partnerId": "e2e64d79-1efc-43f7-b921-231545e2ba39",
                "comments": "Первый договор второй фирмы",
                "status": true,
                "createdAt": "2024-01-02T14:52:31.367Z",
                "onDelete": false,
                "place": {
                    "name": "--"
                },
                "contractType": {
                    "title": "--"
                },
                "createdAddendum": [],
                "createdOtherContractDocs": [
                    {
                        "id": "7b13d3ac-ca27-4083-b18e-fc5761f315c0",
                        "otherDocTypeId": 5,
                        "description": "Согласование контракта",
                        "contractId": "1be87706-bc0d-492a-9ddd-c478ac17d8aa",
                        "original": true,
                        "cloudCopy": "ссылка",
                        "createdAt": "2024-01-02T15:10:58.434Z",
                        "onDelete": false,
                        "otherDocType": {
                            "title": "Лист согласования"
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": "3963406e-9cb4-485d-94a1-1f86a7916607",
        "name": "Индивидуальный предприниматель Алексеевский Михаил Михайлович",
        "shortName": "Алексеевский М.М. ИП",
        "ogrn": "321508100199880",
        "ogrnDate": "2021-04-21T00:00:00.000Z",
        "inn": "505440971020",
        "kpp": null,
        "address1": "141092, Московская область, г. Королев, мкр. Юбилейный, ул. Лесная, д. 15/5, кв. 67",
        "address2": null,
        "email": "yuralgroup@mail.ru",
        "phone": "+7 926 777 8070",
        "bank": "р/с: 40702810163000000000 в Тверском отделении №8607 ПАО Сбербанк БИК 042809679 к/с: 30101810700000000000",
        "bossTitle": "индивидуальный предприниматель",
        "boss": "Алексеевский Михаил Михайлович",
        "bossGenitive": "Алексеевского Михаила Михайловича",
        "comments": "Тестовый ИП",
        "status": true,
        "createdAt": "2024-01-02T15:01:06.786Z",
        "onDelete": false,
        "createdContract": [
            {
                "id": "5bd217d4-967e-475e-97cc-02691f146141",
                "contractNumber": "01/06/ИП",
                "contractDate": "2022-06-01T00:00:00.000Z",
                "contractTypeId": 2,
                "placeId": 2,
                "original": true,
                "cloudCopy": "https://altairsk.ru/index.php/f/607063",
                "partnerId": "3963406e-9cb4-485d-94a1-1f86a7916607",
                "comments": "Первый договор ИП",
                "status": true,
                "createdAt": "2024-01-02T15:03:24.505Z",
                "onDelete": false,
                "place": {
                    "name": "Головинское"
                },
                "contractType": {
                    "title": "СМР"
                },
                "createdAddendum": [
                    {
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
                        },
                        "createdOtherAddendumDocs": [
                            {
                                "id": "52353b03-fa2c-4d9e-b0d2-c4ba771a0171",
                                "otherDocTypeId": 5,
                                "description": "Согласовано",
                                "addendumId": "844c43f9-7d3e-4b29-a197-4897fb6ae21b",
                                "original": true,
                                "cloudCopy": "ссылка",
                                "createdAt": "2024-01-02T15:09:19.568Z",
                                "onDelete": false,
                                "otherDocType": {
                                    "title": "Лист согласования"
                                }
                            }
                        ]
                    },
                    {
                        "id": "60b42840-4091-4b30-8fc4-aa0f7468561e",
                        "addendumNumber": "2",
                        "addendumDate": "2022-07-22T00:00:00.000Z",
                        "placeId": 2,
                        "original": false,
                        "cloudCopy": "https://altairsk.ru/index.php/f/607062",
                        "contractId": "5bd217d4-967e-475e-97cc-02691f146141",
                        "comments": null,
                        "createdAt": "2024-01-02T15:07:24.906Z",
                        "onDelete": false,
                        "place": {
                            "name": "Головинское"
                        },
                        "createdOtherAddendumDocs": [
                            {
                                "id": "36add87e-ee93-4819-a9df-9d747b65460b",
                                "otherDocTypeId": 5,
                                "description": "Подписи согласатов",
                                "addendumId": "60b42840-4091-4b30-8fc4-aa0f7468561e",
                                "original": false,
                                "cloudCopy": "ссылка",
                                "createdAt": "2024-01-02T15:10:01.545Z",
                                "onDelete": false,
                                "otherDocType": {
                                    "title": "Лист согласования"
                                }
                            }
                        ]
                    }
                ],
                "createdOtherContractDocs": []
            }
        ]
    }
]