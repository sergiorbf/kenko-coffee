import { styled } from 'styled-components'
import { TextPatterns } from '../../styles/TextPatterns'

export const Container = styled.main`
  display: flex;
  margin: 0 auto;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2.5rem;

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
  border-color: transparent;
  background-origin: border-box;
`
export const InfoContent = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
