import { useTheme } from 'styled-components'
import { HomeContainer, HomeContent, Info, TitleContainer } from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  const theme = useTheme()
  return (
    <div>
      <HomeContainer>
        <HomeContent>
          <div>
            <TitleContainer>
              <h1>Desperte seus sentidos com o aroma KENKO!!!</h1>
              <h2>
                Com o Kenko Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora.
              </h2>
            </TitleContainer>

            <Info>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['yellow-dark'] }}
                />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['brown-dark'] }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>

          <img src="/images/hero.svg" alt="Café do Kenko Coffee" />
        </HomeContent>
      </HomeContainer>
    </div>
  )
}
