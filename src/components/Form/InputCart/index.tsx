import { Plus, Minus } from '@phosphor-icons/react'
import { Container } from './styles'

type Props = {
  quantity: number
  incrementQuantity?: () => void
  decrementQuantity?: () => void
}

export function InputCart({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: Props) {
  return (
    <Container>
      <button onClick={decrementQuantity} aria-label="Decrement quantity">
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity} aria-label="Increment quantity">
        <Plus size={14} />
      </button>
    </Container>
  )
}
