import { Cards } from '../Cards'
import { CoffeeList } from './styles'
import { coffees } from '../../../data.json'

export function Menu() {
  return (
    <div>
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
