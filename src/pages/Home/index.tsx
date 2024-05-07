import { HomeContainer, TitleContainer } from './styles'
import homeImage from '../../assets/Imagem.png'
import items from '../../assets/Items.png'
import { Cards } from './components/Cards'

export function Home() {
  return (
    <HomeContainer>
      <TitleContainer>
        <h1> Desperte seus sentidos com o aroma KENKO!!!</h1>
        <h2>
          Com o Kenko Coffee Delivery você recebe seu café onde estiver, a
          qualquer hora.
        </h2>
        <img src={items} alt="" />
      </TitleContainer>
      <img src={homeImage} alt="" />

      <Cards />
    </HomeContainer>
  )
}
