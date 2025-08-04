"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PortraitCarouselProps {
  screenshots: string[]
}

export default function PortraitCarousel({ screenshots }: PortraitCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">App Screenshots</h2>
      <div className="relative flex justify-center items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevImage}
          className="absolute left-0 z-10 bg-white/50 hover:bg-white rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="w-[300px] h-[600px] overflow-hidden rounded-lg relative shadow-lg">
          <Image
            src={screenshots[currentImageIndex] || "/placeholder.svg"}
            alt={`App Screenshot ${currentImageIndex + 1}`}
            width={300}
            height={600}
            className="object-cover transition-transform duration-300 ease-in-out"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextImage}
          className="absolute right-0 z-10 bg-white/50 hover:bg-white rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {screenshots.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentImageIndex ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`View screenshot ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
