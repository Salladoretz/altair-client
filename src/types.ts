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
    shortname: string,
    createdContract: [{}]
}