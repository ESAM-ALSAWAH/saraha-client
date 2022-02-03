import { useQuery } from 'react-query'
import { getAllMessage } from '../api'
export const useMessage = (UserId) => {
  const { data, isLoading, isError } = useQuery(
    'message',
    async () => {
      const { data } = await getAllMessage(UserId).then((res) => res.data)
      return data
    },
    {
      refetchOnmount: true,
    },
  )

  return { data, isLoading, isError }
}
