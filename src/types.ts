export type TErrorWithMessage = {
    status: number,
    data: {
        message: string
    }
}

export type TUser = {
    id: string,
    nickname: string,
    name: string,
    password: string
}

export type TPartner = {
    id: string,
    name: string,
    shortName: string,
    ogrn: string,
    ogrnDate: string,
    inn: number,
    kpp: number,
    address1: string,
    address2: string,
    email: string,
    phone: string,
    bank: string,
    bossTitle: string,
    boss: string,
    comments: string,
    status: boolean,
    onDelete: boolean
    createdContract: TContract[]
}


export type TContract = {
    id: string,
    contractNumber: string,
    contractDate: string,
    contractTypeId: number,
    contractSubject: string,
    contractAmount: number,
    contractPeriod: string,
    contractMaterials: boolean,
    placeId: number,
    original: boolean,
    cloudCopy: string,
    partnerId: string,
    comments: string,
    status: boolean,
    createdAddendum: TAddendum[],
    createdOtherContractDocs: TOtherContractDoc[]
}

export type TAddendum = {
    id: string,
    addendumNumber: string,
    addendumDate: string,
    addendumSubject: string,
    addendumAmount: number,
    increaseTotalAmmount: boolean,
    placeId: number,
    original: boolean,
    cloudCopy: string,
    contractId: string,
    partnerId: string,
    comments: string
}

export type TOtherContractDoc = {
    id: string,
    otherDocTypeId: number,
    description: string,
    placeId: number,
    original: boolean,
    cloudCopy: string,
    contractId: string,
    partnerId: string
}


export type TBaseInfo = {
    contractTypes: [],
    otherDocTypes: [],
    constractionPlace: []
}