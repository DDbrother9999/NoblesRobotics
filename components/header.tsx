"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#044a90] text-[#f5faff] shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative mr-3 h-10 w-10">
              <Image
                src="/logo.svg?height=40&width=40"
                alt="Nobles Robotics"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <Link href="/" onClick={handleNavClick} className="text-2xl font-bold">
              Nobles Robotics
            </Link>
          </div>

          <div className="flex items-center">
            <nav className="mr-4 hidden items-center space-x-8 md:flex">
              <Link href="/" onClick={handleNavClick} className="font-medium transition-colors hover:text-[#90e0f4]">
                Home
              </Link>
              <Link
                href="/about-us"
                onClick={handleNavClick}
                className="font-medium transition-colors hover:text-[#90e0f4]"
              >
                About Us
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center font-medium transition-colors hover:text-[#90e0f4]">
                  Accomplishments <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border-[#4eb5e9] bg-[#0e6fb9] text-[#f5faff]">
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#4eb5e9]">
                    <Link href="/accomplishments/2023-2024" onClick={handleNavClick} className="w-full">
                      2023-2024
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#4eb5e9]">
                    <Link href="/accomplishments/2024-2025" onClick={handleNavClick} className="w-full">
                      2024-2025
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/sponsors"
                onClick={handleNavClick}
                className="font-medium transition-colors hover:text-[#90e0f4]"
              >
                Sponsors
              </Link>
            </nav>

            <button className="ml-4 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMenuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 12h16M4 6h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="mt-4 flex flex-col space-y-4 md:hidden">
            <Link href="/" className="font-medium transition-colors hover:text-[#90e0f4]" onClick={handleNavClick}>
              Home
            </Link>
            <Link
              href="/about-us"
              className="font-medium transition-colors hover:text-[#90e0f4]"
              onClick={handleNavClick}
            >
              About Us
            </Link>
            <div className="relative">
              <button
                className="flex items-center font-medium transition-colors hover:text-[#90e0f4]"
                onClick={(e) => {
                  e.preventDefault()
                  const submenu = e.currentTarget.nextElementSibling
                  if (submenu) submenu.classList.toggle("hidden")
                }}
              >
                Accomplishments <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="ml-4 mt-2 hidden flex-col space-y-2">
                <Link
                  href="/accomplishments/2023-2024"
                  className="font-medium transition-colors hover:text-[#90e0f4]"
                  onClick={handleNavClick}
                >
                  2023-2024
                </Link>
                <Link
                  href="/accomplishments/2024-2025"
                  className="font-medium transition-colors hover:text-[#90e0f4]"
                  onClick={handleNavClick}
                >
                  2024-2025
                </Link>
              </div>
            </div>
            <Link
              href="/sponsors"
              className="font-medium transition-colors hover:text-[#90e0f4]"
              onClick={handleNavClick}
            >
              Sponsors
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
