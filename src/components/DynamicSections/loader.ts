import { AccordionContent } from './AccordionContent'
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
import { MainHero } from './Hero/MainHero'
import { SimpleHero } from './Hero/SimpleHero'
import { SimpleHeroWithImage } from './Hero/SimpleWithImage'
import { SupportHero } from './Hero/SupportHero'
import { LogoClouds } from './LogoCloud'
import { MasonrySection } from './Masonry'
import { Quote } from './Quote'
import { Timeline } from './Timeline'

export const sectionComponents = {
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
  'layouts.hero': BasicHero,
  'layouts.item-hero': ItemHero,
  'layouts.step': Timeline,
  'layouts.quote': Quote,
  'layouts.hero-square-image': HeroSquareImage,
  'layouts.featured-news': FeaturedNews,
  'layouts.support-hero': SupportHero,
  'layouts.contact-info': ContactInfo,
  'layouts.contact': ContactForm,
  'layouts.content-container': ContentContainer,
  'layouts.accordion-content': AccordionContent,
  'layouts.simple-hero': SimpleHero
} as const
