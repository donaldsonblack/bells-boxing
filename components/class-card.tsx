"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock, Dumbbell } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Map of class types to their blob URLs
const CLASS_IMAGES = {
  "Beginner Boxing": "https://v0.blob.vercel-storage.com/beginner-boxing-class-Oe5Tn4Ej.jpg",
  "Old School Boxing": "https://v0.blob.vercel-storage.com/old-school-boxing-Oe5Tn4Ej.jpg",
  "Advanced Boxing": "https://v0.blob.vercel-storage.com/advanced-boxing-technique-Oe5Tn4Ej.jpg",
  "Boxing Bootcamp": "https://v0.blob.vercel-storage.com/boxing-bootcamp-training-Oe5Tn4Ej.jpg",
  Conditioning: "https://v0.blob.vercel-storage.com/boxing-conditioning-workout-Oe5Tn4Ej.jpg",
  "Youth Boxing": "https://v0.blob.vercel-storage.com/youth-boxing-class-Oe5Tn4Ej.jpg",
  "Sparring Sessions": "https://v0.blob.vercel-storage.com/sparring-sessions-training-Oe5Tn4Ej.jpg",
  // Default image for any class not in the map
  default: "https://v0.blob.vercel-storage.com/boxing-class-default-training-Oe5Tn4Ej.jpg",
}

export default function ClassCard({ title, description, image, imageQuery, level, duration, featured = false }) {
  const [isOpen, setIsOpen] = useState(false)

  // Use the blob URL if available for this class type, otherwise use the provided image or default
  const imageUrl = CLASS_IMAGES[title] || image || CLASS_IMAGES.default

  return (
    <div
      className={`group relative overflow-hidden rounded-lg ${featured ? "ring-2 ring-red-500" : "ring-1 ring-zinc-800"}`}
    >
      {featured && (
        <div className="absolute right-0 top-0 bg-red-500 px-3 py-1 text-xs font-bold uppercase text-white">
          Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="mb-4 text-sm text-zinc-300">{description}</p>
        <div className="mb-4 flex flex-wrap gap-3">
          <div className="flex items-center rounded-full bg-zinc-800 px-3 py-1 text-xs">
            <Dumbbell className="mr-1 h-3 w-3 text-red-500" />
            <span>{level}</span>
          </div>
          <div className="flex items-center rounded-full bg-zinc-800 px-3 py-1 text-xs">
            <Clock className="mr-1 h-3 w-3 text-red-500" />
            <span>60 min</span>
          </div>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="w-full border-red-500 text-red-500 hover:bg-red-950/30 hover:text-red-400 bg-transparent"
            >
              LEARN MORE
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] bg-zinc-900 border-zinc-800 text-zinc-100">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
              <DialogDescription className="text-zinc-400">
                {featured && <span className="text-red-500 font-medium">Popular Class</span>}
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 mt-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">About this class</h4>
                <p className="text-zinc-300">{description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800/50 p-4 rounded-md">
                  <h4 className="font-medium mb-1 flex items-center">
                    <Dumbbell className="mr-2 h-4 w-4 text-red-500" />
                    Level
                  </h4>
                  <p className="text-zinc-300">{level}</p>
                </div>
                <div className="bg-zinc-800/50 p-4 rounded-md">
                  <h4 className="font-medium mb-1 flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-red-500" />
                    Duration
                  </h4>
                  <p className="text-zinc-300">60 min</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">What to bring</h4>
                <ul className="list-disc list-inside text-zinc-300 space-y-1">
                  <li>Comfortable workout clothes</li>
                  <li>Water bottle</li>
                  <li>Hand wraps (available for purchase)</li>
                  <li>Boxing gloves (provided for beginners)</li>
                </ul>
              </div>

              <Button className="mt-2 bg-red-600 text-white hover:bg-red-700" onClick={() => setIsOpen(false)}>
                BOOK THIS CLASS
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
