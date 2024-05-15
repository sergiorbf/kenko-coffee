import { Plus, Minus, CheckFat, ShoppingCart } from '@phosphor-icons/react'
import {
  CartControl,
  CoffeeImg,
  Container,
  Description,
  Order,
  Price,
  Tags,
  Title,
} from './styles'
import { useTheme } from 'styled-components'

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
  const isItemAdded = false
  const theme = useTheme()
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
        <Order $itemAdded={isItemAdded}>
          <div>
            <button>
              <Minus size={14} />
            </button>
            <span>qtt</span>
            <button>
              <Plus size={14} />
            </button>
          </div>

          <button disabled={isItemAdded}>
            {isItemAdded ? (
              <CheckFat
                weight="fill"
                size={22}
                color={theme.colors['base-card']}
              />
            ) : (
              <ShoppingCart size={22} color={theme.colors['base-card']} />
            )}
          </button>
        </Order>
      </CartControl>
    </Container>
  )
}
