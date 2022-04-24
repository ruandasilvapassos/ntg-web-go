import { HorizontalTimeline } from './HorizontalTimeline'
import { VerticalTimeline } from './VerticalTimeline'

interface TimelineProps {
  data: {
    title?: string
    overview?: string
    button?: Component.Button
    item?: {
      title?: string
      description?: string
      image?: Strapi.Media
      buttonText?: string
      buttonUrl?: string
    }[]
    type: 'vertical' | 'horizontal'
  }
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const { title, overview, type, item } = data
  console.log(item)
  switch (type) {
    case 'vertical':
      return <VerticalTimeline title={title} description={overview} items={item} />
    case 'horizontal':
      return <HorizontalTimeline title={title} description={overview} items={item} />
    default:
      return <></>
  }
}
