import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GrungeBackground from "@/components/grunge-background"
import PageHeader from "@/components/page-header"
import Link from "next/link"

export default function MembershipsPage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100">
      <PageHeader
        title="MEMBERSHIPS"
        subtitle="Choose the plan that fits your goals and schedule"
        backgroundImage="/images/memberships-header.jpg"
        backgroundQuery="boxing gym interior with equipment and ring, dark moody lighting with red accents"
      />

      <section className="relative py-16">
        <GrungeBackground className="opacity-10" />
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="relative mb-6 inline-block font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              MEMBERSHIP <span className="text-red-500">PLANS</span>
              <div className="absolute -bottom-2 left-0 h-1 w-full bg-red-500"></div>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-300">
              No contracts. No hidden fees. Just honest pricing for serious training. All memberships include access to
              our state-of-the-art facility and equipment.
            </p>
          </div>

          <Tabs defaultValue="monthly" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="bg-zinc-800/50">
                <TabsTrigger value="monthly">MONTHLY</TabsTrigger>
                <TabsTrigger value="annual">ANNUAL (SAVE 20%)</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly">
              <div className="grid gap-8 md:grid-cols-3">
                <MembershipCard
                  name="Basic"
                  price="89"
                  period="month"
                  description="Perfect for beginners looking to try boxing and get in shape."
                  features={[
                    { included: true, text: "Access to all group classes" },
                    { included: true, text: "Basic equipment usage" },
                    { included: true, text: "Locker room access" },
                    { included: false, text: "Personal training sessions" },
                    { included: false, text: "Premium equipment access" },
                    { included: false, text: "Nutrition consultation" },
                  ]}
                />

                <MembershipCard
                  name="Fighter"
                  price="129"
                  period="month"
                  description="Our most popular plan for dedicated boxers looking to improve their skills."
                  features={[
                    { included: true, text: "Unlimited class access" },
                    { included: true, text: "Full equipment usage" },
                    { included: true, text: "Locker room access" },
                    { included: true, text: "1 personal training session/month" },
                    { included: false, text: "Premium equipment access" },
                    { included: false, text: "Nutrition consultation" },
                  ]}
                  featured={true}
                />

                <MembershipCard
                  name="Champion"
                  price="199"
                  period="month"
                  description="The ultimate boxing experience for those serious about their training."
                  features={[
                    { included: true, text: "Unlimited class access" },
                    { included: true, text: "Full equipment usage" },
                    { included: true, text: "Premium locker with towel service" },
                    { included: true, text: "4 personal training sessions/month" },
                    { included: true, text: "Premium equipment access" },
                    { included: true, text: "Nutrition consultation" },
                  ]}
                />
              </div>
            </TabsContent>

            <TabsContent value="annual">
              <div className="grid gap-8 md:grid-cols-3">
                <MembershipCard
                  name="Basic Annual"
                  price="852"
                  period="year"
                  description="Perfect for beginners looking to try boxing and get in shape."
                  features={[
                    { included: true, text: "Access to all group classes" },
                    { included: true, text: "Basic equipment usage" },
                    { included: true, text: "Locker room access" },
                    { included: false, text: "Personal training sessions" },
                    { included: false, text: "Premium equipment access" },
                    { included: false, text: "Nutrition consultation" },
                  ]}
                  savings="Save $216"
                />

                <MembershipCard
                  name="Fighter Annual"
                  price="1,236"
                  period="year"
                  description="Our most popular plan for dedicated boxers looking to improve their skills."
                  features={[
                    { included: true, text: "Unlimited class access" },
                    { included: true, text: "Full equipment usage" },
                    { included: true, text: "Locker room access" },
                    { included: true, text: "12 personal training sessions/year" },
                    { included: false, text: "Premium equipment access" },
                    { included: false, text: "Nutrition consultation" },
                  ]}
                  featured={true}
                  savings="Save $312"
                />

                <MembershipCard
                  name="Champion Annual"
                  price="1,908"
                  period="year"
                  description="The ultimate boxing experience for those serious about their training."
                  features={[
                    { included: true, text: "Unlimited class access" },
                    { included: true, text: "Full equipment usage" },
                    { included: true, text: "Premium locker with towel service" },
                    { included: true, text: "48 personal training sessions/year" },
                    { included: true, text: "Premium equipment access" },
                    { included: true, text: "Nutrition consultation" },
                  ]}
                  savings="Save $480"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="relative bg-zinc-950 py-16">
        <GrungeBackground className="opacity-20" />
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="relative mb-6 inline-block font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              MEMBERSHIP <span className="text-red-500">BENEFITS</span>
              <div className="absolute -bottom-2 left-0 h-1 w-full bg-red-500"></div>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-300">
              All Bells Boxing memberships include these core benefits to ensure you get the most out of your training.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <BenefitCard
              title="State-of-the-art Facility"
              description="Train in our 10,000 sq ft facility featuring two professional rings, heavy bag area, and strength training zone."
              image="/images/facility.jpg"
              imageQuery="boxing gym interior with rings and equipment, dark moody lighting"
            />

            <BenefitCard
              title="Expert Coaching"
              description="Learn from our team of professional coaches with decades of combined experience in the ring."
              image="/images/coaching.jpg"
              imageQuery="boxing coach working with fighter on technique, dark gym setting"
            />

            <BenefitCard
              title="Community"
              description="Join a supportive community of like-minded individuals all pushing to be their best."
              image="/images/community.jpg"
              imageQuery="diverse group of boxers training together, dark gym with red accents"
            />

            <BenefitCard
              title="Results"
              description="See real transformation in your fitness, skills, and confidence with consistent training."
              image="/images/results.jpg"
              imageQuery="fit boxer with determined expression after workout, dark moody gym"
            />
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <GrungeBackground className="opacity-10" />
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="relative mb-6 inline-block font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
                FREQUENTLY <span className="text-red-500">ASKED QUESTIONS</span>
                <div className="absolute -bottom-2 left-0 h-1 w-full bg-red-500"></div>
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-xl font-bold">Is there a joining fee?</h3>
                  <p className="text-zinc-300">
                    Yes, there is a one-time joining fee of $49 which covers your account setup, initial assessment, and
                    a pair of hand wraps to get you started.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold">Can I freeze my membership?</h3>
                  <p className="text-zinc-300">
                    Yes, you can freeze your membership for up to 30 days per year for medical reasons or extended
                    travel. A small administrative fee of $15 applies.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold">Do I need to buy my own equipment?</h3>
                  <p className="text-zinc-300">
                    We provide gloves for beginners, but we recommend purchasing your own hand wraps, gloves, and mouth
                    guard for hygiene purposes. We have a pro shop with all the equipment you'll need.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold">Is there a minimum contract period?</h3>
                  <p className="text-zinc-300">
                    No, all our memberships are month-to-month with no long-term commitment required. We believe our
                    training speaks for itself.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold">Do you offer student or military discounts?</h3>
                  <p className="text-zinc-300">
                    Yes, we offer a 10% discount for students, military personnel, first responders, and healthcare
                    workers with valid ID.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-lg md:mt-0">
              <Image
                src="/images/membership-faq.jpg"
                alt="Boxer training"
                width={600}
                height={800}
                className="h-full w-full object-cover"
                query="boxer hitting heavy bag in dark gym with dramatic lighting and red accents"
              />
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="mb-4 text-2xl font-bold text-white">Still have questions?</h3>
                <p className="mb-4 text-zinc-200">
                  Our team is ready to help you find the perfect membership option for your goals.
                </p>
                <Button className="bg-red-600 text-white hover:bg-red-700">CONTACT US</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-red-600 py-12">
        <GrungeBackground className="opacity-30" />
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold uppercase tracking-tight text-white">
            START YOUR JOURNEY TODAY
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-white/90">
            Your first class is free. Come experience Bells Boxing with no obligation.
          </p>
          <Button asChild size="lg" className="bg-black text-white hover:bg-zinc-800">
            <Link href="/contact">CLAIM FREE CLASS</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

