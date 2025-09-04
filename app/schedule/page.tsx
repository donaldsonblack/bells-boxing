import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Dumbbell, Users } from "lucide-react"
import GrungeBackground from "@/components/grunge-background"
import PageHeader from "@/components/page-header"
import Link from "next/link"

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100">
      <PageHeader
        title="CLASS SCHEDULE"
        subtitle="Find the perfect class for your schedule and skill level"
        backgroundImage="/images/schedule-header.jpg"
        backgroundQuery="boxing gym with ring and equipment, dark moody lighting"
      />

      <section className="relative py-16">
        <GrungeBackground className="opacity-10" />
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="relative mb-6 inline-block font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              WEEKLY <span className="text-red-500">SCHEDULE</span>
              <div className="absolute -bottom-2 left-0 h-1 w-full bg-red-500"></div>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-300">
              Classes run 6 days a week with options from early morning to evening. Reserve your spot online or drop in.
            </p>
          </div>

          <Tabs defaultValue="monday" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-6 bg-zinc-800/50">
              <TabsTrigger value="monday">MON</TabsTrigger>
              <TabsTrigger value="tuesday">TUE</TabsTrigger>
              <TabsTrigger value="wednesday">WED</TabsTrigger>
              <TabsTrigger value="thursday">THU</TabsTrigger>
              <TabsTrigger value="friday">FRI</TabsTrigger>
              <TabsTrigger value="saturday">SAT</TabsTrigger>
            </TabsList>

            {/* Monday Schedule */}
            <TabsContent value="monday">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <ScheduleCard time="9:15 AM - 10:15 AM" className="Beginner Boxing" level="Beginner" trainer="Greg" />
                <ScheduleCard
                  time="5:00 PM - 6:00 PM"
                  className="Old School Boxing"
                  level="All Levels"
                  trainer="Greg"
                  featured={true}
                />
                <ScheduleCard time="6:00 PM - 7:00 PM" className="Boxing Bootcamp" level="All Levels" trainer="Greg" />
                <ScheduleCard time="7:00 PM - 8:00 PM" className="Advanced Boxing" level="Advanced" trainer="Greg" />
              </div>
            </TabsContent>

            {/* Tuesday Schedule */}
            <TabsContent value="tuesday">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <ScheduleCard time="6:00 AM - 7:00 AM" className="Beginner Boxing" level="Beginner" trainer="Greg" />
                <ScheduleCard
                  time="5:00 PM - 6:00 PM"
                  className="Old School Boxing"
                  level="All Levels"
                  trainer="Greg"
                  featured={true}
                />
                <ScheduleCard time="6:00 PM - 7:00 PM" className="Beginner Boxing" level="Beginner" trainer="Greg" />
                <ScheduleCard time="7:00 PM - 8:00 PM" className="Conditioning" level="All Levels" trainer="Greg" />
              </div>
            </TabsContent>

            {/* Wednesday Schedule */}
            <TabsContent value="wednesday">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <ScheduleCard time="9:00 AM - 10:00 AM" className="Beginner Boxing" level="Beginner" trainer="Greg" />
                <ScheduleCard
                  time="5:00 PM - 6:00 PM"
                  className="Old School Boxing"
                  level="All Levels"
                  trainer="Greg"
                  featured={true}
                />
                <ScheduleCard time="6:00 PM - 7:00 PM" className="Boxing Bootcamp" level="All Levels" trainer="Greg" />
                <ScheduleCard time="7:00 PM - 8:00 PM" className="Advanced Boxing" level="Advanced" trainer="Greg" />
              </div>
            </TabsContent>

            {/* Thursday Schedule */}
            <TabsContent value="thursday">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <ScheduleCard time="6:00 AM - 7:00 AM" className="Beginner Boxing" level="Beginner" trainer="Greg" />
                <ScheduleCard
                  time="5:00 PM - 6:00 PM"
                  className="Old School Boxing"
                  level="All Levels"
                  trainer="Greg"
                  featured={true}
                />
                <ScheduleCard time="6:00 PM - 7:00 PM" className="Beginner Boxing" level="Beginner" trainer="Greg" />
                <ScheduleCard time="7:00 PM - 8:00 PM" className="Conditioning" level="All Levels" trainer="Greg" />
              </div>
            </TabsContent>

            {/* Friday Schedule */}
            <TabsContent value="friday">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                <ScheduleCard time="9:15 AM - 10:15 AM" className="Beginner Boxing" level="Beginner" trainer="Greg" />
                <ScheduleCard
                  time="6:00 PM - 7:00 PM"
                  className="Old School Boxing"
                  level="All Levels"
                  trainer="Greg"
                  featured={true}
                />
              </div>
            </TabsContent>

            {/* Saturday Schedule */}
            <TabsContent value="saturday">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                <ScheduleCard
                  time="8:00 AM - 9:00 AM"
                  className="Old School Boxing"
                  level="All Levels"
                  trainer="Greg"
                  featured={true}
                />
                <ScheduleCard time="9:15 AM - 10:15 AM" className="Beginner Boxing" level="Beginner" trainer="Greg" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="relative bg-zinc-950 py-16">
        <GrungeBackground className="opacity-20" />
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="relative mb-6 inline-block font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
                CLASS <span className="text-red-500">INFORMATION</span>
                <div className="absolute -bottom-2 left-0 h-1 w-full bg-red-500"></div>
              </h2>
              <div className="mb-6 space-y-6">
                <div>
                  <h3 className="mb-2 text-xl font-bold">Class Types</h3>
                  <div className="space-y-2 text-zinc-300">
                    <p>
                      <strong className="text-red-500">Beginner Boxing:</strong> Perfect for newcomers. Learn basic
                      techniques, footwork, and conditioning.
                    </p>
                    <p>
                      <strong className="text-blue-400">Old School Boxing:</strong> Traditional boxing training focusing
                      on fundamentals and technique.
                    </p>
                    <p>
                      <strong className="text-green-400">Boxing Bootcamp:</strong> High-intensity workout combining
                      boxing with fitness training.
                    </p>
                    <p>
                      <strong className="text-orange-400">Advanced Boxing:</strong> For experienced boxers. Advanced
                      techniques and sparring preparation.
                    </p>
                    <p>
                      <strong className="text-yellow-400">Conditioning:</strong> Strength and conditioning focused on
                      boxing-specific fitness.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">What to Bring</h3>
                  <p className="text-zinc-300">
                    Hand wraps (available for purchase), water bottle, and comfortable workout clothes. Boxing gloves
                    are provided for beginners, but we recommend getting your own.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">Reservations</h3>
                  <p className="text-zinc-300">
                    We recommend booking in advance as classes can fill up quickly, especially evening sessions.
                  </p>
                </div>
              </div>
              <Button className="bg-red-600 text-white hover:bg-red-700">BOOK A CLASS</Button>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-lg md:mt-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-mPkvmD7DbqK6pqEj6xSqIkQiIoDpCw.jpeg"
                alt="Bells Boxing Class Timetable"
                width={600}
                height={800}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="mb-2 text-xl font-bold text-white">Official Timetable</h3>
                <p className="text-zinc-200">Check out our complete weekly schedule with all class times and types.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-red-600 py-12">
        <GrungeBackground className="opacity-30" />
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold uppercase tracking-tight text-white">
            READY TO START YOUR BOXING JOURNEY?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-white/90">
            Book your first free class today and experience the intensity of Bells Boxing.
          </p>
          <Button asChild size="lg" className="bg-black text-white hover:bg-zinc-800">
            <Link href="/contact">RESERVE YOUR SPOT</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

