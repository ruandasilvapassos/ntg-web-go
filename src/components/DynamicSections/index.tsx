import { useRouter } from 'next/router'

import { MainHero } from '@components/PageChunk/Homepage'

import { CTACard } from './Cards/CTACard'
import { ThumbnailCardSection } from './Cards/ThumbnailCard'
import { DynamicComponentType } from './ComponentType'
import { ContactForm } from './ContactForm'
import { ContentContainer } from './ContentContainer'
import { BackgroundHero } from './Hero/BackgroundHero'
import { BasicHero } from './Hero/BasicHero'
import { ContactInfo } from './Hero/ContactInfo'
import { FeaturedNews } from './Hero/FeaturedNews'
import { HeaderHero } from './Hero/HeaderHero'
import { HeroHighlight } from './Hero/HeroHighlight'
import { HeroSquareImage } from './Hero/HeroSquareImage'
import { HeroWithLogo } from './Hero/HeroWithLogo'
import { ItemHero } from './Hero/ItemHero'
import { SimpleHeroWithImage } from './Hero/SimpleWithImage'
import { SupportHero } from './Hero/SupportHero'
import { LogoClouds } from './LogoCloud'
import { MasonrySection } from './Masonry'
import { Quote } from './Quote'
import { Timeline } from './Timeline'

// Map Strapi sections to section components
const sectionComponents = {
  'layouts.header-with-customer': MainHero,
  'layouts.card': ThumbnailCardSection,
  'layouts.component-type': DynamicComponentType,
  'layouts.card-with-button': CTACard,
  'layouts.image-hero': SimpleHeroWithImage,
  'layouts.partner': LogoClouds,
  'layouts.bkg-header': BackgroundHero,
  'layouts.header': HeaderHero,
  'layouts.mansory-image': MasonrySection,
  'layouts.hero-circle-image': HeroWithLogo,
  'layouts.hero-highlight': HeroHighlight,
  'heros.hero': BasicHero,
  'layouts.item-hero': ItemHero,
  'layouts.step': Timeline,
  'layouts.quote': Quote,
  'layouts.hero-square-image': HeroSquareImage,
  'layouts.featured-news': FeaturedNews,
  'layouts.support-hero': SupportHero,
  'layouts.contact-info': ContactInfo,
  'layouts.contact': ContactForm,
  'layouts.content-container': ContentContainer
  // ComponentSectionsLargeVideo: LargeVideo,
  // ComponentSectionsFeatureColumnsGroup: FeatureColumnsGroup,
  // ComponentSectionsFeatureRowsGroup: FeatureRowsGroup,
  // ComponentSectionsBottomActions: BottomActions,
  // ComponentSectionsTestimonialsGroup: TestimonialsGroup,
  // ComponentSectionsRichText: RichText,
  // ComponentSectionsPricing: Pricing,
  // ComponentSectionsLeadForm: LeadForm,
} as const

// Display a section individually
const Section = ({ sectionData }: any) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__component as keyof typeof sectionComponents]

  if (!SectionComponent) {
    return null
  }

  // Display the section
  return <SectionComponent data={sectionData} />
}

const PreviewModeBanner = () => {
  const router = useRouter()
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(router.asPath)}`

  return (
    <div className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
      <div className="container">
        Preview mode is on.{' '}
        <a className="underline" href={exitURL}>
          Turn off
        </a>
      </div>
    </div>
  )
}

// Display the list of sections
interface SectionsProps {
  sections?: any[]
  preview?: 'preview' | 'live'
}
const Sections: React.FC<SectionsProps> = ({ sections, preview }) => {
  return (
    <div className="flex flex-col">
      {/* Show a banner if preview mode is on */}
      {preview && <PreviewModeBanner />}
      {/* Show the actual sections */}
      {sections?.map((section: any) => (
        <Section sectionData={section} key={`${section.__component}${section.id}`} />
      ))}
    </div>
  )
}

export default Sections
