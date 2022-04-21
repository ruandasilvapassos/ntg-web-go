import classNames from 'classnames'
import Link from 'next/link'

interface CookieBlockProps {
  state?: boolean
  onClose?: () => void
  handleUseCookie?: (accept?: boolean) => void
}

export const CookieBlock: React.FC<CookieBlockProps> = ({ state, onClose, handleUseCookie }) => {
  const handleCookie = (accept?: boolean) => {
    handleUseCookie && handleUseCookie(accept)
    onClose && onClose()
  }
  return (
    <div
      className={classNames([
        'cookie-block fade',
        {
          show: state
        }
      ])}>
      <div className="inner">
        <h5 className="text-dark mb-3 fw-bold text-center">NTEGRAL COOKIES</h5>
        <button
          type="button"
          onClick={() => handleCookie(false)}
          className="btn btn-link text-muted my-0 px-0 py-0 btn-close">
          <span className="material-icons">close</span>
        </button>
        <p className="lead text-center">
          NTEGRAL like cookies too! By continuing to browse, you are agreeing to our use of cookies.
        </p>

        <div className="text-center mb-5">
          <button type="button" onClick={() => handleCookie(true)} className="btn bg-gradient-primary mt-4 mb-0">
            Accept &amp; Continue
          </button>
        </div>

        <p className="mb-0 text-sm mx-auto text-center">
          Need to learn more? <br />
          <Link href="/privacy" passHref>
            <a className=" text-primary font-weight-bold">Privacy Policy</a>
          </Link>
          <span> and </span>
          <Link href="/terms" passHref>
            <a className="text-primary font-weight-bold">Cookie Policy</a>
          </Link>
        </p>
      </div>
    </div>
  )
}
