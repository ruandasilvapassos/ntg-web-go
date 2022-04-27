import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { useFormatMessage } from '@hooks/useFormatMessage'
import api from '@services/api'

interface ContactFormWithoutBackgroundProps {
  title?: string
  overview?: string
}
export const ContactFormWithoutBackground: React.FC<ContactFormWithoutBackgroundProps> = ({ title, overview }) => {
  const { register, handleSubmit, reset } = useForm()
  const f = useFormatMessage()

  // we set ts to any, temporarily
  const handleContactForm = async (data: any) => {
    await api
      .post(`/contacts`, {
        data
      })
      .then(({ data }) => {
        if (data?.data?.id) {
          toast.success(`Message sent, thank you for your message.`, {
            position: 'bottom-center'
          })
        } else {
          toast.error(`Something went wrong when trying to send a message.`, {
            position: 'bottom-center'
          })
        }
      })
      .catch(() =>
        toast.error(`Something went wrong when trying to send a message.`, {
          position: 'bottom-center'
        })
      )
      .finally(() => reset())
  }
  return (
    <section id="contact">
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
                      <label>{f('contact.forms.fullName')}</label>
                      <div className="input-group input-group-outline is-filled mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={f('contact.forms.fullName')}
                          {...register('fullname')}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label>{f('contact.forms.email')}</label>
                      <div className="input-group input-group-outline is-filled mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder={f('contact.forms.email')}
                          {...register('email')}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label>{f('contact.forms.company')}</label>
                      <div className="input-group input-group-outline is-filled mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={f('contact.forms.company')}
                          {...register('company')}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label>{f('contact.forms.fullName')}</label>
                      <div className="input-group input-group-outline is-filled mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={f('contact.forms.fullName')}
                          {...register('topic')}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-4 mt-md-0 mt-4">
                    <label>{f('contact.forms.help')}</label>
                    <div className="input-group input-group-outline is-filled mb-4">
                      <textarea
                        className="form-control"
                        id="message"
                        rows={6}
                        placeholder={f('contact.forms.describeProblem')}
                        {...register('message')}></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn bg-gradient-primary mt-4">
                        {f('buttons.sendMessage')}
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
