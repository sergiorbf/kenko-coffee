import { styled } from 'styled-components'
import { TextPatterns } from '../../../../styles/TextPatterns'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 20px;
  width: 300px;
  height: 300px;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  text-align: center;
`
export const CoffeeImg = styled.img`
  align-self: center;
  max-width: 120px;
  max-height: 120px;
`
export const Tags = styled.div`
  display: flex;

  margin-top: 12px;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    ${TextPatterns.fonts.tag}
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
export const Title = styled.h3`
  margin-top: 16px;
  ${TextPatterns.fonts.titleS}
  color: ${({ theme }) => theme.colors['base-subtitle']};
`
export const Description = styled.span`
  margin-top: 8px;
  width: 100%;
  ${TextPatterns.fonts.textS}
  color: ${({ theme }) => theme.colors['base-label']};
`

export const CartControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 4px;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${TextPatterns.fonts.textS};
    color: ${({ theme }) => theme.colors['base-text']};
  }

  span:last-child {
    ${TextPatterns.fonts.titleM};
    color: ${({ theme }) => theme.colors['base-text']};
  }
`
export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme.colors['yellow-dark'] : theme.colors['red-japan']};
    border-radius: 6px;
    transition: background-color 0.2s;
    padding: 8px;
    display: flex;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.colors.yellow : theme.colors.red};
    }
  }
`
