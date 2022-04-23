import { useRouter } from 'next/router'

import { MainHero } from '@components/PageChunk/Homepage'

import { CTACard } from './Cards/CTACard'
import { ThumbnailCardSection } from './Cards/ThumbnailCard'
import { DynamicComponentType } from './ComponentType'
import { SimpleHeroWithImage } from './Hero/SimpleWithImage'
import { LogoClouds } from './LogoCloud'

// Map Strapi sections to section components
const sectionComponents = {
  'layouts.header-with-customer': MainHero,
  'layouts.card': ThumbnailCardSection,
  'layouts.component-type': DynamicComponentType,
  'layouts.card-with-button': CTACard,
  'layouts.image-hero': SimpleHeroWithImage,
  'layouts.partner': LogoClouds
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
