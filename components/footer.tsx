import Link from "next/link"
import Image from "next/image"
import { Mail, Instagram, Github, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#044a90] py-8 text-[#f5faff]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 justify-items-center gap-x-16 gap-y-8 md:grid-cols-2">
            <div className="flex h-full flex-col items-center justify-start">
              <div className="relative mb-4 h-40 w-40">
                <Image src="/logo.svg?height=200&width=200" alt="Team Logo" fill className="object-contain" />
              </div>

              <div className="mt-2 text-center">
                <p className="font-bold">{"© Nobles Robotics"}</p>
                <p className="mt-1 text-sm">10 Campus Dr, Dedham, MA 02026</p>
                <a
                  href="mailto:noblesrobotics@gmail.com"
                  className="mt-1 block text-sm transition-colors hover:text-[#90e0f4]"
                >
                  noblesrobotics@gmail.com
                </a>
              </div>
            </div>

            <div className="flex h-full flex-col items-center justify-start">
              <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
              <ul className="space-y-2 text-center">
                <li>
                  <Link href="/" className="transition-colors hover:text-[#90e0f4]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/accomplishments" className="transition-colors hover:text-[#90e0f4]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/accomplishments/2023-2024" className="transition-colors hover:text-[#90e0f4]">
                    Accomplishments
                  </Link>
                </li>
                <li>
                  <Link href="/sponsors" className="transition-colors hover:text-[#90e0f4]">
                    Sponsors
                  </Link>
                </li>
              </ul>

              <div className="mt-6 flex space-x-4">
                <a
                  href="mailto:noblesrobotics@gmail.com"
                  className="transition-colors hover:text-[#90e0f4]"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://www.instagram.com/noblesrobotics/"
                  className="transition-colors hover:text-[#90e0f4]"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://github.com/Nobles-Robotics"
                  className="transition-colors hover:text-[#90e0f4]"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.youtube.com/@NoblesRobotics"
                  className="transition-colors hover:text-[#90e0f4]"
                  aria-label="YouTube"
                >
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
