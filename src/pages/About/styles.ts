import styled from 'styled-components'
import { TextPatterns } from '../../styles/TextPatterns'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 2.5em;
  ${TextPatterns.fonts.titleXL}
  color: ${({ theme }) => theme.colors['yellow-light']};
  margin-bottom: 20px;
  background: url('../../../images/coffeeAbout.jpg') no-repeat center
    center/cover;
  background-blend-mode: darken;
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  span {
    position: relative;
    z-index: 2;
  }
`

export const Text = styled.p`
  font-size: 1.2em;
  ${TextPatterns.fonts.textL}
  line-height: 1.6;
  margin-bottom: 40px;
  color: #555;
  max-width: 800px;
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
