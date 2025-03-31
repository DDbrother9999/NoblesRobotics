"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Function to scroll to top when navigation links are clicked
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" })
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#044a90] text-[#f5faff] shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Team Logo/Image on the left */}
            <div className="relative w-10 h-10 mr-3">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Team Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Team Name */}
            <Link href="/" onClick={handleNavClick} className="text-2xl font-bold">
              Team Logo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" onClick={handleNavClick} className="font-medium hover:text-[#90e0f4] transition-colors">
              Home
            </Link>
            <Link
              href="/about-us"
              onClick={handleNavClick}
              className="font-medium hover:text-[#90e0f4] transition-colors"
            >
              About Us
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center font-medium hover:text-[#90e0f4] transition-colors">
                Accomplishments <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#0e6fb9] text-[#f5faff] border-[#4eb5e9]">
                <DropdownMenuItem className="hover:bg-[#4eb5e9] cursor-pointer">
                  <Link href="/accomplishments/2023-2024" onClick={handleNavClick} className="w-full">
                    2023-2024
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#4eb5e9] cursor-pointer">
                  <Link href="/accomplishments/2024-2025" onClick={handleNavClick} className="w-full">
                    2024-2025
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/sponsors"
              onClick={handleNavClick}
              className="font-medium hover:text-[#90e0f4] transition-colors"
            >
              Sponsors
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 flex flex-col space-y-4 md:hidden">
            <Link href="/" className="font-medium hover:text-[#90e0f4] transition-colors" onClick={handleNavClick}>
              Home
            </Link>
            <Link
              href="/about-us"
              className="font-medium hover:text-[#90e0f4] transition-colors"
              onClick={handleNavClick}
            >
              About Us
            </Link>
            <div className="relative">
              <button
                className="flex items-center font-medium hover:text-[#90e0f4] transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  const submenu = e.currentTarget.nextElementSibling
                  if (submenu) {
                    submenu.classList.toggle("hidden")
                  }
                }}
              >
                Accomplishments <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="hidden ml-4 mt-2 flex flex-col space-y-2">
                <Link
                  href="/accomplishments/2023-2024"
                  className="font-medium hover:text-[#90e0f4] transition-colors"
                  onClick={handleNavClick}
                >
                  2023-2024
                </Link>
                <Link
                  href="/accomplishments/2024-2025"
                  className="font-medium hover:text-[#90e0f4] transition-colors"
                  onClick={handleNavClick}
                >
                  2024-2025
                </Link>
              </div>
            </div>
            <Link
              href="/sponsors"
              className="font-medium hover:text-[#90e0f4] transition-colors"
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

