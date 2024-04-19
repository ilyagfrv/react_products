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

export type CartProductType = Pick<
  ProductType,
  'id' | 'image' | 'title' | 'price' | 'count'
>

export type FavoriteProductType = Pick<
  ProductType,
  'id' | 'image' | 'title' | 'price' | 'weight' | 'count'
>
