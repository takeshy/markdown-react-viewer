import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown';
import './github-markdown.css'

type MarkdownViewerProps = {
    markdown: string
    className?: string
    style?: React.CSSProperties
}

export function MarkdownViewer({ markdown, className, style }: MarkdownViewerProps) {
    return (<div
        className={className ? className : 'markdown-body'}
        style={{
            ...style,
            userSelect: 'text',
        }}
    >
        <ReactMarkdown
            remarkPlugins={[remarkGfm as any]}
            children={markdown}
        />
    </div>)
}

export default MarkdownViewer
