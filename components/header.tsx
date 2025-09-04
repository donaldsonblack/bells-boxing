"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useMounted } from "@/hooks/use-mounted"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const isMounted = useMounted()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerClasses = `fixed top-0 z-50 w-full transition-all duration-300 ${
    isMounted && isScrolled ? "bg-zinc-900/90 backdrop-blur-md" : "bg-transparent"
  }`

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/BellsBoxingLogoWhite.svg"
            alt="Bells Boxing Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/schedule">Schedule</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-red-600 text-white hover:bg-red-700">
            <Link href="/contact">FREE CLASS</Link>
          </Button>
        </div>

        {isMounted && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-900 text-zinc-100">
              <div className="mt-8 flex flex-col space-y-4">
                <MobileNavLink href="/">Home</MobileNavLink>
                <MobileNavLink href="/schedule">Schedule</MobileNavLink>
                <MobileNavLink href="/contact">Contact</MobileNavLink>
                <Button asChild className="mt-4 bg-red-600 text-white hover:bg-red-700">
                  <Link href="/contact">FREE CLASS</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="relative font-medium text-zinc-300 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all hover:after:w-full"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="border-b border-zinc-800 py-3 text-lg font-medium text-zinc-300 transition-colors hover:text-white"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }}
    >
      {children}
    </Link>
  )
}
