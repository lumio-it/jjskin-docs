'use client'

import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'
import DOMPurify from 'dompurify'

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
})

let id = 0

export function Mermaid({ children }: { children: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string>('')

  useEffect(() => {
    const current = id++
    mermaid.render(`mermaid-${current}`, children).then((result) => {
      setSvg(DOMPurify.sanitize(result.svg, { USE_PROFILES: { svg: true } }))
    })
  }, [children])

  return (
    <div
      ref={ref}
      className="my-4 flex justify-center [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
