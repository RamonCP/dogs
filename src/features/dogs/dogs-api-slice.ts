import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Dog {
  id: string
  name: string
  image: {
    url: string
  }
}

const API_KEY: string = process.env.REACT_APP_API_KEY!

export const dogsApi = createApi({
  reducerPath: 'dogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('x-api-key', API_KEY)
      return headers
    }
  }),
  endpoints: (builder) => ({
    fetchDogs: builder.query<Dog[], number>({
      query(page = 0) {
        return `/breeds?limit=9&page=${page}`
      }
    })
  })
})

export const { useFetchDogsQuery } = dogsApi
