import styled from 'styled-components'
import { TextPatterns } from '../../styles/TextPatterns'

export const HeaderContainer = styled.header`
  max-width: 100%;
  padding: 32px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`
export const NavLinks = styled.nav`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }

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

    @media screen and (max-width: 768px) {
      margin-bottom: 10px;
    }
  }

  a.spotify {
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  div {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: ${({ theme }) => theme.colors['brown-dark']};
    padding: 10px 8px;
    border-radius: 6px;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.brown};
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
  background-color: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
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

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`
