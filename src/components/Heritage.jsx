import { motion } from "motion/react"
import { fadeUp, viewportOnce } from "../motion"

const VALUES = [
  {
    stat: "1926",
    title: "Since 1926",
    body: "Born from the merger of Daimler and Benz, the inventors of the automobile.",
  },
  {
    stat: "01",
    title: "Engineered Like No Other",
    body: "Every component obsessively refined for safety, comfort and performance.",
  },
  {
    stat: "∞",
    title: "Innovation Obsessed",
    body: "Pioneering electric mobility and intelligent design for a century of firsts.",
  },
]

export default function Heritage() {
  return (
    <section id="heritage" className="bg-mb-charcoal py-24 md:py-32 px-6 md:px-10">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-xs tracking-[0.3em] uppercase text-mb-accent text-center mb-4"
      >
        Heritage
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="font-display font-light text-3xl md:text-5xl tracking-wide text-mb-white text-center max-w-3xl mx-auto mb-16 md:mb-24"
      >
        A century of the best or nothing.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
        {VALUES.map((value, index) => (
          <motion.div
            key={value.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: index * 0.1 }}
            className="text-center md:text-left"
          >
            <div className="font-display font-light text-4xl text-mb-silver-dim mb-4">
              {value.stat}
            </div>
            <h3 className="text-mb-white text-lg tracking-wide mb-2">{value.title}</h3>
            <p className="text-mb-silver text-sm leading-relaxed">{value.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
