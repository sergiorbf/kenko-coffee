import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const Content = styled.div`
  text-align: center;

  .cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
`

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`

export const CardLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  text-decoration: none;

  span {
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  &.linkedin:hover {
    color: #0073b1;
  }

  &.github:hover {
    color: #333;
  }

  &.instagram:hover {
    color: #e4405f;
  }
`
