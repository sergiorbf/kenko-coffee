import { CheckFat, ShoppingCart } from '@phosphor-icons/react'
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
import { InputCart } from '../../components/Form/InputCart'
import { useEffect, useState } from 'react'
import { useCart } from '../../Hooks/useCart'

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
  const [isItemAdded, setIsItemAdded] = useState(false)
  const theme = useTheme()
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

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
          <InputCart
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <CheckFat
                weight="fill"
                size={22}
                color={theme.colors['base-card']}
              />
            ) : (
              <ShoppingCart
                size={22}
                color={theme.colors['base-card']}
                weight="fill"
              />
            )}
          </button>
        </Order>
      </CartControl>
    </Container>
  )
}
