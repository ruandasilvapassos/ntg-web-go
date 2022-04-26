import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Dropzone } from '@components/Forms/Dropzone'
import api from '@services/api'

export const ApplyForm: React.FC = () => {
  const { reset, register, handleSubmit } = useForm()

  // we set ts to any, temporarily
  const handleContactForm = async (data: any) => {
    await api
      .post(`/applicants`, {
        data
      })
      .then(({ data }) => {
        if (data?.data?.id) {
          toast.success(`Your application sent. Thank you for applying!`, {
            position: 'bottom-center'
          })
        } else {
          toast.error(`Something went wrong, please try again.`, {
            position: 'bottom-center'
          })
        }
      })
      .catch(() =>
        toast.error(`Something went wrong, please try again.`, {
          position: 'bottom-center'
        })
      )
      .finally(() => reset())
  }

  return (
    <form onSubmit={handleSubmit(handleContactForm)} className="col-md-12 col-lg-4">
      <div className="mb-4 pt-4">
        <h4 className="text-dark mb-0">Apply for this position</h4>
        <p className="fw-500 text-sm text-dark">
          Required <span className="text-primary">*</span>
        </p>
      </div>

      <div className="mb-4">
        <p className="fw-500 mb-2">
          First Name <span className="text-primary">*</span>
        </p>
        <div className="input-group input-group-outline is-filled">
          <input className="form-control" type="text" {...register('firstName')} />
        </div>
      </div>
      <div className="mb-4">
        <p className="fw-500 mb-2">
          Last Name <span className="text-primary">*</span>
        </p>
        <div className="input-group input-group-outline is-filled">
          <input className="form-control" type="text" {...register('lastName')} />
        </div>
      </div>
      <div className="mb-4">
        <p className="fw-500 mb-2">
          Email Address <span className="text-primary">*</span>
        </p>
        <div className="input-group input-group-outline is-filled">
          <input className="form-control" type="text" {...register('email')} />
        </div>
      </div>
      <div className="mb-4">
        <p className="fw-500 mb-2">
          Contact <span className="text-primary">*</span>
        </p>
        <div className="input-group input-group-outline is-filled">
          <input className="form-control" type="text" {...register('contact')} />
        </div>
      </div>
      <div className="mb-4">
        <p className="fw-500 mb-2">
          Resume <span className="text-primary">*</span>
        </p>
        <Dropzone {...register('resume')} />
      </div>
      <div className="mb-4">
        <p className="fw-500 mb-2">
          Desired Salary <span className="text-primary">*</span>
        </p>
        <div className="input-group input-group-outline is-filled">
          <input className="form-control" type="text" {...register('desiredSalary')} />
        </div>
      </div>
      <div className="mb-4">
        <p className="fw-500 mb-2">
          Earliest <span className="text-primary">*</span>
        </p>
        <div className="input-group input-group-outline is-filled">
          <input className="form-control" type="text" {...register('earliest')} />
        </div>
      </div>
      <div className="mb-4">
        <button type="submit" className="btn bg-gradient-primary text-white w-100   fw-bold px-4 mb-4">
          Submit Application
        </button>
      </div>
    </form>
  )
}
