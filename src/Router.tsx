import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Menu } from './pages/CoffeeList'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { Expansion } from './pages/Expansion'
import { Cart } from './pages/Cart'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/order/:orderId/checkout" element={<Checkout />}></Route>
      </Route>
      <Route path="/expansion" element={<Expansion />}></Route>
    </Routes>
  )
}
