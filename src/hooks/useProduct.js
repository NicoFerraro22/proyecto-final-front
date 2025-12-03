import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/api'

export function useProduct(id) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => api.getProduct(id),
    enabled: !!id,
    staleTime: 60_000,
  })
}
