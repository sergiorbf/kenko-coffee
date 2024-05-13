import { ShoppingCart } from 'phosphor-react'
import {
  CartControl,
  CoffeeImg,
  Container,
  Description,
  Price,
  Tags,
  Title,
} from './styles'

type Props = {
  coffee: {
    id: string
    image: string
    title: string
    tags: string[]
    description: string
    price: number
  }
}

export function Cards({ coffee }: Props) {
  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <CartControl>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>
      </CartControl>
      <div>
        <ShoppingCart weight="fill" size={22} />
      </div>
    </Container>
  )
}
