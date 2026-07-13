import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"
import { useRef } from "react"
import heroImg from "../assets/cars/hero.jpg"
import { scrollToId, photoGrade } from "../motion"

export default function Hero() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 120])

  return (
    <section
      ref={ref}
      className="relative h-svh min-h-[560px] w-full overflow-hidden flex items-end"
    >
      <motion.img
        src={heroImg}
        alt="Two black Mercedes-Benz cars parked on a mountain pass road, dramatic snow-capped peaks behind"
        style={{ y, objectPosition: "center 62%", filter: photoGrade }}
        className="absolute inset-0 h-full w-full object-cover scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-mb-black via-mb-black/50 to-mb-black/20" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative z-10 px-6 md:px-10 pb-20 md:pb-28 max-w-3xl"
      >
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-mb-silver mb-4">
          Mercedes-Benz
        </p>
        <h1 className="font-display font-light text-4xl sm:text-5xl md:text-7xl tracking-wide text-mb-white leading-[1.05]">
          The Best or Nothing.
        </h1>
        <p className="mt-6 text-mb-silver text-base md:text-lg max-w-xl">
          Four flagship expressions of design, performance and innovation.
        </p>
        <button
          type="button"
          onClick={() => scrollToId("models")}
          className="mt-10 inline-flex items-center gap-3 border border-mb-white/40 px-7 py-3 text-xs tracking-[0.2em] uppercase text-mb-white hover:border-mb-accent hover:text-mb-accent transition-colors duration-200 cursor-pointer"
        >
          Discover the Lineup
        </button>
      </motion.div>
    </section>
  )
}
