import { ApplyForm, JobDescription } from './'

export const JobDetailSection: React.FC = () => {
  return (
    <section className="pt-5 pt-md-5 pb-md-5 pt-lg-9 bg-white">
      <div className="container mt-30">
        <div className="row d-flex">
          <JobDescription />
          <div className="col-md-12 col-lg-1"></div>
          <ApplyForm />
        </div>
      </div>
    </section>
  )
}
