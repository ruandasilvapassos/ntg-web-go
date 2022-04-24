import { FeaturedProduct, ProductList } from '@components/Section'

import { CareerList } from '../Lists/CareerList'
import { NewsList } from '../Lists/NewsList'
import { NewsWithCategoryList } from '../Lists/NewsWithCategoryList'
import { ServicesList } from '../Lists/ServicesList'
import { Testimonies } from '../Testimonies'

interface ComponentTypeProps {
  data: {
    __component: string
    title?: string
    overview?: string
    componentType?: string
    label: null
    button?: Component.Link[]
    style?: any
  }
}

export const DynamicComponentType: React.FC<ComponentTypeProps> = ({ data }) => {
  const { title, overview, componentType, button } = data

  switch (componentType) {
    case 'product':
      return <ProductList title={title} description={overview} />
    case 'testimoni':
      return <Testimonies title={title} description={overview} />
    case 'featured_product':
      return <FeaturedProduct title={title} description={overview} button={button?.[0]} />
    case 'career':
      return <CareerList title={title} />
    case 'latest_insight':
      return <NewsList title={title} />
    case 'insight':
      return <NewsWithCategoryList title={title} />
    case 'service':
      return <ServicesList title={title} description={overview} />
    default:
      return <></>
  }
}
