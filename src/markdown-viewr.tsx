import { MarkdownViewer } from './viewer'
import { createRoot } from "react-dom/client"


type ReadOnlyOptions = {
  markdown: string
  className?: string
  style?: React.CSSProperties
}

/**
+ * Creates a read-only version of Wysimark that doesn't show the toolbar and doesn't allow editing.
+ */
export function createMarkdownViewer(
  containerElement: HTMLElement,
  options: ReadOnlyOptions = { markdown: "" }
) {
  const root = createRoot(containerElement)

  root.render(
    <MarkdownViewer
      markdown={options.markdown}
      className={options.className}
      style={options.style}
    />
  )

  return {
    unmount() {
      try {
        root.unmount()
      } catch (e) {
        /* ignore */
      }
    }
  }
}

export default createMarkdownViewer
