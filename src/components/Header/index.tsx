import { Link } from 'react-router-dom'
import { Aside, FranchiseButton, HeaderContainer, NavLinks } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { FaSpotify, FaBuilding } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export function Header() {
  const [imgBase64, setImgBase64] = useState('')

  useEffect(() => {
    const fetchBase64Image = async () => {
      const response = await fetch('../../../images/base64Image.txt')
      const base64String = await response.text()
      setImgBase64(`data:image/png;base64,${base64String}`)
    }
    fetchBase64Image()
  }, [])

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={imgBase64} alt="" title="Kenko Coffee"></img>
      </Link>

      <NavLinks>
        <Link to="/" title="Início">
          Início
        </Link>
        <Link to="/menu" title="Cardápio">
          Cardápio
        </Link>
        <Link to="/about" title="Sobre Nós">
          Sobre Nós
        </Link>
        <Link to="/contact" title="Contato">
          Contato
        </Link>
        <a
          href="https://open.spotify.com/playlist/7LdIv0NxBwjUWg9s2zEKRQ?si=b374886dfe9340ed"
          target="_blank"
          rel="noopener noreferrer"
          title="Playlist no Spotify"
        >
          <FaSpotify size={22} />
        </a>
        <FranchiseButton type="button">
          <FaBuilding size={22} /> Seja um franqueado
        </FranchiseButton>
      </NavLinks>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Itajaí, SC</span>
        </div>

        <Link to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
        </Link>
      </Aside>
    </HeaderContainer>
  )
}
