import {
  Container,
  FormWrapper,
  TextWrapper,
  Form,
  Input,
  Button,
} from './styles'

export function Expansion() {
  return (
    <Container>
      <TextWrapper>
        <h1>Seja franqueado da maior rede de cafeterias do Brasil!</h1>
        <p>
          Invista em uma marca com história, credibilidade, solidez, alta
          rentabilidade e que soma mais de 900 unidades em todo o Brasil.
        </p>
      </TextWrapper>
      <FormWrapper>
        <Form>
          <label>
            Nome:
            <Input type="text" name="name" />
          </label>
          <label>
            Email:
            <Input type="email" name="email" />
          </label>
          <label>
            Telefone:
            <Input type="tel" name="phone" />
          </label>
          <label>
            Cidade:
            <Input type="text" name="city" />
          </label>
          <label>
            Qual capital para investimento:
            <Input type="text" name="capital" />
          </label>
          <label>
            Qual a sua ocupação atual:
            <Input type="text" name="occupation" />
          </label>
          <Button type="submit">Quero saber mais</Button>
        </Form>
      </FormWrapper>
    </Container>
  )
}
