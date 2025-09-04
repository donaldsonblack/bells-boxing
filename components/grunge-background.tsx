export default function GrungeBackground({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 bg-[url('/images/grunge-texture.png')] bg-cover bg-center mix-blend-overlay ${className}`}
      style={{ backgroundSize: "100% 100%" }}
      aria-hidden="true"
    />
  )
}
