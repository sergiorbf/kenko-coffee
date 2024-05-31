import { styled } from 'styled-components'
import { TextPatterns } from '../../styles/TextPatterns'

export const Container = styled.main`
  display: flex;
  margin: 0 auto;
  max-width: 72.5rem;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2.5rem;
  padding: 5rem 1.25rem;

  img {
    margin-bottom: -13px;
  }
`
export const Order = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const Heading = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;

  h2 {
    ${TextPatterns.fonts.titleL}
    color: ${({ theme }) => theme.colors['yellow-dark']}
  }

  span {
    ${TextPatterns.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }
`
export const Info = styled.div`
  border: 1px solid;
  width: 100%;
  border-radius: 0.375rem 2.25rem;
  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.brown})`};
`
export const InfoContent = styled.div`
  padding: 2.5rem;
  border-radius: 0.375rem 2.25rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > svg {
      padding: 0.5rem;
      border-radius: 999px;
    }

    > div div {
      display: flex;
      flex-direction: column;
    }
  }
`
