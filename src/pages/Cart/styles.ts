import { styled } from 'styled-components'
import { TextPatterns } from '../../styles/TextPatterns'

export const Container = styled.div`
  display: flex;
  max-width: 1160px;
  padding: 40px 20px;
  margin: 0 auto;
  gap: 32px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    ${TextPatterns.fonts.titleXS}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`
export const FormsContainer = styled.div`
  padding: 40px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  width: 100%;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AddressContainer = styled(FormsContainer)``

export const Heading = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    span {
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    p {
      ${TextPatterns.fonts.textS}
    }
  }
`

export const AddressHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'zipCode . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-gap: 2rem 0.75rem;
`
export const PaymentContainer = styled(FormsContainer)``

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme.colors.brown};
  }
`
export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
`
export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 4rem;
      height: 4rem;
    }

    display: flex;
    align-items: stretch;
    gap: 1.25rem;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`
export const CartTotal = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 0.375rem 2.25rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  min-width: 28rem;

  > span {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme.colors['base-button']};
    margin: 1.5rem 0;
  }
`
export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${TextPatterns.fonts.textS}
    }

    span:last-child {
      ${TextPatterns.fonts.textM}
    }
  }

  div:last-child {
    span {
      ${TextPatterns.fonts.textL};
      font-weight: bold;
    }
  }
`
export const CoffeeInfo = styled.div`
  display: flex;
`
export const CheckoutButton = styled.button`
  width: 100%;
  text-transform: uppercase;
  ${TextPatterns.fonts.buttonG}
  transition: all 0.2s;
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-top: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;
  margin-left: 1rem; /* Adiciona espaço à esquerda */

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  span {
    ${TextPatterns.fonts.textS}
  }
`

export const PaymentErrorMessage = styled.p`
  ${TextPatterns.fonts.textXS}
  font-weight: 400;
  color: red;
`
