import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Container, Heading, Info, InfoContent, Order } from './styles'
import { useTheme } from 'styled-components'

export function Checkout() {
  const theme = useTheme()

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
                  Entrega em <strong></strong>
                </span>

                <span></span>
              </div>
            </div>

            <div>
              <Timer
                size={32}
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.brown }}
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
                style={{ backgroundColor: theme.colors.brown }}
              />

              <div>
                <span>Pagamento na entrega</span>

                <strong></strong>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>

      <img src="/images/delivery.svg" alt="Pedido concluído" />
    </Container>
  )
}
