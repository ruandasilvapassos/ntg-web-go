import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { CSSInterpolation } from '@emotion/serialize'

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
