import ContentLoader from 'react-content-loader'

export default function CardLoader() {
  return (
    <ContentLoader
      speed={2}
      width={450}
      height={550}
      viewBox='0 0 450 550'
      backgroundColor='#f3f4f6'
      foregroundColor='#fcbc44'
    >
      <rect x='20' y='20' rx='10' ry='10' width='400' height='500' />
    </ContentLoader>
  )
}