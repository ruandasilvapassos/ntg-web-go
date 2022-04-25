import { Career } from '@src/pages/careers/[positionCode]'

import { ApplyForm, JobDescription } from './'

interface JobDetailSectionProps {
  data?: Career
}
export const JobDetailSection: React.FC<JobDetailSectionProps> = ({ data }) => {
  return (
    <section className="pt-5 pt-md-5 pb-md-5 pt-lg-9 bg-white">
      <div className="container mt-30">
        <div className="row d-flex">
          <JobDescription data={data} />
          <div className="col-md-12 col-lg-1"></div>
          <ApplyForm />
        </div>
      </div>
    </section>
  )
}
