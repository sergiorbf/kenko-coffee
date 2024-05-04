import { HomeContainer, TitleContainer } from './styles'
import homeImage from '../../assets/Imagem.png'
// import items from '../../assets/Items.png'

export function Home() {
  return (
    <HomeContainer>
      <TitleContainer>
        <span>
          Desperte seus sentidos com o aroma KENKO!!!
          <h2>
            Com o Kenko Coffee Delivery você recebe seu café onde estiver, a
            qualquer hora.
          </h2>
        </span>
      </TitleContainer>
      <img src={homeImage} alt="" width={476} height={360} />
      {/* <img src={items} alt="" width={567} height={84} /> */}
    </HomeContainer>
  )
}
