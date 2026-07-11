const COLUMNS = [
  {
    heading: "Models",
    links: ["S-Class", "EQS", "G-Class", "AMG GT"],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "Newsroom", "Sustainability"],
  },
  {
    heading: "Legal",
    links: ["Privacy", "Terms", "Cookie Settings", "Imprint"],
  },
]

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-mb-black px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-sm tracking-[0.3em] text-mb-white mb-4">
              MERCEDES-BENZ
            </p>
            <p className="text-mb-silver-dim text-xs leading-relaxed max-w-[220px]">
              A brand showcase concept built with real Mercedes-Benz photography.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h4 className="text-mb-white text-xs tracking-[0.2em] uppercase mb-4">
                {column.heading}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <span className="text-mb-silver-dim text-sm cursor-default">{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 text-mb-silver-dim text-xs">
          © {new Date().getFullYear()} Mercedes-Benz. Concept project — not an official Mercedes-Benz property.
        </div>
      </div>
    </footer>
  )
}
