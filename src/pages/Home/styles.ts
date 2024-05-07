import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 90rem;
  margin: 5rem 0;
  height: 34rem;
  flex: 1;
  display: flex;
  align-items: normal;
  justify-content: left;
  gap: 15rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const TitleContainer = styled.div`
  font-family: 'Baloo 2', monospace;
  h1 {
    width: 36.75rem;
    height: 7.75rem;
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 0;
  }

  h2 {
    display: flex;
    margin-top: 0;
    font-size: 1.5rem;
    font-weight: 400;
    height: 3.25rem;
  }

  img {
    margin-top: 3rem;
    width: 35.438rem;
    height: 5.25rem;
  }
`
