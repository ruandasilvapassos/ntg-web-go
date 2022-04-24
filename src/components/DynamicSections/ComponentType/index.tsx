import { FeaturedProduct, ProductList } from '@components/Section'

import { CareerList } from '../Lists/CareerList'
import { Testimonies } from '../Testimonies'

interface ComponentTypeProps {
  data: {
    __component: string
    title?: string
    overview?: string
    componentType?: string
    label: null
  }
}

export const DynamicComponentType: React.FC<ComponentTypeProps> = ({ data }) => {
  const { title, overview, componentType } = data
  switch (componentType) {
    case 'product':
      return <ProductList title={title} description={overview} />
    case 'testimoni':
      return <Testimonies title={title} description={overview} />
    case 'featured_product':
      return <FeaturedProduct title={title} description={overview} />
    case 'career':
      return <CareerList title={title} />
    default:
      return <></>
  }
}
