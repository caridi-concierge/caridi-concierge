import type { Metadata } from 'next'
import { COMPANY } from "@/lib/constants/company";

interface PageMetadataOptions {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  keywords?: string[]
  noIndex?: boolean
}

const SITE_CONFIG = {
  defaultImage: '/images/cc_logo_brand_contrast_full.webp',
  defaultImageAlt: 'Caridi Concierge - Redefined Botox and Filler Treatments in NYC'
}

export function createPageMetadata({
  title,
  description,
  path,
  image = SITE_CONFIG.defaultImage,
  imageAlt = SITE_CONFIG.defaultImageAlt,
  keywords = [],
  noIndex = false
}: PageMetadataOptions): Metadata {
  
  const fullUrl = `${COMPANY.url}${path}`
  const fullImageUrl = image.startsWith('http') ? image : `${COMPANY.url}${image}`

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: fullUrl
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: COMPANY.name,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  }
}