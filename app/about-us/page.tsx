import Image from "next/image"

type TeamMember = {
  id: number
  name: string
  role: string
  description: string
  imageSrc: string
}

export default function AboutUs() {
  const mentors: TeamMember[] = [
    {
      id: 1,
      name: "Max Montgomery",
      role: "Faculty Mentor",
      description: "",
      imageSrc: "/team/2024-2025/mentors/Montgomery.jpg",
    },
    {
      id: 2,
      name: "Andrew Shumway",
      role: "Faculty Mentor",
      description: "",
      imageSrc: "/team/2024-2025/mentors/Shumway.jpg",
    },
  ]

  const students: TeamMember[] = [
    {
      id: 1,
      name: "Jeffrey Liu",
      role: "Team Captain",
      description: "Jeffrey is a junior at Nobles.",
      imageSrc: "/team/2024-2025/students/JEFFREY_LIU.jpg",
    },
    {
      id: 2,
      name: "George Pinkas",
      role: "Hardware",
      description: "George is a sophmore at Nobles.",
      imageSrc: "/team/2024-2025/students/GEORGE_PINKAS.jpg",
    },
    {
      id: 3,
      name: "Derek Yin",
      role: "Software",
      description: "Derek is a sophomore at Nobles.",
      imageSrc: "/team/2024-2025/students/DEREK_YIN.jpg",
    },
    {
      id: 4,
      name: "Alex Cai",
      role: "Hardware",
      description: "Alex is a sophomore at Nobles.",
      imageSrc: "/team/2024-2025/students/ALEX_CAI.jpg",
    },
    {
      id: 5,
      name: "Raphael Klauber",
      role: "Hardware",
      description: "Raphael is a sophomore at Nobles.",
      imageSrc: "/team/2024-2025/students/RAPHAEL_KLAUBER.jpg",
    },
    {
      id: 6,
      name: "Jayden Leung",
      role: "Software/Documentation",
      description: "Jayden is a sophomore at Nobles.",
      imageSrc: "/team/2024-2025/students/JAYDEN_LEUNG.jpg",
    },
    {
      id: 7,
      name: "Kenny Chukwu",
      role: "Software",
      description: "Kenny is a sophomore at Nobles.",
      imageSrc: "/team/2024-2025/students/JESSE_CHUKWU.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-[#f5faff] py-12">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center text-4xl font-bold text-[#044a90]">About Us</h1>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-[#0e6fb9]">Our Team</h2>
          <p className="mb-8 max-w-4xl text-lg text-[#044a90]">
            Our team consists of high school and middle school students from Noble and Greenough School. We have many
            diverse interests and we use our wide range of skills to build robots and learn more about engineering and
            software development. Our mentors are dedicated faculty members who guide us through the process of building
            and programming our robots and support us at every step.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-[#0e6fb9]">Our Mentors</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg md:flex-row">
                <div className="relative aspect-square md:w-1/3">
                  <Image
                    src={mentor.imageSrc || "/placeholder.svg?height=400&width=400&query=mentor"}
                    alt={mentor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-xl font-bold text-[#044a90]">{mentor.name}</h3>
                    <span className="inline-block rounded-full bg-[#4eb5e9] px-3 py-1 text-sm font-medium text-[#f5faff]">
                      {mentor.role}
                    </span>
                  </div>
                  <p className="text-[#0e6fb9]">{mentor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold text-[#0e6fb9]">Our Students</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {students.map((student) => (
              <div key={student.id} className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg md:flex-row">
                <div className="relative aspect-square md:w-1/3">
                  <Image
                    src={student.imageSrc || "/placeholder.svg?height=400&width=400&query=student"}
                    alt={student.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-xl font-bold text-[#044a90]">{student.name}</h3>
                    <span className="inline-block rounded-full bg-[#4eb5e9] px-3 py-1 text-sm font-medium text-[#f5faff]">
                      {student.role}
                    </span>
                  </div>
                  <p className="text-[#0e6fb9]">{student.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
