export const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Aesthetic Services at Caridi Concierge",
    "description": "Explore our expert in-home aesthetic treatments including Botox, dermal fillers, and collagen-boosting biostimulatory fillers.",
    "itemListElement": [
      {
        "@type": "Service",
        "serviceType": "Botox Wrinkle Reduction",
        "name": "Botox Cosmetic & Daxxify",
        "description": "Neuromodulator treatments like Botox and Daxxify to smooth fine lines and rejuvenate your look. Priced by unit.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "12",
          "unitText": "unit",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Dermal Fillers",
        "name": "RHA Collection, Juvederm, Radiesse",
        "description": "Dermal filler treatments designed to restore volume, smooth wrinkles, and enhance natural contours. Priced by syringe.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "600",
          "unitText": "syringe",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Biostimulatory Fillers",
        "name": "Radiesse & Sculptra",
        "description": "Biostimulatory filler treatments that stimulate collagen production for long-term rejuvenation.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "850",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  }
  