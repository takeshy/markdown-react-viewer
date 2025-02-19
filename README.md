# markdown-react-viewer

This is a simple markdown viewer built with React. It uses the [remark-gfm]( github markdown) parser to parse the markdown and then renders it using React components.

## usage
  
```jsx
import React from 'react';
import MarkdownViewer from 'markdown-react-viewer';

export default function SampleViewer() {
  return (
    <MarkdownViewer
      markdown="# Read Only Editor",
      className="markdown-body",
      style={{fontSize: '1.5em'}}
    />
  )
}
```

run storybook

```bash
npm run storybook
```
