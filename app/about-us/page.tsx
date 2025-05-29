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
      imageSrc: "/team/2024-2025/mentors/Montgomery.jpg?height=400&width=400",
    },
    {
      id: 2,
      name: "Andrew Shumway",
      role: "Faculty Mentor",
      description: "",
      imageSrc: "/team/2024-2025/mentors/Shumway.jpg?height=400&width=400",
    },
  ]

  const students: TeamMember[] = [
    {
      id: 1,
      name: "Jeffrey Liu",
      role: "Team Captain",
      description: "Jeffrey is a junior at Nobles.",
      imageSrc: "/team/2024-2025/students/JEFFREY_LIU.jpg?height=400&width=400",
    },
    {
      id: 2,
      name: "George Pinkas",
      role: "Hardware",
      description: "George is a sophmore at Nobles.",
      imageSrc: "/team/2024-2025/students/GEORGE_PINKAS.jpg?height=400&width=400",
    },
    {
      id: 3,
      name: "Derek Yin",
      role: "Software",
      description: "Derek is a sophomore at Nobles who loves programming and math. Outside of robotics, I enjoy a good fantasy book :)",
      imageSrc: "/team/2024-2025/students/DEREK_YIN.jpg?height=400&width=400",
    },
    {
      id: 4,
      name: "Alex Cai",
      role: "Hardware",
      description: "Alex is a sophomore at Nobles.",
      imageSrc: "/team/2024-2025/students/ALEX_CAI.jpg?height=400&width=400",
    },
    {
      id: 5,
      name: "Raphael Klauber",
      role: "Hardware",
      description: "Raphael is a sophomore at Nobles.",
      imageSrc: "/team/2024-2025/students/RAPHAEL_KLAUBER.jpg?height=400&width=400",
    },
    {
      id: 6,
      name: "Jayden Leung",
      role: "Software/Documentation",
      description: "Jayden is a sophomore at Nobles.",
      imageSrc: "/team/2024-2025/students/JAYDEN_LEUNG.jpg?height=400&width=400",
    },
    {
      id: 7,
      name: "Kenny Chukwu",
      role: "Software",
      description: "Kenny is a sophomore at Nobles.",
      imageSrc: "/team/2024-2025/students/JESSE_CHUKWU.jpg?height=400&width=400",
    },
  ]

  return (
    <main className="min-h-screen py-12 bg-[#f5faff]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#044a90] mb-12">About Us</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#0e6fb9] mb-8">Our Team</h2>
          <p className="text-lg text-[#044a90] mb-8 max-w-4xl">
            Our team consists of high school and middle school students from Noble and Greenough School.
            We have many diverse interests and we use our wide range of skills to build robots and learn more about engineering and software development.
            Our mentors are dedicated faculty members who guide us through the process of building and programming our robots and support us at every step.
          </p>
        </section>

        {/* Mentors Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#0e6fb9] mb-8">Our Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 relative aspect-square">
                  <Image
                      src={mentor.imageSrc || "/placeholder.svg"}
                      alt={mentor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#044a90]">{mentor.name}</h3>
                    <span className="inline-block bg-[#4eb5e9] text-[#f5faff] px-3 py-1 rounded-full text-sm font-medium">
                      {mentor.role}
                    </span>
                  </div>
                  <p className="text-[#0e6fb9]">{mentor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Students Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#0e6fb9] mb-8">Our Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {students.map((student) => (
              <div key={student.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 relative aspect-square">
                  <Image
                      src={student.imageSrc || "/placeholder.svg"}
                      alt={student.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#044a90]">{student.name}</h3>
                    <span className="inline-block bg-[#4eb5e9] text-[#f5faff] px-3 py-1 rounded-full text-sm font-medium">
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

