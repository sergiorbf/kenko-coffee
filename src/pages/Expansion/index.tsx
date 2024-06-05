import { useEffect, useState } from 'react'
import Select, { SingleValue } from 'react-select'
import emailjs from 'emailjs-com'
import {
  Container,
  LeftWrapper,
  TextWrapper,
  FormWrapper,
  Form,
  Input,
  Button,
  FormGroup,
} from './styles'
import axios from 'axios'
import { z } from 'zod'

const capitalOption = [
  { value: '240', label: 'A partir de 240mil reais' },
  { value: '570', label: 'A partir de 570mil reais' },
]

const occupationOptions = [
  { value: 'Funcionário CLT', label: 'Funcionário CLT' },
  { value: 'Funcionário Público', label: 'Funcionário Público' },
  { value: 'Aposentado', label: 'Aposentado' },
  { value: 'Investidor', label: 'Investidor' },
  { value: 'Outro', label: 'Outro' },
]

type IBGEResponse = {
  id: number
  nome: string
}

export type SelectOption = {
  value: string
  label: string
}

const newMailSchema = z.object({
  name: z.string().min(1, 'Informe o seu nome'),
  email: z.string().email('Informe um e-mail válido'),
  phone: z.string().min(1, 'Informe o número do celular'),
  state: z.string().min(1, 'Informe a UF'),
  city: z.string().min(1, 'Informe a cidade'),
  capitalInvest: z.string().min(1, 'Informe o capital'),
  occupation: z.string().min(1, 'Informe a sua ocupação'),
})

export function Expansion() {
  const [imgBase64, setImgBase64] = useState('')
  const [ufs, setUfs] = useState<SelectOption[]>([])
  const [cities, setCities] = useState<SelectOption[]>([])
  const [selectedUf, setSelectedUf] = useState<SelectOption | null>(null)
  const [selectedCity, setSelectedCity] = useState<SelectOption | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    capitalInvest: '',
    occupation: '',
  })

  useEffect(() => {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
      .then((response) => {
        const sortedUfs = response.data
          .map((uf: IBGEResponse) => ({
            value: uf.id.toString(),
            label: uf.nome,
          }))
          .sort((a: SelectOption, b: SelectOption) =>
            a.label.localeCompare(b.label),
          )
        setUfs(sortedUfs)
      })
  }, [])

  useEffect(() => {
    if (!selectedUf) {
      return
    }
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf.value}/municipios`,
      )
      .then((response) => {
        const sortedCities = response.data
          .map((city: IBGEResponse) => ({
            value: city.id.toString(),
            label: city.nome,
          }))
          .sort((a: SelectOption, b: SelectOption) =>
            a.label.localeCompare(b.label),
          )
        setCities(sortedCities)
      })
  }, [selectedUf])

  function handleSelectUf(newValue: SingleValue<SelectOption>) {
    setSelectedUf(newValue)
    setSelectedCity(null)
    setFormData({
      ...formData,
      state: newValue ? newValue.label : '',
      city: '',
    })
  }

  function handleSelectCity(newValue: SingleValue<SelectOption>) {
    setSelectedCity(newValue)
    setFormData({ ...formData, city: newValue ? newValue.label : '' })
  }

  useEffect(() => {
    const fetchBase64Image = async () => {
      const response = await fetch('../../../images/base64Image.txt')
      const base64String = await response.text()
      setImgBase64(`data:image/png;base64,${base64String}`)
    }
    fetchBase64Image()
  }, [])

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSelectChange(name: string, value: SingleValue<SelectOption>) {
    setFormData({ ...formData, [name]: value ? value.label : '' })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const result = newMailSchema.safeParse(formData)

    if (!result.success) {
      alert('Por favor, preencha todos os campos corretamente.')
      return
    }

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then(
        (result) => {
          console.log(result.text)
          alert('Email enviado com sucesso!')
        },
        (error) => {
          console.log(error.text)
          alert('Erro ao enviar email. Tente novamente mais tarde.')
        },
      )
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
        <Form onSubmit={handleSubmit}>
          <h4>
            SAIBA COMO SER UM FRANQUEADO KENKO COFFEE E TER SUA PRÓPRIA UNIDADE
          </h4>

          <FormGroup>
            <label>Nome:</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Email:</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Telefone:</label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(DDD)"
            />
          </FormGroup>

          <FormGroup>
            <label>Estado:</label>
            <Select
              options={ufs}
              value={selectedUf}
              onChange={(value) => handleSelectUf(value)}
              placeholder="Selecione uma UF"
              name="state"
            />
          </FormGroup>

          <FormGroup>
            <label>Cidade:</label>
            <Select
              options={cities}
              value={selectedCity}
              onChange={(value) => handleSelectCity(value)}
              placeholder={
                selectedUf ? 'Selecione uma cidade' : 'Selecione uma UF'
              }
              isDisabled={!selectedUf}
              name="city"
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="capital">Qual capital para investimento:</label>
            <Select
              options={capitalOption}
              placeholder="Selecione"
              name="capitalInvest"
              onChange={(value) => handleSelectChange('capitalInvest', value)}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="occupation">Qual a sua ocupação atual:</label>
            <Select
              options={occupationOptions}
              placeholder="Selecione"
              name="occupation"
              onChange={(value) => handleSelectChange('occupation', value)}
            />
          </FormGroup>

          <Button type="submit">Quero saber mais</Button>
        </Form>
      </FormWrapper>
    </Container>
  )
}
