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
    createdContract: [{}]
}

export type TResponseAddPartner = TPartner & { token: string }

export type TBaseInfo = {
    contractTypes: [],
    otherDocTypes: [],
    constractionPlace: []
}