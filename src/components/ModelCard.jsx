import { motion } from "motion/react"
import { fadeUp, viewportOnce, scrollToId, photoGrade } from "../motion"

export default function ModelCard({ model, reverse }) {
  return (
    <div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} min-h-[560px] md:min-h-[640px]`}
    >
      <div className="relative w-full md:w-1/2 h-72 md:h-auto overflow-hidden">
        <img
          src={model.image}
          alt={model.imageAlt}
          style={{ objectPosition: model.imagePosition ?? "center", filter: photoGrade }}
          className="w-full h-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_35%,rgba(10,10,10,0.6)_100%)]" />
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-14 md:py-0 bg-mb-black"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-mb-accent mb-3">
          {model.tagline}
        </p>
        <h3 className="font-display font-light text-3xl md:text-5xl tracking-wide text-mb-white mb-6">
          {model.name}
        </h3>
        <ul className="space-y-2 mb-8">
          {model.specs.map((spec) => (
            <li
              key={spec}
              className="text-sm text-mb-silver border-t border-white/10 pt-2 first:pt-0 first:border-0"
            >
              {spec}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => scrollToId("footer")}
          className="self-start inline-flex items-center gap-3 border border-mb-white/40 px-6 py-2.5 text-xs tracking-[0.2em] uppercase text-mb-white hover:border-mb-accent hover:text-mb-accent transition-colors duration-200 cursor-pointer"
        >
          Configure
        </button>
      </motion.div>
    </div>
  )
}