function MembershipCard({ name, price, period, description, features, featured = false, savings }) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg ${featured ? "border-2 border-red-500" : "border border-zinc-800"} bg-zinc-800/30 p-8 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2`}
    >
      {featured && (
        <div className="absolute -right-12 top-6 rotate-45 bg-red-500 px-12 py-1 text-sm font-bold text-white">
          POPULAR
        </div>
      )}

      <h3 className="mb-2 font-display text-2xl font-bold">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-zinc-400">/{period}</span>
        {savings && <div className="mt-1 text-sm font-medium text-red-500">{savings}</div>}
      </div>

      <p className="mb-6 text-zinc-300">{description}</p>

      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <Check className="mr-2 h-5 w-5 shrink-0 text-red-500" />
            ) : (
              <X className="mr-2 h-5 w-5 shrink-0 text-zinc-600" />
            )}
            <span className={feature.included ? "text-zinc-300" : "text-zinc-500"}>{feature.text}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full ${featured ? "bg-red-600 text-white hover:bg-red-700" : "bg-zinc-800 text-white hover:bg-zinc-700"}`}
      >
        SELECT PLAN
      </Button>
    </div>
  )
}

function BenefitCard({ title, description, image, imageQuery }) {
  return (
    <div className="overflow-hidden rounded-lg bg-zinc-800/30 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" query={imageQuery} />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <p className="text-zinc-300">{description}</p>
      </div>
    </div>
  )
}
