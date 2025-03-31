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
  images?: string[] // Changed to array of images
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
    // In a real application, you would fetch this data from an API
    // For now, we'll use mock data based on the year
    if (year === "2023-2024") {
      setAccomplishments([
        {
          id: 1,
          title: "Regional Competition Winner",
          date: "October 2023",
          description:
            "Our team won first place at the regional competition, showcasing our innovative solution to the challenge.",
          images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
        },
        {
          id: 2,
          title: "Innovation Award",
          date: "December 2023",
          description: "Received the Innovation Award for our unique approach to solving complex problems.",
          images: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
          ],
        },
        {
          id: 3,
          title: "National Finals Qualification",
          date: "February 2024",
          description: "Qualified for the national finals, representing our region among the top teams in the country.",
          images: ["/placeholder.svg?height=400&width=600"],
        },
        {
          id: 4,
          title: "Community Outreach Project",
          date: "March 2024",
          description:
            "Launched a successful community outreach project, sharing our knowledge and inspiring the next generation.",
          images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
        },
        {
          id: 5,
          title: "National Championship - 3rd Place",
          date: "April 2024",
          description: "Secured 3rd place at the National Championship, our best performance to date.",
          images: ["/placeholder.svg?height=400&width=600"],
        },
      ])

      setAwards([
        {
          id: 1,
          name: "First Place Regional",
          imageSrc: "/placeholder.svg?height=300&width=300",
        },
        {
          id: 2,
          name: "Innovation Award",
          imageSrc: "/placeholder.svg?height=300&width=300",
        },
        {
          id: 3,
          name: "National 3rd Place",
          imageSrc: "/placeholder.svg?height=300&width=300",
        },
      ])

      setRobotImage("/placeholder.svg?height=600&width=600")
    } else if (year === "2024-2025") {
      setAccomplishments([
        {
          id: 1,
          title: "New Season Kickoff",
          date: "September 2024",
          description: "Started the new season with an expanded team and ambitious goals for the year ahead.",
          images: ["/placeholder.svg?height=400&width=600"],
        },
        {
          id: 2,
          title: "Technical Excellence Award",
          date: "November 2024",
          description: "Recognized for technical excellence at the fall showcase event.",
          images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
        },
        {
          id: 3,
          title: "Regional Competition - 1st Place",
          date: "January 2025",
          description:
            "Defended our regional title with another first-place finish, demonstrating our continued growth and improvement.",
          images: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
          ],
        },
        {
          id: 4,
          title: "International Invitation",
          date: "February 2025",
          description:
            "Received a special invitation to participate in an international exhibition, representing our country on the global stage.",
          images: ["/placeholder.svg?height=400&width=600"],
        },
      ])

      setAwards([
        {
          id: 1,
          name: "Technical Excellence",
          imageSrc: "/placeholder.svg?height=300&width=300",
        },
        {
          id: 2,
          name: "Regional 1st Place",
          imageSrc: "/placeholder.svg?height=300&width=300",
        },
        {
          id: 3,
          name: "International Recognition",
          imageSrc: "/placeholder.svg?height=300&width=300",
        },
      ])

      setRobotImage("/placeholder.svg?height=600&width=600")
    }
  }, [year])

  return (
    <main className="min-h-screen py-12 bg-[#f5faff]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#044a90] mb-4">Accomplishments</h1>
        <h2 className="text-2xl font-bold text-center text-[#0e6fb9] mb-12">{year}</h2>

        {/* At a Glance Section */}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-[#044a90] mb-6">At a Glance</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Awards Gallery */}
            <div>
              <h4 className="text-xl font-bold text-[#0e6fb9] mb-4">Awards</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {awards.map((award) => (
                  <div key={award.id} className="flex flex-col items-center">
                    <div className="relative w-full aspect-square mb-2">
                      <Image
                        src={award.imageSrc || "/placeholder.svg"}
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

            {/* Final Robot */}
            <div>
              <h4 className="text-xl font-bold text-[#0e6fb9] mb-4">Our Robot</h4>
              <div className="relative w-full aspect-square">
                <Image src={robotImage || "/placeholder.svg"} alt={`${year} Robot`} fill className="object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <div className="relative max-w-4xl mx-auto">
          {accomplishments.map((accomplishment, index) => (
            <TimelineEvent
              key={accomplishment.id}
              title={accomplishment.title}
              date={accomplishment.date}
              description={accomplishment.description}
              images={accomplishment.images}
              videoSrc={accomplishment.videoSrc}
              isLeft={index % 2 === 0} // Alternate sides
              index={index}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

