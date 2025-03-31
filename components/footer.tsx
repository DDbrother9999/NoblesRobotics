import Link from "next/link"
import Image from "next/image"
import { Mail, Instagram, Github, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#044a90] text-[#f5faff] py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 justify-items-center">
            {/* Left Column: Logo, Copyright, Location, Email */}
            <div className="flex flex-col items-center justify-start h-full">
              {/* Team Logo */}
              <div className="relative w-40 h-40 mb-4">
                <Image src="/placeholder.svg?height=200&width=200" alt="Team Logo" fill className="object-contain" />
              </div>

              <div className="mt-2 text-center">
                <p className="font-bold">© Nobles Robotics</p>
                <p className="text-sm mt-1">10 Campus Dr, Dedham, MA 02026</p>
                <a
                  href="mailto:noblesrobotics@gmail.com"
                  className="text-sm hover:text-[#90e0f4] transition-colors mt-1 block"
                >
                  noblesrobotics@gmail.com
                </a>
              </div>
            </div>

            {/* Right Column: Quick Links and Social Media */}
            <div className="flex flex-col items-center justify-start h-full">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-center">
                <li>
                  <Link href="/" className="hover:text-[#90e0f4] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-[#90e0f4] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/accomplishments/2023-2024" className="hover:text-[#90e0f4] transition-colors">
                    Accomplishments
                  </Link>
                </li>
                <li>
                  <Link href="/sponsors" className="hover:text-[#90e0f4] transition-colors">
                    Sponsors
                  </Link>
                </li>
              </ul>

              <div className="flex space-x-4 mt-6">
                {/* Social Media Icons */}
                <a
                  href="mailto:noblesrobotics@gmail.com"
                  className="hover:text-[#90e0f4] transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
                <a href="#" className="hover:text-[#90e0f4] transition-colors" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-[#90e0f4] transition-colors" aria-label="GitHub">
                  <Github size={24} />
                </a>
                <a href="#" className="hover:text-[#90e0f4] transition-colors" aria-label="YouTube">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

