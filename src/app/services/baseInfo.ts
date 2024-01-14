import { api } from './api'
import { TBaseInfo } from '../../types'


export const baseInfoApi = api.injectEndpoints({

    endpoints: (builder) => ({
        getBaseInfo: builder.query<TBaseInfo, void>({
            query: () => ({
                url: '/base-info',
                method: 'GET'
            })
        })
    })
})

export const { useGetBaseInfoQuery } = baseInfoApi

export const { endpoints: { getBaseInfo } } = baseInfoApi