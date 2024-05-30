import { useEffect, useState } from 'react'
import Select from 'react-select'
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
import axios from 'axios'

const capitalOption = [
  { value: 240, label: 'A partir de 240mil reais' },
  { value: 570, label: 'A partir de 570mil reais' },
]

const occupationOptions = [
  { value: 'Funcionário CLT', label: 'Funcionário CLT' },
  { value: 'Funcionário Público', label: 'Funcionário Público' },
  { value: 'Aposentado', label: 'Aposentado' },
  { value: 'Investidor', label: 'Investidor' },
  { value: 'Outro', label: 'Outro' },
]

type IBGEUFResponse = {
  sigla: string
  nome: string
}
type IBGECITYResponse = {
  id: number
  nome: string
}

export type CityProps = {
  id: number
  nome: string
}

export function Expansion() {
  const [imgBase64, setImgBase64] = useState('')
  const [ufs, setUfs] = useState([])
  const [cities, setCities] = useState([])
  const [selectedUf, setSelectedUf] = useState('0')
  const [selectedCity, setSelectedCity] = useState('0')

  useEffect(() => {
    if (selectedUf === '0') {
      return
    }
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf.value}/municipios`,
      )
      .then((response) => {
        setCities(response.data)
      })
  }, [selectedUf])

  useEffect(() => {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
      .then((response) => {
        setUfs(
          response.data.map((uf: IBGEUFResponse) => ({
            value: uf.sigla,
            label: uf.nome,
          })),
        )
      })
  }, [])

  function handleSelectUf(selectedOption) {
    setSelectedUf(selectedOption)
  }

  function handleSelectCity(selectedOption) {
    setSelectedCity(selectedOption)
  }

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
            <label>Estado:</label>
            <Select
              options={ufs}
              value={selectedUf}
              onChange={handleSelectUf}
              placeholder="Selecione uma UF"
            />
          </FormGroup>
          <FormGroup>
            <label>Cidade:</label>
            <Select
              options={cities.map((city: IBGECITYResponse) => ({
                value: city.nome,
                label: city.nome,
              }))}
              value={selectedCity}
              onChange={handleSelectCity}
              placeholder="Selecione uma cidade"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="capital">Qual capital para investimento:</label>
            <Select options={capitalOption} />
          </FormGroup>
          <FormGroup>
            <label htmlFor="occupation">Qual a sua ocupação atual:</label>
            <Select options={occupationOptions} />
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
          <h4>+ 275 cities</h4>
          <p>Nossa rede já possui franquias em mais de 275 cities.</p>
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
