import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export default function TrainerCard({ name, title, bio, image, imageQuery }) {
  return (
    <div className="group overflow-hidden rounded-lg bg-zinc-800/30 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          query={imageQuery}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="mb-2 inline-block bg-red-500 px-3 py-1 text-xs font-bold uppercase text-white">{title}</div>
        <h3 className="mb-3 font-display text-xl font-bold">{name}</h3>
        <p className="mb-4 text-sm text-zinc-300">{bio}</p>
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
