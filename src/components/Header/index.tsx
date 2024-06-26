import { Link } from 'react-router-dom'
import { Aside, FranchiseButton, HeaderContainer, NavLinks } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { FaSpotify, FaBuilding } from 'react-icons/fa'
import { useEffect, useState, useContext } from 'react'
import { useCart } from '../../Hooks/useCart'
import { MarketContext } from '../../contexts/MarketContext'

export function Header() {
  const [imgBase64, setImgBase64] = useState('')
  const [address, setAddress] = useState('')
  const { cart } = useCart()
  const { location } = useContext(MarketContext)

  useEffect(() => {
    const fetchBase64Image = async () => {
      const response = await fetch('../../../images/base64Image.txt')
      const base64String = await response.text()
      setImgBase64(`data:image/png;base64,${base64String}`)
    }
    fetchBase64Image()
  }, [])

  useEffect(() => {
    if (location.latitude && location.longitude) {
      const fetchAddress = async () => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.latitude}&lon=${location.longitude}`,
          )
          const data = await response.json()
          setAddress(data.address.city + ', ' + data.address.state)
        } catch (error) {
          console.error('Error fetching address:', error)
        }
      }
      fetchAddress()
    }
  }, [location])

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
        <a href="/expansion" target="_blank" rel="noreferrer">
          <FranchiseButton type="button">
            <FaBuilding size={22} /> Seja um franqueado
          </FranchiseButton>
        </a>
        <a
          className="spotify"
          href="https://open.spotify.com/playlist/7LdIv0NxBwjUWg9s2zEKRQ?si=b374886dfe9340ed"
          target="_blank"
          title="Playlist no Spotify"
          rel="noreferrer"
        >
          <FaSpotify size={22} />
        </a>
      </NavLinks>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>{address || ''}</span>
        </div>

        <Link to="/cart" aria-disabled={cart.length === 0} title="Checkout">
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>
    </HeaderContainer>
  )
}
