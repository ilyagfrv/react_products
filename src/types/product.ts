export type Product = {
  id: number
  title: string
  price: number
  image: string
  brand: string
  weight: number
  category: string
  country: string
  count: number
}

export type SpecialProduct = Pick<
  Product,
  'id' | 'image' | 'title' | 'price' | 'count'
>
