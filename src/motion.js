export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
}

export const viewportOnce = { once: true, amount: 0.3 }

// Unifying color grade applied to all car photography so images sourced
// from different shoots/settings read as one consistent editorial set.
export const photoGrade = "contrast(1.1) saturate(0.82) brightness(0.9)"

export function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}
