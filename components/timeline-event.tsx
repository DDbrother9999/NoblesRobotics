"use client"

import Image from "next/image"
import { useState } from "react"

interface TimelineEventProps {
    title: string
    date: string
    description: string
    images?: string[]
    videoSrc?: string
    isLeft: boolean
    index: number
}

function getImageDimensions(imageSrc: string) {
    const url = new URL(imageSrc, window.location.origin)
    const width = Number.parseInt(url.searchParams.get("width") || "200")
    const height = Number.parseInt(url.searchParams.get("height") || "200")
    return { width, height }
}

export default function TimelineEvent({
                                          title,
                                          date,
                                          description,
                                          images = [],
                                          videoSrc,
                                          isLeft,
                                          index,
                                      }: TimelineEventProps) {
    const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({})

    const handleImageLoad = (imageIndex: number) => {
        setImageLoaded((prev) => ({ ...prev, [imageIndex]: true }))
    }

    return (
        <div className={`relative flex items-center mb-12 ${isLeft ? "justify-start" : "justify-end"}`}>
            {/* Content - expanded to use more horizontal space */}
            <div className={`w-full max-w-2xl ${isLeft ? "pr-0" : "pl-0"}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#044a90]">
                    <h3 className={`text-xl font-bold text-[#044a90] mb-2 ${isLeft ? "text-left" : "text-right"}`}>{title}</h3>
                    <p className={`text-[#0e6fb9] font-semibold mb-3 ${isLeft ? "text-left" : "text-right"}`}>{date}</p>

                    {description && (
                        <p className={`text-gray-700 mb-4 leading-relaxed ${isLeft ? "text-left" : "text-right"}`}>{description}</p>
                    )}

                    {images.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {images.map((imageSrc, imageIndex) => {
                                const { width, height } = getImageDimensions(imageSrc)

                                return (
                                    <div key={imageIndex} className="relative">
                                        <div
                                            className={`relative transition-all duration-300 ${
                                                imageLoaded[imageIndex] ? "opacity-100" : "opacity-0"
                                            }`}
                                            style={{
                                                width: `${width}px`,
                                                height: `${height}px`,
                                            }}
                                        >
                                            <Image
                                                src={imageSrc || "/placeholder.svg"}
                                                alt={`${title} - Image ${imageIndex + 1}`}
                                                width={width}
                                                height={height}
                                                className="w-full h-full object-cover rounded-lg"
                                                onLoad={() => handleImageLoad(imageIndex)}
                                            />
                                        </div>
                                        {!imageLoaded[imageIndex] && (
                                            <div
                                                className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center"
                                                style={{
                                                    width: `${width}px`,
                                                    height: `${height}px`,
                                                }}
                                            >
                                                <div className="animate-pulse text-gray-400 text-xs">Loading...</div>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    )}

                    {/* Video */}
                    {videoSrc && (
                        <div className="mt-4">
                            <video src={videoSrc} controls className="w-full rounded-lg" style={{ maxHeight: "400px" }}>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
