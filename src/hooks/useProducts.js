import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/api'

export function useProducts(params) {
  return useQuery({
    queryKey: ['products', params || {}],
    queryFn: () => api.listProducts(),
    staleTime: 60_000,
  })
}

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: api.listCategories,
    staleTime: 5 * 60_000,
  })
}
