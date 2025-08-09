"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

type TimelineEventProps = {
  title: string
  date: string
  description: string
  images?: string[]
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
      className={`mx-auto mb-8 w-full max-w-3xl ${isLeft ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"}`}
      variants={variants}
      initial="hidden"
      animate={hasPlayed ? "visible" : "hidden"}
    >
      <div className="overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="p-3 md:p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#044a90]">{title}</h3>
            <span className="text-xs font-medium text-[#0e6fb9]">{date}</span>
          </div>

          {images.length > 0 && (
            <div className="mb-3">
              {images.length === 1 ? (
                <div className="relative h-40 md:h-56">
                  <Image
                    src={images[0] || "/placeholder.svg?height=400&width=600&query=event"}
                    alt={title}
                    fill
                    className="rounded object-cover"
                  />
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {images.map((image, i) => (
                    <div key={i} className="relative h-32 md:h-36">
                      <Image
                        src={image || "/placeholder.svg?height=300&width=300&query=event"}
                        alt={`${title} - Image ${i + 1}`}
                        fill
                        className="rounded object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {videoSrc && (
            <div className="relative mb-3 h-40 md:h-56">
              <video src={videoSrc} controls className="h-full w-full rounded object-cover" />
            </div>
          )}

          <p className="text-sm text-[#0e6fb9]">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
