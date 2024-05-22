import { styled } from 'styled-components'
import { TextPatterns } from '../../../styles/TextPatterns'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const Container = styled.label`
  display: flex;
`

export const ErrorMessage = styled.p`
  ${TextPatterns.fonts.textXS};
  font-weight: 400;
  color: red;
`
