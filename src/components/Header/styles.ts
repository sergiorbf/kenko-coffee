import styled from 'styled-components'
import { TextPatterns } from '../../styles/TextPatterns'

export const HeaderContainer = styled.header`
  max-width: 100%;
  padding: 32px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLinks = styled.nav`
  display: flex;
  gap: 16px;

  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors['base-text']};
    text-decoration: none;
    font-size: 16px;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors['base-hover']};
    }

    svg {
      margin-left: 4px;
      color: ${({ theme }) => theme.colors['spotify-green']};
    }
  }
`

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: ${({ theme }) => theme.colors['brown-dark']};
    padding: 10px 8px;
    border-radius: 6px;
    transition: background-color 0.3s; /* Adicionando transição para suavizar a mudança de cor */

    &:hover {
      background-color: ${({ theme }) =>
        theme.colors.brown}; /* Alterando a cor de fundo no hover */
    }

    svg {
      color: ${({ theme }) => theme.colors['brown-light']};
    }

    span {
      color: ${({ theme }) => theme.colors['brown-light']};
    }
  }

  a {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
    padding: 8px;
    border-radius: 6px;
    position: relative;

    &[aria-disabled='true'] {
      pointer-events: none;
    }

    span {
      ${TextPatterns.fonts.textS};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`

export const FranchiseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: ${({ theme }) =>
    theme.colors['base-button']}; /* Cor de fundo do botão */
  color: ${({ theme }) =>
    theme.colors['base-text']}; /* Cor do texto do botão */
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
  cursor: pointer;

  svg {
    margin-left: 8px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-button-hover']};
  }
`
