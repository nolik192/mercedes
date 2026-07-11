import { motion } from "motion/react"
import { fadeUp, viewportOnce, scrollToId } from "../motion"

export default function CTASection() {
  return (
    <section className="relative py-28 md:py-40 px-6 text-center bg-mb-black overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(79,195,247,0.12),transparent_60%)]" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative max-w-2xl mx-auto"
      >
        <h2 className="font-display font-light text-3xl md:text-5xl tracking-wide text-mb-white mb-6">
          Find Your Mercedes-Benz.
        </h2>
        <p className="text-mb-silver mb-10">
          Connect with your nearest dealership to experience the lineup in person.
        </p>
        <button
          type="button"
          onClick={() => scrollToId("footer")}
          className="inline-flex items-center gap-3 border border-mb-white/40 px-8 py-3 text-xs tracking-[0.2em] uppercase text-mb-white hover:border-mb-accent hover:text-mb-accent transition-colors duration-200 cursor-pointer"
        >
          Find a Dealer
        </button>
      </motion.div>
    </section>
  )
}
