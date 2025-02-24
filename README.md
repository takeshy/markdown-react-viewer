# markdown-react-viewer

This is a simple markdown viewer built with React. It uses the [remark-gfm]( github markdown) parser to parse the markdown and then renders it using React components.

## Demo

You can try out  the editor using storybook in the following link:
https://takeshy.github.io/markdown-react-viewer

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

## Direct Initialization

You can also initialize the editor directly on an HTML element:

# you use rails importmap, add the following line to your importmap.rb
※ @latest is the latest version of wysimark-lite. If you want to specify a version, replace @latest with the version you want to use.
```
pin "markdown-react-viewer", to: "https://cdn.jsdelivr.net/npm/markdown-react-viewer@latest/dist/index.js"
```

```html
<div id="editor"></div>
<script type="module">
  import {createMarkdownViewer } from "markdown-react-viewer"
  const viewer = createMarkdownViewer(document.getElementById("viewer"), { markdown: markdown, className="markdown-body" })
</script>
```

run storybook

```bash
npm run storybook
```
