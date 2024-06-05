import styled from 'styled-components'
import { TextPatterns } from '../../styles/TextPatterns'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 40px;
  }

  @media (min-width: 1024px) {
    padding: 60px;
  }
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  z-index: 2;
  margin-left: 5rem;

  @media (max-width: 768px) {
    margin-left: 0;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 1024px) {
    margin-left: 8rem;
  }
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

  @media (max-width: 768px) {
    > h1,
    > p {
      ${TextPatterns.fonts.titleL}
    }
  }

  @media (max-width: 1024px) {
    > h1 {
      font-size: 2.5rem;
    }

    > p {
      font-size: 1.25rem;
    }
  }
`

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  margin-left: 20px;
  flex: 1;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 0 20px;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    margin-left: 40px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow-y: auto;

  > h4 {
    ${TextPatterns.fonts.titleL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  @media (max-width: 1366px) {
    max-height: 500px;
  }

  @media (min-width: 1024px) {
    max-width: 600px;
    max-height: auto;
    padding: 30px;
    font-size: 1.25rem;
  }
`

export const Input = styled.input`
  padding: 0.625rem;
  height: 2.375rem;
  border: 1px solid ${({ theme }) => theme.colors['brown-light']};
  border-radius: 4px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (min-width: 1024px) {
    padding: 14px;
    font-size: 1.125rem;
  }
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

  @media (max-width: 768px) {
    padding: 14px;
  }

  @media (min-width: 1024px) {
    padding: 16px;
    font-size: 1.125rem;
  }
`

export const FormGroup = styled.div`
  display: flex;
  margin-bottom: 0.625rem;
  flex-direction: column;
  font-size: ${TextPatterns.fonts.textL};
  color: ${({ theme }) => theme.colors['base-subtitle']};

  @media (min-width: 1024px) {
    margin-bottom: 1rem;
    font-size: 1.125rem;
  }
`
