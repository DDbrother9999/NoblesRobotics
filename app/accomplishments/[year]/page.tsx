"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import TimelineEvent from "@/components/timeline-event"

type Accomplishment = {
  id: number
  title: string
  date: string
  description: string
  images?: string[]
  videoSrc?: string
}

type Award = {
  id: number
  name: string
  imageSrc: string
}

export default function AccomplishmentsPage() {
  const params = useParams()
  const year = params.year as string
  const [accomplishments, setAccomplishments] = useState<Accomplishment[]>([])
  const [awards, setAwards] = useState<Award[]>([])
  const [robotImage, setRobotImage] = useState<string>("")

  useEffect(() => {
    if (year === "2023-2024") {
      setAccomplishments([
        {
          id: 1,
          title: "Kickoff",
          date: "2024 Centerstage",
          description: "",
          images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
        },
        {
          id: 2,
          title: "Motivate Award",
          date: "2024 Centerstage",
          description:
            "",
          images: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
          ],
        },
        {
          id: 2,
          title: "Finalist Alliance Captain & Control Award Winner",
          date: "2024 Centerstage",
          description:
              "",
          images: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
          ],
        },
      ])
      setAwards([
        {
          id: 1,
          name: "Motivate Award",
          imageSrc: "/placeholder.svg?height=300&width=300",
        },
        {
          id: 2,
          name: "Control Award",
          imageSrc: "/placeholder.svg?height=300&width=300",
        },
      ])

      setRobotImage("/placeholder.svg?height=600&width=600")
    } else if (year === "2024-2025") {
      setAccomplishments([
        {
          id: 1,
          title: "Kickoff",
          date: "2024 Into The Deep",
          description: "Started the new season with an expanded team and ambitious goals for the year ahead.",
          images: ["/placeholder.svg?height=400&width=600"],
        },
        {
          id: 2,
          title: "FTC Think Award",
          date: "2024 Into The Deep",
          description: "",
          images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
        },
        {
          id: 3,
          title: "FTC Control Award",
          date: "2024 Into The Deep",
          description: "",
          images: ["/placeholder.svg?height=400&width=600"],
        },
      ])

      setAwards([
        {
          id: 1,
          name: "Think Award",
          imageSrc: "/placeholder.svg?height=300&width=300",
        },
        {
          id: 2,
          name: "Control Award",
          imageSrc: "/placeholder.svg?height=300&width=300",
        },
      ])

      setRobotImage("/placeholder.svg?height=600&width=600")
    }
  }, [year])

  return (
    <main className="min-h-screen bg-[#f5faff] py-12">
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-center text-4xl font-bold text-[#044a90]">Accomplishments</h1>
        <h2 className="mb-12 text-center text-2xl font-bold text-[#0e6fb9]">{year}</h2>

        <section className="mb-16 rounded-lg bg-white p-8 shadow-lg">
          <h3 className="mb-6 text-2xl font-bold text-[#044a90]">At a Glance</h3>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h4 className="mb-4 text-xl font-bold text-[#0e6fb9]">Awards</h4>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {awards.map((award) => (
                  <div key={award.id} className="flex flex-col items-center">
                    <div className="relative mb-2 aspect-square w-full">
                      <Image
                        src={award.imageSrc || "/placeholder.svg?height=300&width=300&query=award"}
                        alt={award.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-center text-sm font-medium text-[#044a90]">{award.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-xl font-bold text-[#0e6fb9]">Our Robot</h4>
              <div className="relative aspect-square w-full">
                <Image
                  src={robotImage || "/placeholder.svg?height=600&width=600&query=robot"}
                  alt={`${year} Robot`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="relative mx-auto max-w-4xl">
          {accomplishments.map((accomplishment, index) => (
            <TimelineEvent
              key={accomplishment.id}
              title={accomplishment.title}
              date={accomplishment.date}
              description={accomplishment.description}
              images={accomplishment.images}
              videoSrc={accomplishment.videoSrc}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
