import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { CSSInterpolation } from '@emotion/serialize'
import { omit } from '@utils/index'

import type { Components } from 'react-markdown'
interface MarkdownProps {
  children?: string
  components?: Components
  css?: CSSInterpolation
}

const MarkdownComponents: Components = {
  li: ({ ...props }) => {
    const childs = (props.children?.[0] as any)?.split('\n')
    return (
      <li>
        {childs?.map((child: any, i: number) => (
          <p key={i} children={child?.toString() || ''} className="font-weight-normal mb-2" />
        ))}
      </li>
    )
  },
  blockquote: ({ ...props }) => {
    return <blockquote className="blockquote ps-4" {...props} {...omit(props, 'node')} />
  },
  figure: ({ ...props }) => {
    return (
      <figure style={{ margin: '0 -5rem', borderRadius: '5px', overflow: 'hidden' }} children={props.children?.[0]}></figure>
    )
  },
  a: ({ ...props }) => {
    return <a className="text-primary" {...props} {...omit(props, 'node')} />
  }
} as const

export const useComponent = {
  default: MarkdownComponents
} as const

/**
 * TODO: add custom component, styles etc if necessary
 * @returns Element
 */
export const Markdown: React.FC<MarkdownProps> = ({ children, components, ...rest }) => {
  if (!children) return <></>
  return (
    <ReactMarkdown
      children={children}
      components={components}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      {...rest}
    />
  )
}

export default Markdown
