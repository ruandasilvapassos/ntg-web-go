import { useForm } from 'react-hook-form'

interface ContactFormWithoutBackgroundProps {
  title?: string
  overview?: string
}
export const ContactFormWithoutBackground: React.FC<ContactFormWithoutBackgroundProps> = ({ title, overview }) => {
  const { register, handleSubmit } = useForm()

  // we set ts to any, temporarily
  const handleContactForm = (data: any) => {
    console.log(data)
  }
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center pb-4">
            {title && <h2>{title}</h2>}
            {overview && <p className="lead">{overview}</p>}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="card card-plain">
              <form id="contact-form" onSubmit={handleSubmit(handleContactForm)} method="post" autoComplete="off">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Full Name</label>
                      <div className="input-group input-group-outline is-filled mb-4">
                        <input type="text" className="form-control" placeholder="Full Name" {...register('fullname')} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label>Email</label>
                      <div className="input-group input-group-outline is-filled mb-4">
                        <input type="email" className="form-control" placeholder="Email" {...register('email')} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label>Company</label>
                      <div className="input-group input-group-outline is-filled mb-4">
                        <input type="text" className="form-control" placeholder="Company" {...register('company')} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label>Topic</label>
                      <div className="input-group input-group-outline is-filled mb-4">
                        <input type="text" className="form-control" placeholder="Topic" {...register('topic')} />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-4 mt-md-0 mt-4">
                    <label>What can we help you?</label>
                    <div className="input-group input-group-outline is-filled mb-4">
                      <textarea
                        className="form-control"
                        id="message"
                        rows={6}
                        placeholder="Describe your problem in at least 250 characters"
                        {...register('message')}></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn bg-gradient-primary mt-4">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
