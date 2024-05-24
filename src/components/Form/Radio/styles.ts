import { styled } from 'styled-components'
import { TextPatterns } from '../../../styles/TextPatterns'

export const Container = styled.label`
  display: flex;
  padding: 1rem;
  width: 100%;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  text-transform: uppercase;
  ${TextPatterns.fonts.buttonM}
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.colors['brown-light']};
    border-color: ${({ theme }) => theme.colors.brown};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors.brown};
  }
`
