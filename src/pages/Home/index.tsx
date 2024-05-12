import { useTheme } from 'styled-components'
import {
  CoffeeList,
  HomeContainer,
  HomeContent,
  Info,
  TitleContainer,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { coffees } from '../../../data.json'
import { Cards } from './components/Cards'

export function Home() {
  const theme = useTheme()
  return (
    <div>
      <HomeContainer>
        <HomeContent>
          <div>
            <TitleContainer>
              <h1> Desperte seus sentidos com o aroma KENKO!!!</h1>
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

          <img src="/images/hero.svg" alt="Café do Coffee Delivery" />
        </HomeContent>

        <img src="/images/hero-bg.svg" id="hero-bg" alt="" />
      </HomeContainer>

      <CoffeeList>
        <h2>Nossos cafés</h2>
        <div>
          {coffees.map((coffee) => (
            <Cards key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </div>
  )
}
