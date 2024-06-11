import { styled } from 'styled-components'
import { TextPatterns } from '../../styles/TextPatterns'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;

  text-align: center;

  @media (max-width: 1200px) {
    width: 220px;
    padding: 0 15px 15px;
  }

  @media (max-width: 992px) {
    width: 180px;
    padding: 0 10px 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px 10px;
  }
`
export const CoffeeImg = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;

  @media (max-width: 1200px) {
    max-width: 100px;
    max-height: 100px;
  }

  @media (max-width: 992px) {
    max-width: 80px;
    max-height: 80px;
  }

  @media (max-width: 768px) {
    max-width: 60px;
    max-height: 60px;
  }
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

    @media (max-width: 1200px) {
      padding: 3px 6px;
      font-size: 14px;
    }

    @media (max-width: 992px) {
      padding: 2px 5px;
      font-size: 13px;
    }

    @media (max-width: 768px) {
      padding: 2px 4px;
      font-size: 12px;
    }
  }
`
export const Title = styled.h3`
  margin-top: 16px;
  ${TextPatterns.fonts.titleS}
  color: ${({ theme }) => theme.colors['base-subtitle']};

  @media (max-width: 1200px) {
    margin-top: 12px;
    font-size: 20px;
  }

  @media (max-width: 992px) {
    margin-top: 10px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    margin-top: 8px;
    font-size: 16px;
  }
`
export const Description = styled.span`
  margin-top: 8px;
  width: 100%;
  ${TextPatterns.fonts.textS}
  color: ${({ theme }) => theme.colors['base-label']};

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 992px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`
export const CartControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 4px;

  @media (max-width: 1200px) {
    flex-direction: row;
    gap: 8px;
  }

  @media (max-width: 992px) {
    flex-direction: row;
    gap: 6px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`
export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${TextPatterns.fonts.textS};
    color: ${({ theme }) => theme.colors['base-text']};

    @media (max-width: 1200px) {
      font-size: 16px;
    }

    @media (max-width: 992px) {
      font-size: 15px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  span:last-child {
    ${TextPatterns.fonts.titleM};
    color: ${({ theme }) => theme.colors['base-text']};

    @media (max-width: 1200px) {
      font-size: 20px;
    }

    @media (max-width: 992px) {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
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

    @media (max-width: 1200px) {
      padding: 6px;
    }

    @media (max-width: 992px) {
      padding: 4px;
    }

    @media (max-width: 768px) {
      padding: 6px;
    }
  }
`
