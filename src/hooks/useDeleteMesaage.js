import { useMutation, useQueryClient } from 'react-query'
import { deleteMessage } from '../api'
export const useDeleteMessage = () => {
  const queryClient = useQueryClient()
  return useMutation((id) => deleteMessage(id), {
    onSuccess: () => queryClient.invalidateQueries('message'),
  })
}
