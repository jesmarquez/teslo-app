import { useQuery } from '@tanstack/react-query'
import { getProductsActions } from '../actions/get-products.action'

export const useProducts = () => {

  return useQuery({
    queryKey: ['products'],
    queryFn: getProductsActions,
    
  })
}
