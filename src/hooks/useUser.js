import { useQuery } from 'react-query'
import { getUser } from '../api'
export const useUser = (id) => {
  const { data, isLoading, isError } = useQuery(
    'user',
    async () => {
      const { data } = await getUser(id).then((res) => res.data)
      return data
    },
    {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  )

  return { data, isLoading, isError }
}
