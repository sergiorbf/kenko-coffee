import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

export const TextWrapper = styled.div`
  flex: 1;
  margin-right: 20px;
`

export const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const Button = styled.button`
  padding: 10px;
  /* background-color: #fff; */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`
