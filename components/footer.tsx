import Link from "next/link"
import Image from "next/image"
import GrungeBackground from "@/components/grunge-background"

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 text-zinc-300">
      <GrungeBackground className="opacity-20" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/BellsBoxingLogo.svg"
                alt="Bells Boxing Logo"
                width={150}
                height={50}
                className="h-12 w-auto fill-white"
              />
            </Link>
            <p className="mb-6 text-zinc-400">
              Premium boxing training for all skill levels. Build strength, technique, and confidence in a supportive
              community.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 transition-colors hover:text-red-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-zinc-400 transition-colors hover:text-red-500">
                  Class Schedule
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 transition-colors hover:text-red-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Classes</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/schedule" className="text-zinc-400 transition-colors hover:text-red-500">
                  Beginner Boxing
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-zinc-400 transition-colors hover:text-red-500">
                  Advanced Technique
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-zinc-400 transition-colors hover:text-red-500">
                  Boxing Conditioning
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-zinc-400 transition-colors hover:text-red-500">
                  Sparring Sessions
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-zinc-400 transition-colors hover:text-red-500">
                  Youth Boxing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact Info</h3>
            <address className="not-italic">
              <p className="mb-2 text-zinc-400">116 Fyans St</p>
              <p className="mb-4 text-zinc-400">South Geelong, Geelong, 3220</p>
              <p className="mb-2 text-zinc-400">
                <strong className="text-white">Phone:</strong> 0 407 581 872
              </p>
              <p className="mb-4 text-zinc-400">
                <strong className="text-white">Email:</strong> greg@bellsboxing.com
              </p>
              <p className="text-zinc-400">
                <strong className="text-white">Hours:</strong>
                <br />
                All Days: 5:00 AM - 9:00 PM
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Bells Boxing. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4 text-sm">
            <Link href="/privacy" className="text-zinc-500 transition-colors hover:text-zinc-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-zinc-500 transition-colors hover:text-zinc-400">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-zinc-500 transition-colors hover:text-zinc-400">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
