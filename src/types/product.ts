export type ProductType = {
  id: number
  title: string
  price: number
  image: string
  brand: string
  weight: number
  category: string
  country: string
  count: number
  expirationDate: string
}

export type SimplifiedProductType = Pick<
  ProductType,
  'id' | 'image' | 'title' | 'price' | 'count'
>
