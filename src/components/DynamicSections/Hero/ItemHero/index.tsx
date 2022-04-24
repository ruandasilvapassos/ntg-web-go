import { WithoutImage } from './WithoutImage'

interface ItemHeroProps {
  data: {
    title?: string
    overview?: string
    button?: Component.Button
    item?: {
      title?: string
      overview?: string
      image?: Strapi.Media
    }[]
    style: 'with_image' | 'without_image'
  }
}

export const ItemHero: React.FC<ItemHeroProps> = ({ data }) => {
  const { title, overview, style, item } = data
  switch (style) {
    case 'without_image':
      return <WithoutImage title={title} overview={overview} item={item} />
    default:
      return <></>
  }
}
