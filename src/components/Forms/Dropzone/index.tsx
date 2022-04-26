import { forwardRef, useCallback, useEffect, useState } from 'react'
import ReactDropzone from 'react-dropzone'
import toast from 'react-hot-toast'
import { useBeforeUnload } from 'react-use'

import { Strapi } from '@utils/lib/strapi'
import { StrapiMedia } from '@utils/lib/strapi/uploader'

import type { HTMLProps } from 'react'
interface DropzoneProps extends HTMLProps<HTMLInputElement> {
  label?: string
  maxFileSize?: number // default 10mb:10485760
  current?: {
    id: number
    attributes?: StrapiMedia
  }
}

const initialUploadState = {
  count: 0,
  uploading: false,
  uploaded: false,
  error: false,
  data: null
}

type InitialUploadState = {
  count: number
  uploading: boolean
  uploaded: boolean
  error?: boolean
  data?: {
    id: number | string
    attributes?: StrapiMedia
  } | null
}

const Loading: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#ba1a18"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138">
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  )
}

const Label: React.FC<{ error?: boolean; file?: File; current?: StrapiMedia }> = ({ error, file, current }) => {
  if (!error && file?.name) {
    return <span>{file?.name}</span>
  } else if (current) {
    return <span>{current?.name}</span>
  } else {
    return (
      <>
        <span className="text-primary">Attach resume </span> or drag and drop
      </>
    )
  }
}

export const Dropzone = forwardRef<HTMLInputElement, DropzoneProps>(
  ({ name, maxFileSize = 10485760, current, ...rest }, ref) => {
    const [fileState, setFileState] = useState<File>()
    const [uploadState, setUploadState] = useState<InitialUploadState>(initialUploadState)

    const uploading = useCallback(() => {
      if (uploadState?.count > 0 && !uploadState?.uploaded) {
        return true
      } else {
        return false
      }
    }, [uploadState])

    useBeforeUnload(uploading, 'You have unsaved changes, are you sure?')

    /**
     * TODO: Also handle multiple upload
     */
    const onDrop = useCallback(async (acceptedFiles: File[]) => {
      const file = acceptedFiles?.[0]
      if (file?.size === 0) {
        toast.error('File corrupt, please choose another file.')
        return
      }
      if (file?.size > maxFileSize) {
        toast.error('Please choose file less than 10MB')
        return
      }
      setUploadState({ uploading: true, count: acceptedFiles?.length, uploaded: false, error: false, data: null })
      setFileState(file)
      await Strapi.upload(file, (cb) => {
        if (cb) {
          setUploadState({ ...uploadState, uploading: false, uploaded: true, error: false, data: cb })
        } else {
          toast.error('An error occured while uploading file.')
          setUploadState({ ...uploadState, uploading: false, uploaded: true, error: true, data: null })
        }
      })
    }, [])

    useEffect(() => {
      if (current) {
        setUploadState({
          ...uploadState,
          data: current
        })
      }
    }, [current])
    return (
      <ReactDropzone onDrop={onDrop} accept={rest?.accept} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div
            className="position-relative"
            style={{
              border: '1px dashed black',
              width: '100%',
              height: '6rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}
            {...getRootProps()}>
            {uploadState?.data?.id && <input type="hidden" ref={ref} name={name} defaultValue={uploadState?.data?.id} />}
            <input {...getInputProps()} />
            {uploadState?.uploading ? (
              <Loading />
            ) : (
              <i className="material-icons text-dark opacity-5 text-2xl text-muted">upload</i>
            )}
            <span className="text-sm">
              {uploadState?.uploading ? (
                <span>Uploading {uploadState?.count} file(s)</span>
              ) : (
                <Label error={uploadState?.error} file={fileState} current={current?.attributes} />
              )}
            </span>
          </div>
        )}
      </ReactDropzone>
    )
  }
)
