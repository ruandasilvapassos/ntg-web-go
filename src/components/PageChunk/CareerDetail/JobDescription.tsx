import toast from 'react-hot-toast'
import { useCopyToClipboard, useUpdateEffect } from 'react-use'

import Markdown, { useComponent } from '@components/Markdown'
import { useFormatMessage } from '@hooks/useFormatMessage'

import type { Career } from '@src/pages/careers/[positionCode]'
interface JobDescriptionProps {
  data?: Career
}

export const JobDescription: React.FC<JobDescriptionProps> = ({ data }) => {
  const [state, copyToClipboard] = useCopyToClipboard()
  const f = useFormatMessage()

  useUpdateEffect(() => {
    if (!state.error) {
      toast.success(`Link copied to clipboard.`, {
        position: 'bottom-center'
      })
    } else {
      toast.error(`Unable copied link to clipboard.`, {
        position: 'bottom-center'
      })
    }
  }, [state])
  return (
    <div className="co-md-12 col-lg-7 p-lg-4 pt-7 pt-lg-0">
      <div>
        <h1 className="secondary-font fw-bold mb-4 h1-extra">{data?.position}</h1>
        {data?.description && <p className="font-weight-normal text-black mb-5">{data?.description}</p>}
        <button
          onClick={() => copyToClipboard(window?.location?.href)}
          className="btn bg-gradient-primary text-white   fw-bold px-4 mb-4">
          {f('buttons.shareJob')}
        </button>
      </div>

      {data?.contentSection?.map((section, i) => (
        <section key={i} className="pt-4 pt-lg-6 pb-4 pb-lg-5 bg-white">
          <div className="row">
            <div className="col-12">
              <h2 className="text-dark mb-4">{section?.title}</h2>
              {section?.description && <p className="font-weight-normal mb-2">{section?.description}</p>}
              {section?.content && <Markdown children={section?.content} components={useComponent.default} />}
            </div>
          </div>
        </section>
      ))}

      {/* <!--section--> */}
      {/* <section className="pt-4 pt-lg-5 pb-4 pb-lg-4 bg-white">
        <div className="row">
          <div className="col-12">
            <h2 className="text-dark mb-4">What we look for beyond required skills</h2>
            <p className="font-weight-normal mb-2">In order to thrive at Ntegral, you</p>

            <ul>
              <li>
                <p className="font-weight-normal mb-2">…are intellectually smart and curious</p>
              </li>
              <li>
                <p className="font-weight-normal mb-2">…have the passion for and take pride in your work</p>
              </li>
              <li>
                <p className="font-weight-normal mb-2">…deeply believe in Ntegral’s mission, vision, and values</p>
              </li>
              <li>
                <p className="font-weight-normal mb-2">…have a no-frills attitude</p>
              </li>
              <li>
                <p className="font-weight-normal mb-2">…are a collaborative team player</p>
              </li>
              <li>
                <p className="font-weight-normal mb-2">…are ethical and honest</p>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
    </div>
  )
}
