import {
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
  FocusEvent,
  HTMLAttributes,
} from 'react'
import { FieldError } from 'react-hook-form'
import { Box, Container, ErrorMessage } from './styles'

export type ZipCodeProps = {
  bairro: string
  cep: string
  complemento: string
  ddd: string
  gia: string
  ibge: string
  localidade: string
  logradouro: string
  siafi: string
  uf: string
}

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  containerProps?: HTMLAttributes<HTMLDivElement>
  error?: FieldError
  isZipCode?: boolean
  onAddressData?: (data: ZipCodeProps) => void
}

export const TextInput = forwardRef(function TextInput(
  {
    optional,
    error,
    containerProps,
    onFocus,
    onBlur,
    onChange,
    onAddressData,
    isZipCode,
    ...rest
  }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false)
  let [newZipCode, setZipCode] = useState('')

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onBlur?.(event)
  }

  function handleChange(event: FocusEvent<HTMLInputElement, Element>) {
    newZipCode = event.target.value
    setZipCode(newZipCode)

    if (isZipCode && newZipCode.length === 8) {
      fetch(`https://viacep.com.br/ws/${newZipCode}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (onAddressData) {
            onAddressData(data)
          }
        })
        .catch((error) => console.log(error))
    }
    onChange?.(event)
  }

  return (
    <Box {...containerProps}>
      <Container data-state={isFocused ? 'focused' : 'blurred'}>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          ref={ref}
          {...rest}
        />

        {optional ? <span>Opcional</span> : null}
      </Container>
      {error?.message ? (
        <ErrorMessage role="alert">{error.message}</ErrorMessage>
      ) : null}
    </Box>
  )
})
