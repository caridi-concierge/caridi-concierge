import type { LocationContent } from './types';

export const gowanusContent: LocationContent = {
  slug: 'gowanus',
  metadata: {
    title: 'Gowanus Botox & Dermal Fillers | Caridi Concierge Brooklyn Clinic',
    description: 'Professional Botox and dermal filler treatments at our Gowanus clinic in Brooklyn. Board-certified practitioners, premium products, and personalized care in a clinical setting.',
    keywords: [
      'Gowanus Botox',
      'Brooklyn Botox clinic',
      'Gowanus dermal fillers',
      'Brooklyn aesthetic treatments',
      'Botox Gowanus Brooklyn',
      'dermal fillers Brooklyn',
      'cosmetic injections Gowanus',
      'wrinkle treatment Brooklyn'
    ]
  },
  studioExperience: {
    title: 'Clinical excellence in Brooklyn\'s creative heart',
    description: 'Located in the vibrant Gowanus neighborhood, our clinic offers a serene, professional environment for your aesthetic treatments. Our board-certified practitioners provide expert care in a space designed for comfort and privacy, where clinical precision meets Brooklyn\'s creative energy.'
  },
  offerings: {
    title: 'Our Treatments',
    subtitle: 'Expert care administered by board-certified practitioners',
    treatments: [
      {
        title: 'Botox & Neuromodulators',
        description: 'Expert wrinkle prevention and treatment with premium products',
        image: '/images/botox_tx.webp',
        href: '/treatments/wrinkle-reduction'
      },
      {
        title: 'Dermal Fillers',
        description: 'Natural enhancement and volume restoration',
        image: '/images/lips_tx.webp',
        href: '/treatments/dermal-fillers'
      },
      {
        title: 'Consultation',
        description: 'Personalized treatment planning and assessment',
        image: '/images/consult_tx.webp',
        href: '/treatments/consult'
      }
    ],
    features: [
      {
        title: 'We do clinical care better',
        description: 'Board-certified practitioners with 5+ years of experience, providing thousands of treatments each year in a professional clinical setting.'
      },
      {
        title: 'Keep your natural look',
        description: 'We focus on enhancement, not transformation. Our goal is to help you look like the best version of yourself.'
      },
      {
        title: 'No pressure approach',
        description: 'We only recommend treatments that align with your goals. No upselling, just honest professional advice.'
      }
    ]
  },
  faqs: [
    {
      question: 'What makes the Gowanus location different?',
      answer: 'Our Gowanus clinic offers a quiet, professional clinical environment perfect for those who prefer a more traditional medical setting. Located in one of Brooklyn\'s most creative neighborhoods, we combine clinical excellence with the artistic energy of the area.'
    },
    {
      question: 'What days is the Gowanus clinic open?',
      answer: 'Currently, our Gowanus clinic is open on Wednesdays from 9:00 AM to 7:00 PM. We\'re planning to expand our hours as demand grows.'
    },
    {
      question: 'Is parking available at the Gowanus location?',
      answer: 'Yes, there is street parking available on 4th Avenue and surrounding streets. The location is also easily accessible by public transportation via the Union St-4th Ave subway station.'
    },
    {
      question: 'What should I expect during my first visit?',
      answer: 'Your first visit will include a thorough consultation where we discuss your goals, medical history, and create a personalized treatment plan. We take time to ensure you\'re comfortable and fully informed before any treatment.'
    }
  ]
};