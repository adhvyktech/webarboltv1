"use client"

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

const ARViewer = dynamic(() => import('@/components/ARViewer'), { ssr: false })

export default function ARViewerPage({ params }: { params: { id: string } }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div>Loading AR experience...</div>
  }

  return <ARViewer id={params.id} />
}