function ScheduleCard({ time, className, level, trainer, featured = false }) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg ${featured ? "border-2 border-red-500" : "border border-zinc-800"} bg-zinc-800/30 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1`}
    >
      {featured && (
        <div className="absolute -right-8 top-4 rotate-45 bg-red-500 px-8 py-1 text-xs font-bold text-white">
          POPULAR
        </div>
      )}
      <div className="mb-4 flex items-center text-zinc-400">
        <Clock className="mr-2 h-4 w-4 text-red-500" />
        <span>{time}</span>
      </div>
      <h3 className="mb-2 text-xl font-bold text-white">{className}</h3>
      <div className="mb-2 flex items-center">
        <Dumbbell className="mr-2 h-4 w-4 text-red-500" />
        <span className="text-sm text-zinc-300">{level}</span>
      </div>
      <div className="flex items-center">
        <Users className="mr-2 h-4 w-4 text-red-500" />
        <span className="text-sm text-zinc-300">Trainer: {trainer}</span>
      </div>
      <Button
        asChild
        variant="outline"
        size="sm"
        className="mt-4 w-full border-red-500 text-red-500 hover:bg-red-950/30 hover:text-red-400 bg-transparent"
      >
        <Link href="/contact">RESERVE</Link>
      </Button>
    </div>
  )
}
