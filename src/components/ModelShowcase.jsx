import ModelCard from "./ModelCard"
import sClassImg from "../assets/cars/s-class.jpg"
import eqsImg from "../assets/cars/eqs.jpg"
import gClassImg from "../assets/cars/g-class.jpg"
import amgGtImg from "../assets/cars/amg-gt.jpg"

const MODELS = [
  {
    id: "s-class",
    name: "S-Class",
    tagline: "The Pinnacle of Luxury",
    image: sClassImg,
    imageAlt: "Black Mercedes-Benz S-Class photographed in a professional studio",
    specs: [
      "Available 4MATIC all-wheel drive",
      "Executive rear seating comfort",
      "Adaptive air suspension",
    ],
  },
  {
    id: "eqs",
    name: "EQS",
    tagline: "Electric. Unmistakable.",
    image: eqsImg,
    imageAlt: "Black Mercedes-Benz EQS side silhouette in golden-hour light",
    specs: [
      "Up to 780 km range (WLTP)",
      "Hyperscreen digital cockpit",
      "0–100 km/h in as little as 4.1s",
    ],
  },
  {
    id: "g-class",
    name: "G-Class",
    tagline: "Uncompromising. Since 1979.",
    image: gClassImg,
    imageAlt: "Black Mercedes-Benz G-Class SUV with illuminated round headlights",
    specs: [
      "Three fully locking differentials",
      "Iconic boxy silhouette",
      "Legendary off-road capability",
    ],
  },
  {
    id: "amg-gt",
    name: "AMG GT",
    tagline: "Power. Precision.",
    image: amgGtImg,
    imageAlt: "Grey Mercedes-AMG GT parked against a dramatic red rock landscape",
    imagePosition: "center 75%",
    specs: [
      "Handcrafted AMG V8 performance",
      "Race-derived aerodynamics",
      "Available Track Pace telemetry",
    ],
  },
]

export default function ModelShowcase() {
  return (
    <section id="models">
      {MODELS.map((model, index) => (
        <ModelCard key={model.id} model={model} reverse={index % 2 === 1} />
      ))}
    </section>
  )
}
