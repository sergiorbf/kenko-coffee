import { useContext } from 'react'
import { MarketContext } from '../contexts/MarketContext'

export function useCart() {
  return useContext(MarketContext)
}
