import styled from 'styled-components'

export const Container = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  button {
    background-color: transparent;
    display: flex;
    align-items: center;

    justify-content: center;
    border: none;
    cursor: pointer;
    padding: 1px;
    border-radius: 50%;
    transition:
      background-color 0.2s,
      transform 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors['base-hover']};
      transform: scale(1.1);
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors['base-focus']};
      outline-offset: 2px;
    }

    svg {
      color: ${({ theme }) => theme.colors['brown-dark']};
      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors['brown-dark']};
      }
    }
  }

  span {
    min-width: 24px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`
