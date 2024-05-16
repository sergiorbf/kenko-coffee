import { styled } from 'styled-components'
import { TextPatterns } from '../../../../styles/TextPatterns'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;

  text-align: center;
`
export const CoffeeImg = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`
export const Tags = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
    text-transform: uppercase;
    ${TextPatterns.fonts.tag}
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
      $itemAdded ? theme.colors['yellow-dark'] : theme.colors['brown-dark']};
    transition:
      background-color 0.2s ease,
      transform 0.2s ease;
    border-radius: 6px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.colors.yellow : theme.colors.brown};
      transform: scale(1.05);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    svg {
      transition: color 0.2s ease;
    }
  }
`
