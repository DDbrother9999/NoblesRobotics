"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
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

type Competition = {
  name: string
  season: string
  description: string
}

export default function AccomplishmentsPage() {
  const params = useParams()
  const year = params.year as string
  const [accomplishments, setAccomplishments] = useState<Accomplishment[]>([])
  const [awards, setAwards] = useState<Award[]>([])
  const [competition, setCompetition] = useState<Competition | null>(null)

  useEffect(() => {
    if (year === "2023-2024") {
      setCompetition({
        name: "FIRST Tech Challenge",
        season: "Centerstage",
        description: ""
      })

      setAccomplishments([
        {
          id: 1,
          title: "Kickoff",
          date: "2024 Centerstage",
          description: "",
          images: [],
        },
        {
          id: 2,
          title: "Motivate Award",
          date: "2024 Centerstage",
          description:
            "",
          images: [],
        },
        {
          id: 3,
          title: "Finalist Alliance Captain & Control Award Winner",
          date: "2024 Centerstage",
          description:
              "",
          images: [],
        },
      ])
      setAwards([
        {
          id: 1,
          name: "MA RoboStorm 9.2 - Motivate Award",
          imageSrc: "/placeholder.svg?height=300&width=300",
        },
        {
          id: 2,
          name: "MA Who Let The Bots Out - Finalist Alliance Captain & Control Award Winner",
          imageSrc: "/placeholder.svg?height=300&width=300",
        },
      ])
    } else if (year === "2024-2025") {
      setCompetition({
        name: "FIRST Tech Challenge",
        season: "Into The Deep",
        description: "",
      })

      setAccomplishments([
        {
          id: 1,
          title: "Kickoff",
          date: "2024 Into The Deep",
          description: "",
          images: ["/about-us/2024-2025/intothedeep.jpg?height=250&width=400"],
        },
        {
          id: 2,
          title: "FTC Think Award",
          date: "2024 Into The Deep",
          description: "",
          images: [
            "/about-us/2024-2025/comp0.JPG?height=500&width=500",
            "/about-us/2024-2025/students0.JPG?height=200&width=200",
            "/about-us/2024-2025/students1.JPG?height=200&width=200",
            "/about-us/2024-2025/students2.JPG?height=200&width=200",
          ],
        },
        {
          id: 3,
          title: "FTC Control Award",
          date: "2024 Into The Deep",
          description: "",
          images: [
            "/about-us/2024-2025/control.JPG?height=500&width=500",
            "/about-us/2024-2025/students3.JPG?height=200&width=200",
            "/about-us/2024-2025/students4.JPG?height=200&width=200",
            "/about-us/2024-2025/students5.JPG?height=200&width=200",
          ],
        },
      ])

      setAwards([
        {
          id: 1,
          name: "MA Brookline Robo Rally - Think Award",
          imageSrc: "/about-us/2024-2025/control.JPG",
        },
        {
          id: 2,
          name: "MA Hawk Nest Havoc! Xaverian Qualifier - Control Award",
          imageSrc: "/about-us/2024-2025/robot.JPG",
        },
      ])
    }
  }, [year])

  return (
      <main className="min-h-screen bg-[#f5faff] py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-center text-4xl font-bold text-[#044a90]">Accomplishments</h1>
          <h2 className="mb-12 text-center text-2xl font-bold text-[#0e6fb9]">{year}</h2>

          {competition && (
              <section className="mb-16 rounded-lg bg-white p-8 shadow-lg">
                <div className="flex gap-8">
                  {/* Left side - Summary */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#044a90] mb-3">
                        {competition.name} - {competition.season}
                      </h3>
                      <p className="text-gray-700 mb-3">{competition.description}</p>
                      {awards.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-[#0e6fb9] mb-2">Awards:</h4>
                            <ul className="space-y-1 text-gray-700">
                              {awards.map((award) => (
                                  <li key={award.id}>- {award.name}</li>
                              ))}
                            </ul>
                          </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-center">
                      <h4 className="font-semibold text-[#0e6fb9] mb-4">Robot {year}</h4>
                      <div className="flex justify-center">
                        <img
                            src={`/about-us/${year}/robot.JPG`}
                            alt={`Robot ${year}`}
                            className="rounded-lg shadow-md max-w-full h-auto"
                            style={{ maxHeight: "300px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
          )}

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
