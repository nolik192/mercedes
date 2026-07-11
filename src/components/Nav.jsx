import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { scrollToId } from "../motion"

const LINKS = [
  { label: "Models", id: "models" },
  { label: "Heritage", id: "heritage" },
  { label: "Contact", id: "footer" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleLinkClick = (id) => {
    setMenuOpen(false)
    scrollToId(id)
  }

  return (
    <motion.header
      initial={{ backgroundColor: "rgba(10,10,10,0)" }}
      animate={{
        backgroundColor: scrolled ? "rgba(10,10,10,0.95)" : "rgba(10,10,10,0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 ${scrolled ? "backdrop-blur-sm border-b border-white/10" : ""}`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 h-16 md:h-20">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-sm md:text-base tracking-[0.3em] text-mb-white cursor-pointer"
        >
          MERCEDES-BENZ
        </button>

        <ul className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className="text-xs tracking-[0.2em] uppercase text-mb-silver hover:text-mb-accent transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 cursor-pointer"
        >
          <span
            className={`block w-6 h-px bg-mb-white transition-transform duration-200 ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-mb-white mt-1.5 transition-transform duration-200 ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 pb-8 bg-mb-black/95">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className="text-sm tracking-[0.2em] uppercase text-mb-silver hover:text-mb-accent transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </motion.header>
  )
}
