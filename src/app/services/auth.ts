import { api } from './api'
import { TUser } from '../../types'


export type UserForLogin = Omit<TUser, 'id' | 'name'>

type ResponseLoginData = TUser & { token: string }

export const authApi = api.injectEndpoints({

    endpoints: (builder) => ({
        login: builder.mutation<ResponseLoginData, UserForLogin>({
            query: (userForLogin) => ({
                url: '/user/login',
                method: 'POST',
                body: userForLogin
            })
        }),

        register: builder.mutation<ResponseLoginData, UserForLogin>({
            query: (userForLogin) => ({
                url: '/user/register',
                method: 'POST',
                body: userForLogin
            })
        }),

        current: builder.query<ResponseLoginData, void>({
            query: () => ({
                url: '/user/current',
                method: 'GET'
            })
        })
    })
})

export const { useLoginMutation, useRegisterMutation, useCurrentQuery } = authApi

export const { endpoints: { login, register, current } } = authApi