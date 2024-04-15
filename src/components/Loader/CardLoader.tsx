import ContentLoader from 'react-content-loader'

export default function CardLoader() {
  return (
    <ContentLoader
      speed={2}
      width={450}
      height={550}
      viewBox='0 0 450 550'
      backgroundColor='#d0d1d2'
      foregroundColor='#50dbc4'
    >
      <rect x='20' y='20' rx='10' ry='10' width='400' height='500' />
    </ContentLoader>
  )
}
