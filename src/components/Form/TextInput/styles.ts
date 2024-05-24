import { styled } from 'styled-components'
import { TextPatterns } from '../../../styles/TextPatterns'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.375rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background-color: ${({ theme }) => theme.colors['base-input']};
  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  &[data-state='blurred'] {
    border-color: ${({ theme }) => theme.colors['base-button']};
  }

  input {
    color: ${({ theme }) => theme.colors['base-text']};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 0.75rem;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }

  span {
    padding: 0.75rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors['base-label']};
    ${TextPatterns.fonts.textS}
  }
`

export const ErrorMessage = styled.p`
  ${TextPatterns.fonts.textXS};
  font-weight: 400;
  color: red;
`
