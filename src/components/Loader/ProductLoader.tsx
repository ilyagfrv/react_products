import ContentLoader from 'react-content-loader'

export const ProductLoader = () => (
  <ContentLoader
    speed={2}
    width={1000}
    height={550}
    viewBox='0 0 2000 950'
    backgroundColor='#d0d1d2'
    foregroundColor='#50dbc4'
  >
    <rect x='200' y='100' rx='5' ry='5' width='600' height='100' />
    <rect x='950' y='100' rx='5' ry='5' width='1000' height='100' />
    <rect x='200' y='250' rx='5' ry='5' width='650' height='600' />
    <rect x='950' y='300' rx='5' ry='5' width='1000' height='130' />
    <rect x='950' y='450' rx='5' ry='5' width='1000' height='130' />
    <rect x='950' y='600' rx='5' ry='5' width='1000' height='130' />
  </ContentLoader>
)
