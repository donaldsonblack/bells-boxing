import Image from "next/image"

export default function TestimonialCard({ quote, name, title, image, imageQuery }) {
  return (
    <div className="overflow-hidden rounded-lg bg-zinc-800/30 p-6 backdrop-blur-sm">
      <div className="mb-4 text-xl text-zinc-300">
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
          className="mb-2 h-8 w-8 text-red-500"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
        <p>{quote}</p>
      </div>
      <div className="flex items-center">
        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
            query={imageQuery}
          />
        </div>
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-sm text-zinc-400">{title}</p>
        </div>
      </div>
    </div>
  )
}
