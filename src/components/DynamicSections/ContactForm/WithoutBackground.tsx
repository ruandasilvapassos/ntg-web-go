import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { useFormatMessage } from '@hooks/useFormatMessage'
import api from '@services/api'

interface ContactFormWithoutBackgroundProps {
  title?: string
  overview?: string
}
export const ContactFormWithoutBackground: React.FC<ContactFormWithoutBackgroundProps> = ({ title, overview }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
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
                    <div className="position-relative col-md-6">
                      <label>{f('contact.forms.fullName')}</label>
                      <div className="input-group input-group-outline is-filled mb-4">
                        <input
                          type="text"
                          className={classNames(['form-control', errors?.fullname ? 'is-invalid' : ''])}
                          placeholder={f('contact.forms.fullName')}
                          {...register('fullname', {
                            required: true
                          })}
                        />
                      </div>
                      {errors?.fullname && (
                        <span className="position-absolute text-xs bottom-7 start-4 text-danger">
                          {f('contact.forms.required')}
                        </span>
                      )}
                    </div>
                    <div className="position-relative col-md-6">
                      <label>{f('contact.forms.email')}</label>
                      <div className="input-group input-group-outline is-filled mb-4">
                        <input
                          type="email"
                          className={classNames(['form-control', errors?.email ? 'is-invalid' : ''])}
                          placeholder={f('contact.forms.email')}
                          {...register('email', {
                            required: true
                          })}
                        />
                      </div>
                      {errors?.email && (
                        <span className="position-absolute text-xs bottom-7 start-4 text-danger">
                          {f('contact.forms.required')}
                        </span>
                      )}
                    </div>
                    <div className="position-relative col-md-6">
                      <label>{f('contact.forms.company')}</label>
                      <div className="input-group input-group-outline is-filled mb-4">
                        <input
                          type="text"
                          className={classNames(['form-control', errors?.company ? 'is-invalid' : ''])}
                          placeholder={f('contact.forms.company')}
                          {...register('company', {
                            required: true
                          })}
                        />
                      </div>
                      {errors?.company && (
                        <span className="position-absolute text-xs bottom-7 start-4 text-danger">
                          {f('contact.forms.required')}
                        </span>
                      )}
                    </div>
                    <div className="position-relative col-md-6">
                      <label>{f('contact.forms.topic')}</label>
                      <div className="input-group input-group-outline is-filled mb-4">
                        <input
                          type="text"
                          className={classNames(['form-control', errors?.topic ? 'is-invalid' : ''])}
                          placeholder={f('contact.forms.topic')}
                          {...register('topic', {
                            required: true
                          })}
                        />
                      </div>
                      {errors?.topic && (
                        <span className="position-absolute text-xs bottom-7 start-4 text-danger">
                          {f('contact.forms.required')}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="position-relative form-group mb-4 mt-md-0 mt-4">
                    <label>{f('contact.forms.help')}</label>
                    <div className="input-group input-group-outline is-filled mb-4">
                      <textarea
                        className={classNames(['form-control', errors?.message ? 'is-invalid' : ''])}
                        id="message"
                        rows={6}
                        placeholder={f('contact.forms.describeProblem')}
                        {...register('message', {
                          required: true
                        })}></textarea>
                    </div>
                    {errors?.message && (
                      <span className="position-absolute text-xs text-danger" style={{ bottom: '-1.2rem', left: '.25rem' }}>
                        {f('contact.forms.required')}
                      </span>
                    )}
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
