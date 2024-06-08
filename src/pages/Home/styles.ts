import styled from 'styled-components'
import { TextPatterns } from '../../styles/TextPatterns'

export const HomeContainer = styled.section`
  position: relative;
`

export const HomeContent = styled.div`
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 32px;

    > div {
      gap: 32px;
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    ${TextPatterns.fonts.titleXL}
    color: ${({ theme }) => theme.colors['base-title']}
  }

  > span {
    ${TextPatterns.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  > h2 {
    ${TextPatterns.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  @media (max-width: 768px) {
    > h1 {
      font-size: 1.5rem;
    }

    > h2 {
      font-size: 1.25rem;
    }
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`
