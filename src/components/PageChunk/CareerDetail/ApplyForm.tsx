export const ApplyForm: React.FC = () => {
  return (
    <div className="col-md-12 col-lg-4">
      <div className="mb-4 pt-4">
        <h4 className="text-dark mb-0">Apply for this position</h4>
        <p className="fw-500 text-sm text-dark">
          Required <span className="text-primary">*</span>{' '}
        </p>
      </div>

      <div className="mb-4">
        <p className="fw-500 mb-2">
          First Name <span className="text-primary">*</span>{' '}
        </p>
        <div className="input-group input-group-outline is-filled">
          <input className="form-control" type="text" />
        </div>
      </div>
      <div className="mb-4">
        <p className="fw-500 mb-2">
          Last Name <span className="text-primary">*</span>{' '}
        </p>
        <div className="input-group input-group-outline is-filled">
          <input className="form-control" type="text" />
        </div>
      </div>
      <div className="mb-4">
        <p className="fw-500 mb-2">
          Email Address <span className="text-primary">*</span>{' '}
        </p>
        <div className="input-group input-group-outline is-filled">
          <input className="form-control" type="text" />
        </div>
      </div>
      <div className="mb-4">
        <p className="fw-500 mb-2">
          Contact <span className="text-primary">*</span>{' '}
        </p>
        <div className="input-group input-group-outline is-filled">
          <input className="form-control" type="text" />
        </div>
      </div>
      <div className="mb-4">
        <p className="fw-500 mb-2">
          Resume <span className="text-primary">*</span>{' '}
        </p>
        <p className="fw-500 mb-2 text-muted">Attach resume or Paste resume </p>
      </div>
      <div className="mb-4">
        <p className="fw-500 mb-2">
          Desired Salary <span className="text-primary">*</span>{' '}
        </p>
        <div className="input-group input-group-outline is-filled">
          <input className="form-control" type="text" />
        </div>
      </div>
      <div className="mb-4">
        <p className="fw-500 mb-2">
          Earliest <span className="text-primary">*</span>{' '}
        </p>
        <div className="input-group input-group-outline is-filled">
          <input className="form-control" type="text" />
        </div>
      </div>
      <div className="mb-4">
        <a href="#" className="btn bg-gradient-primary text-white w-100   fw-bold px-4 mb-4">
          Submit Application
        </a>
      </div>
    </div>
  )
}
