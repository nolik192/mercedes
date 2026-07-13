import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { fadeUp, viewportOnce } from "../motion"

const MODEL_URL = "/models/amg-gt.glb"
const CREDIT_URL =
  "https://sketchfab.com/3d-models/mercedes-benz-amg-gt-black-series-a1c89ee2c731474dacc20701555915c5"

export default function Showcase3D() {
  const containerRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (shouldLoad) import("@google/model-viewer")
  }, [shouldLoad])

  return (
    <section ref={containerRef} className="bg-mb-black py-24 md:py-32 px-6 md:px-10">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-xs tracking-[0.3em] uppercase text-mb-accent text-center mb-4"
      >
        Explore in 3D
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="font-display font-light text-3xl md:text-5xl tracking-wide text-mb-white text-center max-w-3xl mx-auto mb-12"
      >
        AMG GT, from every angle.
      </motion.h2>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-4xl mx-auto aspect-[4/3] md:aspect-[16/9] bg-mb-charcoal"
      >
        {shouldLoad ? (
          // eslint-disable-next-line react/no-unknown-property
          <model-viewer
            src={MODEL_URL}
            alt="Rotatable 3D model of the Mercedes-AMG GT Black Series"
            camera-controls="true"
            disable-zoom="true"
            touch-action="pan-y"
            interaction-prompt={reducedMotion ? "none" : "auto"}
            min-camera-orbit="auto 90deg auto"
            max-camera-orbit="auto 90deg auto"
            camera-orbit="30deg 90deg 65%"
            field-of-view="25deg"
            shadow-intensity="1"
            environment-image="neutral"
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-mb-silver-dim text-xs tracking-[0.2em] uppercase">Loading model…</p>
          </div>
        )}
      </motion.div>

      <p className="text-center text-xs text-mb-silver-dim mt-4">
        Drag to rotate &middot; 3D model by Tiaan Pretorius, licensed{" "}
        <a
          href={CREDIT_URL}
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-mb-accent transition-colors duration-200"
        >
          CC BY 4.0
        </a>
      </p>
    </section>
  )
}
