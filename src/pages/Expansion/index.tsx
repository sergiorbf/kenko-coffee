// Aqui estará o código JSX que você já possui até agora
import { useEffect, useState } from 'react'
import {
  Container,
  LeftWrapper,
  TextWrapper,
  FormWrapper,
  Form,
  Input,
  Button,
  FormGroup,
  AdditionalContent,
  Icon,
  Card,
} from './styles'
import { FaHome, FaBuilding, FaMapMarkedAlt } from 'react-icons/fa'
export function Expansion() {
  const [imgBase64, setImgBase64] = useState('')

  useEffect(() => {
    const fetchBase64Image = async () => {
      const response = await fetch('../../../images/base64Image.txt')
      const base64String = await response.text()
      setImgBase64(`data:image/png;base64,${base64String}`)
    }
    fetchBase64Image()
  }, [])

  return (
    <Container>
      <LeftWrapper>
        <img src={imgBase64} alt="" title="Kenko Coffee" />
        <TextWrapper>
          <h1>Seja franqueado da maior rede de cafeterias do Brasil!</h1>
          <p>
            Invista em uma marca com história, credibilidade, solidez, alta
            rentabilidade e que soma mais de 900 unidades em todo o Brasil.
          </p>
        </TextWrapper>
      </LeftWrapper>

      <FormWrapper>
        <Form>
          <h4>
            SAIBA COMO SER UM FRANQUEADO KENKO COFFEE E TER SUA PRÓPRIA UNIDADE
          </h4>
          <FormGroup>
            <label>Nome:</label>
            <Input type="text" name="name" />
          </FormGroup>
          <FormGroup>
            <label>Email:</label>
            <Input type="email" name="email" />
          </FormGroup>
          <FormGroup>
            <label>Telefone:</label>
            <Input type="tel" name="phone" />
          </FormGroup>
          <FormGroup>
            <label>Cidade:</label>
            <Input type="text" name="city" />
          </FormGroup>
          <FormGroup>
            <label>Qual capital para investimento:</label>
            <Input type="text" name="capital" />
          </FormGroup>
          <FormGroup>
            <label>Qual a sua ocupação atual:</label>
            <Input type="text" name="occupation" />
          </FormGroup>
          <Button type="submit">Quero saber mais</Button>
        </Form>
      </FormWrapper>
      <AdditionalContent>
        <Card>
          <Icon>
            <FaHome size={80} />
          </Icon>
          <h4>+900 Franquias</h4>
          <p>Somos mais de 900 franquias espalhadas em todos os estados.</p>
        </Card>
        <Card>
          <Icon>
            <FaBuilding size={80} />
          </Icon>
          <h4>+ 280 Cidades</h4>
          <p>Nossa rede já possui franquias em mais de 280 cidades.</p>
        </Card>
        <Card>
          <Icon>
            <FaMapMarkedAlt size={80} />
          </Icon>
          <h4>27 Estados</h4>
          <p>Presentes em todos os estados do Brasil e o Distrito Federal.</p>
        </Card>
      </AdditionalContent>
    </Container>
  )
}
