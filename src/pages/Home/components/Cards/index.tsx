import { ShoppingCart } from 'phosphor-react'

type Props = {
  coffee: {
    id: string
    image: string
    title: string
    tags: string[]
    description: string
    price: number
  }
}

export function Cards({ coffee }: Props) {
  return (
    <div key={coffee.id}>
      <div>
        <img src={coffee.image} alt={coffee.title} width="100" height="100" />
      </div>
      <div>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div>
        <h4>{coffee.title}</h4>
      </div>
      <div>{coffee.description}</div>
      <div>
        <span>R$</span>
        <span>{coffee.price.toFixed(2)}</span>
      </div>
      <div>
        <ShoppingCart weight="fill" size={22} />
      </div>
    </div>
  )
}
