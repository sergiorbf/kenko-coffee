import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const Content = styled.div`
  text-align: center;

  .cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      gap: 10px;
      margin-top: 10px;
    }
  }
`

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.2s;
  flex: 1;
  min-width: 150px;
  max-width: 200px;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 15px;
    min-width: 120px;
    max-width: 150px;
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

    @media (max-width: 768px) {
      font-size: 14px;
    }
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
