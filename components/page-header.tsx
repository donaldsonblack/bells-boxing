import Image from "next/image"
import GrungeBackground from "@/components/grunge-background"

interface PageHeaderProps {
  title: string
  subtitle: string
  backgroundImage?: string
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/images/boxing-class-default.png"}
          alt={title}
          fill
          priority
          className="object-cover brightness-50"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <GrungeBackground className="opacity-30" />
      </div>

      <div className="relative z-10 px-4 text-center">
        <h1 className="mb-4 font-display text-5xl font-bold uppercase tracking-tighter text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-lg font-medium text-zinc-200 md:text-xl">{subtitle}</p>
      </div>
    </section>
  )
}
