"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

type FAQ = {
  question: string
  answer: string
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs: FAQ[] = [
    {
      question: "What is FTC Robotics?",
      answer:
        "First Tech Challenge (FTC) is a robotics competition for middle and high school students. Teams design, build, and program robots to compete in a series of challenges. Learn more about this years challenge here: <a href='https://www.firstinspires.org/robotics/ftc'>https://www.firstinspires.org/robotics/ftc</a>.",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <main className="min-h-screen">
      <section className="relative h-screen overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <Image src="/placeholder-pryeq.png" alt="Team Hero Image" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 flex items-end bg-gradient-to-b from-transparent to-[#044a90]/80 pb-24 md:pb-32">
          <div className="container mx-auto px-4">
            <motion.h1
              className="mb-4 text-4xl font-bold text-[#f5faff] md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Nobles Robotics
            </motion.h1>
            <motion.p
              className="max-w-2xl text-xl text-[#f5faff] md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              A High School Robotics Team in Dedham, Massachusetts
            </motion.p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5faff] py-16">
        <div className="container mx-auto px-4">
          <blockquote className="text-center">
            <p className="mb-6 text-2xl italic text-[#044a90] md:text-3xl">{'"George your blurb goes here"'}</p>
            <footer className="text-lg text-[#0e6fb9]">— George</footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-[#90e0f4]/20 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#044a90]">Explore Our Journey</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/about-us">
              <div className="h-full overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image src="/students-mentors-group.png" alt="About Us" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-[#044a90]">About Us</h3>
                  <p className="text-[#0e6fb9]">
                    Meet our team of students and mentors dedicated to learning more about robotics!
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/accomplishments/2023-2024">
              <div className="h-full overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image src="/placeholder-n2v34.png" alt="Accomplishments" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-[#044a90]">Accomplishments</h3>
                  <p className="text-[#0e6fb9]">Explore our accomplishments throughout the season!</p>
                </div>
              </div>
            </Link>

            <Link href="/sponsors">
              <div className="h-full overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image src="/company-logos-grid.png" alt="Sponsors" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-[#044a90]">Sponsors</h3>
                  <p className="text-[#0e6fb9]">
                    Meet the organizations that support our team and help us achieve our goals!
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f5faff] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#044a90]">Frequently Asked Questions</h2>

          <div className="mx-auto max-w-3xl">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 overflow-hidden rounded-lg bg-white shadow-md">
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-[#044a90]">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-[#0e6fb9]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#0e6fb9]" />
                  )}
                </button>

                <div
                  className={`px-6 pb-4 transition-all duration-300 ease-in-out ${
                    openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                  }`}
                >
                  <div className="text-[#0e6fb9]" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
