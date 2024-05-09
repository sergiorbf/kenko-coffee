import { Link } from 'react-router-dom'
import { Aside, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  const imgBase64: string =
    'data:image/png;base64,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'

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={imgBase64} alt="" title="Kenko Coffee"></img>
      </Link>

      <Aside>
        <div>
          {/* <Link to="/" title="Location"> */}
          <MapPin size={22} weight="fill" />
          {/* </Link> */}
          <span>Itajaí, SC</span>
        </div>

        <Link to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
        </Link>
      </Aside>
    </HeaderContainer>
  )
}
