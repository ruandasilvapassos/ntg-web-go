import { NextSeo } from 'next-seo'

import { ApplyNow } from '@components/CTAs'
import { MainLayout } from '@components/Layouts/MainLayout'
import { CareerHero, JobList, WhyJoinUs } from '@components/PageChunk/Career'
import { BlockQuote } from '@components/Testimonials'
import { VerticalTimeline } from '@components/Timeline'
// import { HorizontalTimeline } from '@components/Timeline/HorizontalTimeline'
import routes from '@src/config/routes'
import { extendSEO } from '@src/config/seo'

import type { NextLayoutComponentType } from 'next'

const TimelineItems = [
  {
    title: 'Application and recruiter screen',
    description: `The start of our application process is the same for all of our roles. We want to learn a bit about you through a casual conversation.`,
    icon: 'person'
  },
  {
    title: 'First round interview',
    description: `We love connecting with people who believe they'll make a difference. At this stage, an interview will help us both decide whether the interest is mutual.`,
    icon: 'find_in_page'
  },
  {
    title: 'Task or challenge',
    description: `Now it's time to apply your thinking to some real life situations. Whether it's completing a technical test, engaging in a role play or preparing a presentation to address a challeng`,
    icon: 'directions_run'
  },
  {
    title: 'Final interview and offer',
    description: `Once you've met the team, and we've gotten to know each other, it's time for us to both decide whether we're a match.`,
    icon: 'check_circle_outline'
  }
]

const CareerListPage: NextLayoutComponentType = () => {
  return (
    <div className="career-page">
      <NextSeo {...extendSEO(routes.en.product.seo)} />
      {/* Career hero section */}
      <CareerHero />
      {/* Job list section */}
      <JobList />
      {/* Why work with us section */}
      <WhyJoinUs />
      {/* How we hire our team section */}
      <VerticalTimeline
        title="How we hire our team"
        description="We like to keep things as simple as possible so we can get to what's really important - finding out more about you."
        items={TimelineItems}
      />
      {/* You can also activate horizontal timeline */}
      {/* <HorizontalTimeline
        title="How we hire our team"
        description="We like to keep things as simple as possible so we can get to what's really important - finding out more about you."
        items={TimelineItems}
      /> */}
      {/* Blockquote section */}
      <BlockQuote />
      {/* Apply now cta section */}
      <ApplyNow />
    </div>
  )
}

CareerListPage.getLayout = function getLayout(page) {
  return <MainLayout children={page} navbarTheme="light" />
}

export default CareerListPage
