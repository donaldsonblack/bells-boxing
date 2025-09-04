import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Clock, Dumbbell, MapPin, Users } from "lucide-react"
import ClassCard from "@/components/class-card"
import GrungeBackground from "@/components/grunge-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-zinc-900" />
          <GrungeBackground className="opacity-30" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="mb-6 w-40 md:w-56">
            <Image
              src="/images/BellsBoxingLogo.svg"
              alt="Bells Boxing Logo"
              width={240}
              height={240}
              className="drop-shadow-[0_0_10px_rgba(239,68,68,0.7)] fill-white"
            />
          </div>
          <h1 className="mb-4 font-display text-5xl font-bold uppercase tracking-tighter text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] md:text-7xl lg:text-8xl">
            FORGE YOUR <span className="text-red-500">LEGACY</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg font-medium text-zinc-200 md:text-xl">
            Train with champions. Build strength. Develop discipline. Join the most intense boxing experience in the
            city.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-red-600 text-white hover:bg-red-700">
              <Link href="/contact">JOIN NOW</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-950/30 hover:text-red-400 bg-transparent"
            >
              <Link href="/schedule">VIEW SCHEDULE</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
          <div className="flex space-x-8 rounded-full bg-zinc-900/80 px-8 py-4 backdrop-blur-sm">
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-red-500" />
              <span className="text-sm font-medium">Open 5AM - 9PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-red-500" />
              <span className="text-sm font-medium">116 Fyans St, South Geelong VIC 3220</span>
            </div>
            <div className="hidden items-center sm:flex">
              <Users className="mr-2 h-5 w-5 text-red-500" />
              <span className="text-sm font-medium">All Levels Welcome</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative bg-zinc-900 py-20">
        <GrungeBackground className="opacity-10" />
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="relative mb-6 inline-block font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl">
              ABOUT <span className="text-red-500">BELLS BOXING</span>
              <div className="absolute -bottom-2 left-0 h-1 w-full bg-red-500"></div>
            </h2>
            <p className="mb-8 text-lg text-zinc-300">
              Founded in 2010, Bells Boxing has established itself as the premier boxing gym in the city. Our mission is
              to provide authentic boxing training in a supportive yet challenging environment. Whether you're looking
              to compete or just get in the best shape of your life, our expert trainers will push you to your limits.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-zinc-800/50 p-6 backdrop-blur-sm">
                <Dumbbell className="mb-4 h-10 w-10 text-red-500" />
                <h3 className="mb-2 text-xl font-bold">State-of-the-art Facility</h3>
                <p className="text-zinc-400">
                  Professional boxing rings, heavy bags, speed bags, and strength training equipment.
                </p>
              </div>

              <div className="rounded-lg bg-zinc-800/50 p-6 backdrop-blur-sm">
                <Users className="mb-4 h-10 w-10 text-red-500" />
                <h3 className="mb-2 text-xl font-bold">Expert Trainers</h3>
                <p className="text-zinc-400">
                  Learn from former champions and certified boxing coaches with decades of experience.
                </p>
              </div>

              <div className="rounded-lg bg-zinc-800/50 p-6 backdrop-blur-sm">
                <Clock className="mb-4 h-10 w-10 text-red-500" />
                <h3 className="mb-2 text-xl font-bold">Flexible Schedule</h3>
                <p className="text-zinc-400">
                  Classes running from early morning to late night to fit your busy lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="relative bg-zinc-950 py-20">
        <GrungeBackground className="opacity-20" />
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="relative mb-6 inline-block font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl">
              OUR <span className="text-red-500">CLASSES</span>
              <div className="absolute -bottom-2 left-0 h-1 w-full bg-red-500"></div>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-300">
              From beginners to professional fighters, we offer classes for all skill levels. Push your limits and
              discover your potential.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ClassCard
              title="Beginner Boxing"
              description="Learn the fundamentals of boxing in a supportive environment. Focus on proper form, basic combinations, and conditioning."
              image="/images/beginner-boxing.jpg"
              imageQuery="beginner boxing class with coach teaching stance, dark gym setting"
              level="Beginner"
              duration="60 min"
            />

            <ClassCard
              title="Old School Boxing"
              description="Traditional boxing training focusing on fundamentals and technique. Our most popular class for all skill levels."
              image="/images/old-school-boxing.jpg"
              imageQuery="traditional boxing training with heavy bags, classic gym atmosphere"
              level="All Levels"
              duration="60 min"
              featured={true}
            />

            <ClassCard
              title="Boxing Bootcamp"
              description="High-intensity workout combining boxing with fitness training. Perfect for building strength and endurance."
              image="/images/boxing-bootcamp.jpg"
              imageQuery="boxing bootcamp class with multiple people training, intense workout atmosphere"
              level="All Levels"
              duration="60 min"
            />

            <ClassCard
              title="Advanced Boxing"
              description="For experienced boxers looking to refine technique, advanced combinations, and sparring preparation."
              image="/images/advanced-boxing.jpg"
              imageQuery="advanced boxing training with focus mitts, intense dark gym setting"
              level="Advanced"
              duration="60 min"
            />

            <ClassCard
              title="Conditioning"
              description="Boxing-specific strength and conditioning workout. Build the fitness foundation needed for serious training."
              image="/images/conditioning.jpg"
              imageQuery="boxing conditioning class with heavy bags, dark moody gym"
              level="All Levels"
              duration="45 min"
            />
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-950/30 hover:text-red-400 bg-transparent"
            >
              <Link href="/schedule" className="inline-flex items-center">
                VIEW FULL SCHEDULE <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-red-600 py-20">
        <GrungeBackground className="opacity-30" />
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl">
            START YOUR BOXING JOURNEY TODAY
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            First class is free. Experience the intensity, community, and transformation that awaits you.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-black text-white hover:bg-zinc-800">
              <Link href="/contact">BOOK FREE CLASS</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
