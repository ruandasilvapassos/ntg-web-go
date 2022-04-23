import { FeaturedProduct, ProductList } from '@components/Section'

import { Testimonies } from '../Testimonies'

interface ComponentTypeProps {
  data: {
    __component: string
    title?: string
    overview?: string
    component_type?: string
    label: null
  }
}

export const DynamicComponentType: React.FC<ComponentTypeProps> = ({ data }) => {
  const { title, overview, component_type } = data
  switch (component_type) {
    case 'product':
      return <ProductList title={title} description={overview} />
    case 'testimoni':
      return <Testimonies title={title} description={overview} />
    case 'featured_product':
      return <FeaturedProduct title={title} description={overview} />
    default:
      return <></>
  }
}
