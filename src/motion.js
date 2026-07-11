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

export function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}
