import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"
import GrungeBackground from "@/components/grunge-background"
import PageHeader from "@/components/page-header"
import Link from "next/link"

export default function TrainersPage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100">
      <PageHeader
        title="OUR TRAINERS"
        subtitle="Learn from champions with decades of experience in and out of the ring"
        backgroundImage="/images/trainers-header.jpg"
        backgroundQuery="boxing coach with fighter in ring, dramatic lighting, dark gym"
      />

      <section className="relative py-16">
        <GrungeBackground className="opacity-10" />
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="relative mb-6 inline-block font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              ELITE <span className="text-red-500">COACHING STAFF</span>
              <div className="absolute -bottom-2 left-0 h-1 w-full bg-red-500"></div>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-300">
              Our trainers bring decades of experience from professional rings, Olympic teams, and championship titles.
              Each coach is certified and dedicated to helping you reach your full potential.
            </p>
          </div>

          <div className="grid gap-12">
            {/* Featured Trainer */}
            <div className="overflow-hidden rounded-lg bg-zinc-800/30 backdrop-blur-sm">
              <div className="grid md:grid-cols-2">
                <div className="relative h-[400px] md:h-auto">
                  <Image
                    src="/images/head-coach.jpg"
                    alt="Mike 'The Hammer' Johnson"
                    fill
                    className="object-cover"
                    query="muscular male boxing head coach with championship belt, dramatic lighting, dark background"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-2 inline-block bg-red-500 px-3 py-1 text-sm font-bold uppercase text-white">
                    Head Coach
                  </div>
                  <h3 className="mb-4 font-display text-3xl font-bold">Mike "The Hammer" Johnson</h3>
                  <p className="mb-6 text-zinc-300">
                    With over 20 years of experience in professional boxing, Mike brings unparalleled expertise to Bells
                    Boxing. As a former Heavyweight Champion with a record of 28-2 (22 KOs), he knows what it takes to
                    compete at the highest level.
                  </p>
                  <div className="mb-6">
                    <h4 className="mb-2 text-lg font-bold">Specialties:</h4>
                    <ul className="list-inside list-disc space-y-1 text-zinc-300">
                      <li>Power punching techniques</li>
                      <li>Defensive strategy</li>
                      <li>Fight preparation</li>
                      <li>Mental conditioning</li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="mb-2 text-lg font-bold">Certifications:</h4>
                    <ul className="list-inside list-disc space-y-1 text-zinc-300">
                      <li>USA Boxing Level 3 Coach</li>
                      <li>Strength & Conditioning Specialist</li>
                      <li>Sports Nutrition Certified</li>
                    </ul>
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
                    >
                      <Twitter className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
                    >
                      <Facebook className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-zinc-950 py-16">
        <GrungeBackground className="opacity-20" />
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="relative mb-6 inline-block font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
                PERSONAL <span className="text-red-500">TRAINING</span>
                <div className="absolute -bottom-2 left-0 h-1 w-full bg-red-500"></div>
              </h2>
              <p className="mb-6 text-lg text-zinc-300">
                Take your training to the next level with one-on-one coaching from our elite trainers. Personal training
                sessions are tailored to your specific goals, whether you're looking to:
              </p>
              <ul className="mb-6 list-inside list-disc space-y-2 text-zinc-300">
                <li>Improve your technique</li>
                <li>Prepare for competition</li>
                <li>Accelerate your fitness results</li>
                <li>Overcome specific challenges</li>
                <li>Learn advanced skills</li>
              </ul>
              <p className="mb-8 text-lg text-zinc-300">
                All personal training packages include a customized training plan, nutrition guidance, and regular
                progress assessments.
              </p>
              <Button className="bg-red-600 text-white hover:bg-red-700">BOOK A SESSION</Button>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-lg md:mt-0">
              <Image
                src="/images/personal-training.jpg"
                alt="Personal training session"
                width={600}
                height={400}
                className="h-full w-full object-cover"
                query="boxing personal training session with coach and fighter, focus mitts, dark moody gym with red lighting accents"
              />
              <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="mb-2 text-2xl font-bold text-white">
                  Starting at $75 <span className="text-base font-normal">per session</span>
                </div>
                <p className="text-zinc-200">Packages available for 5, 10, or 20 sessions with significant savings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-red-600 py-12">
        <GrungeBackground className="opacity-30" />
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold uppercase tracking-tight text-white">
            TRAIN WITH THE BEST
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-white/90">
            Book a session with one of our elite trainers and experience the difference.
          </p>
          <Button asChild size="lg" className="bg-black text-white hover:bg-zinc-800">
            <Link href="/contact">SCHEDULE NOW</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

function TrainerProfile({ name, title, image, imageQuery, bio, specialties, certifications }) {
  return (
    <div className="overflow-hidden rounded-lg bg-zinc-800/30 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-[300px]">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" query={imageQuery} />
      </div>
      <div className="p-6">
        <div className="mb-2 inline-block bg-red-500 px-3 py-1 text-xs font-bold uppercase text-white">{title}</div>
        <h3 className="mb-3 font-display text-xl font-bold">{name}</h3>
        <p className="mb-4 text-zinc-300">{bio}</p>
        <div className="mb-4">
          <h4 className="mb-1 text-sm font-bold uppercase text-zinc-400">Specialties:</h4>
          <ul className="list-inside list-disc space-y-1 text-zinc-300">
            {specialties.map((specialty, index) => (
              <li key={index} className="text-sm">
                {specialty}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="mb-1 text-sm font-bold uppercase text-zinc-400">Certifications:</h4>
          <ul className="list-inside list-disc space-y-1 text-zinc-300">
            {certifications.map((certification, index) => (
              <li key={index} className="text-sm">
                {certification}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
          >
            <Instagram className="mr-1 h-4 w-4" />
            <span className="text-xs">Follow</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-red-500 text-red-500 hover:bg-red-950/30 hover:text-red-400"
          >
            <span className="text-xs">Book Session</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
