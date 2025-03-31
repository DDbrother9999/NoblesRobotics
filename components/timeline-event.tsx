"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

type TimelineEventProps = {
  title: string
  date: string
  description: string
  images?: string[] // Array of image sources
  videoSrc?: string
  isLeft?: boolean
  index: number
}

export default function TimelineEvent({
  title,
  date,
  description,
  images = [],
  videoSrc,
  isLeft = false,
  index,
}: TimelineEventProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    if (isInView && !hasPlayed) {
      setHasPlayed(true)
    }
  }, [isInView, hasPlayed])

  const variants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={`w-full max-w-3xl mx-auto mb-8 ${isLeft ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"}`}
      variants={variants}
      initial="hidden"
      animate={hasPlayed ? "visible" : "hidden"}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-3 md:p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold text-[#044a90]">{title}</h3>
            <span className="text-xs font-medium text-[#0e6fb9]">{date}</span>
          </div>

          {/* Multiple Images Gallery */}
          {images.length > 0 && (
            <div className="mb-3">
              {images.length === 1 ? (
                // Single image
                <div className="relative h-40 md:h-56">
                  <Image src={images[0] || "/placeholder.svg"} alt={title} fill className="object-cover rounded" />
                </div>
              ) : (
                // Multiple images grid
                <div className="grid grid-cols-2 gap-2">
                  {images.map((image, i) => (
                    <div key={i} className="relative h-32 md:h-36">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${title} - Image ${i + 1}`}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Video */}
          {videoSrc && (
            <div className="mb-3 relative h-40 md:h-56">
              <video src={videoSrc} controls className="w-full h-full object-cover rounded" />
            </div>
          )}

          <p className="text-sm text-[#0e6fb9]">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

