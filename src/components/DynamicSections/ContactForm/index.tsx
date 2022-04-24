import { ContactFormWithBackground } from './WithBackground'
import { ContactFormWithoutBackground } from './WithoutBackground'

interface ContactFormProps {
  data: {
    title?: string
    overview?: string
    style: 'with_background' | 'without_background'
    background: Strapi.Media
  }
}

export const ContactForm: React.FC<ContactFormProps> = ({ data }) => {
  const { title, overview, style, background } = data
  switch (style) {
    case 'with_background':
      return <ContactFormWithBackground title={title} overview={overview} image={background} />
    case 'without_background':
      return <ContactFormWithoutBackground title={title} overview={overview} />
    default:
      return <></>
  }
}
