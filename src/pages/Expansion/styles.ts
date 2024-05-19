import styled from 'styled-components'
import { TextPatterns } from '../../styles/TextPatterns'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: auto;
  min-height: 100vh;
  background: url('../../../images/coffeeWallpaper.jpg') no-repeat center
    center/cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  z-index: 2;
  margin-left: 5rem;
`
export const TextWrapper = styled.div`
  margin-top: 20px;
  text-align: left;

  > h1 {
    ${TextPatterns.fonts.titleXL}
    color: ${({ theme }) => theme.colors['yellow-light']};
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  }

  > p {
    ${TextPatterns.fonts.titleL}
    color: ${({ theme }) => theme.colors['yellow-light']};
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  }
`
export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  z-index: 2;
  margin-left: 20px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  > h4 {
    ${TextPatterns.fonts.titleL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }
`

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors['brown-light']};
  border-radius: 4px;
`

export const Button = styled.button`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors['brown-dark']};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: ${TextPatterns.fonts.textL};

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${TextPatterns.fonts.textL};
  color: ${({ theme }) => theme.colors['base-subtitle']};
`
export const AdditionalContent = styled.div`
  position: absolute;
  top: 100%;
  color: ${({ theme }) => theme.colors['base-title']};
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`
export const Card = styled.div`
  width: 300px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  flex-direction: column;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-light']};
    cursor: pointer;
  }

  > h4 {
    ${TextPatterns.fonts.titleL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  p {
    ${TextPatterns.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const Icon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;

  svg {
    fill: ${({ theme }) => theme.colors.yellow};
  }
`