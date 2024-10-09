"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import QRCode from 'qrcode.react'
import { getAbsoluteUrl } from '@/lib/url'

export default function GenerateARExperience() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [arExperienceUrl, setArExperienceUrl] = useState('')

  const handleGenerateAR = () => {
    // Generate a unique identifier for the AR experience
    const uniqueId = Math.random().toString(36).substring(7)
    // Use the getAbsoluteUrl function to create the full URL
    const generatedUrl = getAbsoluteUrl(`/ar-viewer/${uniqueId}`)
    setArExperienceUrl(generatedUrl)
    setIsDialogOpen(true)
  }

  return (
    <div className="mt-8 text-center">
      <Button onClick={handleGenerateAR}>Generate AR Experience</Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>AR Experience Generated</DialogTitle>
            <DialogDescription>
              Scan the QR code or use the link below to access your AR experience.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <QRCode value={arExperienceUrl} size={200} />
            <a href={arExperienceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {arExperienceUrl}
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}