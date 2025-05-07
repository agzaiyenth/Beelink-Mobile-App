"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

interface YouTubeEmbedProps {
  videoId: string
  title: string
  thumbnailUrl?: string
  height?: string
}

export function YouTubeEmbed({ videoId, title, thumbnailUrl, height = "h-56 sm:h-64" }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <div className={`relative w-full ${height} rounded-lg overflow-hidden bg-muted`}>
      {!isPlaying ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: thumbnailUrl
                ? `url(${thumbnailUrl})`
                : `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
            }}
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <Button
              onClick={handlePlay}
              size="icon"
              className="rounded-full bg-primary/90 hover:bg-primary h-14 w-14 shadow-lg"
            >
              <Play className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white font-medium line-clamp-2">{title}</h3>
          </div>
        </>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  )
}
