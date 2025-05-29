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
      answer: "First Tech Challenge (FTC) is a robotics competition for middle and high school students. Teams design, build, and program robots to compete in a series of challenges. Learn more about this years challenge here: <a href='https://www.firstinspires.org/robotics/ftc'>https://www.firstinspires.org/robotics/ftc</a>.",
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
          <Image
            src="/robotics-homepage.jpg?height=1080&width=1920"
            alt="Team Hero Image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#044a90]/80 flex items-end pb-24 md:pb-32">
          <div className="container mx-auto px-4">
            <motion.h1
                className="text-4xl md:text-6xl font-bold text-[#f5faff] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
              Nobles Robotics
            </motion.h1>
            <motion.p
                className="text-xl md:text-2xl text-[#f5faff] max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ delay: 0.8, duration: 0.8 }}
            >
              A High School Robotics Team in Dedham, Massachusetts
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[#f5faff]">
        <div className="container mx-auto px-4">
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl italic text-[#044a90] mb-6">
              "George your blurb goes here"
            </p>
            <footer className="text-lg text-[#0e6fb9]">— George</footer>
          </blockquote>
        </div>
      </section>

      {/* Navigation Boxes */}
      <section className="py-16 bg-[#90e0f4]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#044a90] mb-12">Explore Our Journey</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Us NavBox */}
            <Link href="/about-us">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 h-full">
                <div className="h-48 relative">
                  <Image src="/index/about-us.jpg?height=400&width=600" alt="About Us" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#044a90] mb-2">About Us</h3>
                  <p className="text-[#0e6fb9]">
                    Meet our team of students and mentors dedicated to learning more about robotics!
                  </p>
                </div>
              </div>
            </Link>

            {/* Accomplishments NavBox */}
            <Link href="/accomplishments/2023-2024">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 h-full">
                <div className="h-48 relative">
                  <Image
                    src="/index/accomplishments.jpg?height=400&width=600"
                    alt="Accomplishments"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#044a90] mb-2">Accomplishments</h3>
                  <p className="text-[#0e6fb9]">Explore our accomplishments throughout the season!</p>
                </div>
              </div>
            </Link>

            {/* Sponsors NavBox */}
            <Link href="/sponsors">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 h-full">
                <div className="h-48 relative">
                  <Image src="/index/sponsors.jpg?height=400&width=600" alt="Sponsors" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#044a90] mb-2">Sponsors</h3>
                  <p className="text-[#0e6fb9]">
                    Meet the organizations that support our team and help us achieve our goals!
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f5faff]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#044a90] mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
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
                    openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div
                      className="text-[#0e6fb9]"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

