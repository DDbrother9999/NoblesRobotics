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
      name: "Jane Smith",
      role: "Lead Mentor",
      description:
        "Jane has over 15 years of experience in the field and has been mentoring teams for the past 8 years. She specializes in strategy development and team leadership.",
      imageSrc: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Technical Mentor",
      description:
        "John brings 12 years of technical expertise to the team. He guides students through complex technical challenges and helps them develop innovative solutions.",
      imageSrc: "/placeholder.svg?height=400&width=400",
    },
  ]

  const students: TeamMember[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Team Captain",
      description:
        "Alex leads the team with enthusiasm and dedication. Their strategic thinking and problem-solving skills have been instrumental to the team's success.",
      imageSrc: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      name: "Sam Williams",
      role: "Technical Lead",
      description:
        "Sam oversees the technical aspects of our projects. Their innovative approach and attention to detail ensure our solutions are both creative and reliable.",
      imageSrc: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      name: "Taylor Brown",
      role: "Design Specialist",
      description:
        "Taylor brings creative vision to our projects. Their design skills and aesthetic sensibility help our work stand out from the crowd.",
      imageSrc: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 4,
      name: "Jordan Lee",
      role: "Programming Expert",
      description:
        "Jordan excels in coding and software development. Their ability to write efficient code and solve complex problems is a valuable asset to the team.",
      imageSrc: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 5,
      name: "Casey Martinez",
      role: "Research Analyst",
      description:
        "Casey conducts thorough research to inform our projects. Their analytical skills and attention to detail provide a solid foundation for our work.",
      imageSrc: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 6,
      name: "Riley Wilson",
      role: "Communications Specialist",
      description:
        "Riley manages our team's communications and presentations. Their excellent communication skills help us effectively share our ideas and achievements.",
      imageSrc: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 7,
      name: "Morgan Garcia",
      role: "Project Manager",
      description:
        "Morgan keeps our projects on track and ensures we meet our deadlines. Their organizational skills and leadership are essential to our success.",
      imageSrc: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 8,
      name: "Avery Thomas",
      role: "Hardware Specialist",
      description:
        "Avery works on the physical components of our projects. Their hands-on skills and technical knowledge bring our ideas to life.",
      imageSrc: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 9,
      name: "Quinn Robinson",
      role: "Data Analyst",
      description:
        "Quinn analyzes data to inform our decision-making. Their statistical skills and logical thinking help us optimize our performance.",
      imageSrc: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 10,
      name: "Jamie Clark",
      role: "Outreach Coordinator",
      description:
        "Jamie manages our relationships with sponsors and the community. Their networking skills and friendly demeanor help us build strong partnerships.",
      imageSrc: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <main className="min-h-screen py-12 bg-[#f5faff]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#044a90] mb-12">About Us</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#0e6fb9] mb-8">Our Team</h2>
          <p className="text-lg text-[#044a90] mb-8 max-w-4xl">
            We are a dedicated group of mentors and students working together to achieve excellence in our field. Our
            diverse team brings together a wide range of skills and perspectives, allowing us to tackle complex
            challenges and develop innovative solutions.
          </p>
        </section>

        {/* Mentors Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#0e6fb9] mb-8">Our Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image src={mentor.imageSrc || "/placeholder.svg"} alt={mentor.name} fill className="object-cover" />
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
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src={student.imageSrc || "/placeholder.svg"}
                    alt={student.name}
                    fill
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

