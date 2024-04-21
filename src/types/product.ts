export type ProductType = {
  id: number
  title: string
  price: number
  image: string
  brand: string
  count: number
  weight: number
  category: string
  country: string
  expirationDate: string
}

// export type CartProductType = Pick<
//   ProductType,
//   'id' | 'image' | 'title' | 'price' | 'weight' | 'count'
// >

// export type FavoriteProductType = Pick<
//   ProductType,
//   'id' | 'image' | 'title' | 'price' | 'weight' | 'count'
// >

export type SimplifiedProductType = Pick<
  ProductType,
  'id' | 'image' | 'title' | 'price' | 'weight' | 'count'
>
