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
  StyledSelect,
  SelectWrapper,
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
            <SelectWrapper>
              <StyledSelect id="city" name="city">
                <option value="" disabled selected>
                  Selecione
                </option>
                <option value="Itajaí">Itajaí, SC</option>
                <option value="Balneário Camboriú">
                  Balneário Camboriú, SC
                </option>
              </StyledSelect>
            </SelectWrapper>
          </FormGroup>
          <FormGroup>
            <label htmlFor="capital">Qual capital para investimento:</label>
            <SelectWrapper>
              <StyledSelect id="capital" name="capital">
                <option value="" disabled selected>
                  Selecione
                </option>
                <option value="240">A partir de 240mil reais</option>
                <option value="570">A partir de 570mil reais</option>
              </StyledSelect>
            </SelectWrapper>
          </FormGroup>
          <FormGroup>
            <label htmlFor="occupation">Qual a sua ocupação atual:</label>
            <SelectWrapper>
              <StyledSelect id="occupation" name="occupation">
                <option value="" disabled selected>
                  Selecione
                </option>
                <option value="Empreendedor/Empresário">
                  Empreendedor/Empresário
                </option>
                <option value="Funcionário CLT">Funcionário CLT</option>
                <option value="Funcionário Público">Funcionário Público</option>
                <option value="Aposentado">Aposentado</option>
                <option value="Investidor">Investidor</option>
                <option value="Outro">Outro</option>
              </StyledSelect>
            </SelectWrapper>
          </FormGroup>
          <Button type="submit">Quero saber mais</Button>
        </Form>
      </FormWrapper>
      <AdditionalContent>
        <Card>
          <Icon>
            <FaHome size={80} />
          </Icon>
          <h4>+660 Franquias</h4>
          <p>Somos mais de 660 franquias espalhadas em todos os estados.</p>
        </Card>
        <Card>
          <Icon>
            <FaBuilding size={80} />
          </Icon>
          <h4>+ 275 Cidades</h4>
          <p>Nossa rede já possui franquias em mais de 275 cidades.</p>
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
