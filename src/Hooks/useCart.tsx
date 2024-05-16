import { useContext } from 'react'
import { MarketContextProvider } from '../contexts/MarketContext'

export function useCart() {
  return useContext(MarketContextProvider)
}
