import styled from 'styled-components'
import { TextPatterns } from '../../styles/TextPatterns'

export const HeaderContainer = styled.header`
  max-width: 100%;
  padding: 32px 20px;
  /* margin: 0 auto; */

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Aside = styled.aside`
  display: flex;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    background-color: ${({ theme }) => theme.colors['yellow-light']};

    svg {
      color: ${({ theme }) => theme.colors['red-japan']};
    }

    span {
      color: ${({ theme }) => theme.colors['red-japan']};
    }

    padding: 10px 8px;
    border-radius: 6px;
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
