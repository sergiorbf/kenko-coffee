import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Container, Heading, Info, InfoContent, Order } from './styles'
import { useTheme } from 'styled-components'
import { useCart } from '../../Hooks/useCart'
import { useParams } from 'react-router-dom'

export function Checkout() {
  const theme = useTheme()
  const { orders } = useCart()
  const { orderId } = useParams()
  const orderInfo = orders.find((order) => order.id === Number(orderId))
  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
    pix: 'PIX',
  }

  if (!orderInfo?.id) {
    return null
  }

  return (
    <Container>
      <Order>
        <Heading>
          <h2>Uhu! Pedido confirmado</h2>
          <span>
            Agora é só aguardar que logo o café chegará quentinho até você
          </span>
        </Heading>

        <Info>
          <InfoContent>
            <div>
              <MapPin
                size={32}
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.brown }}
              />

              <div>
                <span>
                  Entrega em{' '}
                  <strong>
                    {orderInfo.street}, {orderInfo.number}
                  </strong>
                </span>

                <span>
                  {orderInfo.neighborhood} - {orderInfo.city},{orderInfo.state}
                </span>
              </div>
            </div>

            <div>
              <Timer
                size={32}
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.yellow }}
              />

              <div>
                <span>Previsão de entrega</span>

                <strong> 20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar
                size={32}
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
              />

              <div>
                <span>Pagamento na entrega</span>

                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>

      <img src="/images/delivery.svg" alt="Pedido concluído" />
    </Container>
  )
}
