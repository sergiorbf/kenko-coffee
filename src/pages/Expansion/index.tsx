import { useEffect, useState } from 'react'
import AsyncSelect from 'react-select/async'
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
  // StyledSelect,
  // SelectWrapper,
} from './styles'
import { FaHome, FaBuilding, FaMapMarkedAlt } from 'react-icons/fa'

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

export type CityProps = {
  id: number
  nome: string
}

type SelectItem = {
  label: string
  value: number
}

export function Expansion() {
  const [imgBase64, setImgBase64] = useState('')
  const [selectedCity, setSelectedCity] = useState<SelectItem | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchBase64Image = async () => {
      const response = await fetch('../../../images/base64Image.txt')
      const base64String = await response.text()
      setImgBase64(`data:image/png;base64,${base64String}`)
    }
    fetchBase64Image()
  }, [])

  const loadOptions = async (inputValue: string) => {
    try {
      const response = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome&nome=${encodeURIComponent(inputValue)}`,
      )
      const data: CityProps[] = await response.json()
      const comboCities: SelectItem[] = data
        // .slice(0, 200)
        .map((city: CityProps) => ({
          label: city.nome,
          value: city.id,
        }))
      return comboCities
    } catch (error) {
      console.error('Erro ao buscar cidades filtradas:', error)
      return []
    }
  }

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
            <AsyncSelect
              value={selectedCity}
              cacheOptions
              defaultOptions
              loadOptions={loadOptions}
              onInputChange={setSearchTerm}
              onChange={(selectedOption) => setSelectedCity(selectedOption)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="capital">Qual capital para investimento:</label>
            <Select options={capitalOption} />
            {/* <SelectWrapper>
              <StyledSelect id="capital" name="capital">
                <option value="" disabled selected>
                  Selecione
                </option>
                <option value="240">A partir de 240mil reais</option>
                <option value="570">A partir de 570mil reais</option>
              </StyledSelect>
            </SelectWrapper> */}
          </FormGroup>
          <FormGroup>
            <label htmlFor="occupation">Qual a sua ocupação atual:</label>
            <Select options={occupationOptions} />
            {/* <SelectWrapper>
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
            </SelectWrapper> */}
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
