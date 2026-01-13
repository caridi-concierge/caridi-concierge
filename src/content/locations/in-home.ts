import type { LocationContent } from './types';

export const inHomeContent: LocationContent = {
  slug: 'in-home',
  metadata: {
    title: 'In-Home Botox & Fillers NYC | Mobile Concierge Service Brooklyn Manhattan',
    description: 'Professional Botox and dermal filler treatments delivered to your home in Brooklyn, Manhattan, and NYC. Board-certified practitioners bring clinical-grade care to your space.',
    keywords: [
      'in-home Botox NYC',
      'mobile Botox Brooklyn',
      'concierge Botox Manhattan',
      'at-home dermal fillers',
      'mobile aesthetic treatments NYC',
      'in-home cosmetic injections',
      'Botox delivery service Brooklyn',
      'private Botox treatments NYC'
    ]
  },
  studioExperience: {
    title: 'Concierge service unlike any other',
    description: 'Experience the ultimate in convenience and privacy with our concierge service. Our board-certified practitioners bring clinical-grade treatments directly to your home, creating a spa-like experience in your own space across Brooklyn, Manhattan, and Greater NYC.'
  },
  offerings: {
    title: 'Our Mobile Services',
    subtitle: 'Professional treatments delivered to your location',
    treatments: [
      {
        title: 'Mobile Botox Service',
        description: 'Professional wrinkle treatment in the comfort of your home',
        image: '/images/botox_consult.webp',
        href: '/treatments/wrinkle-reduction'
      },
      {
        title: 'In-Home Fillers',
        description: 'Dermal filler treatments in your private space',
        image: '/images/lips_tx.webp',
        href: '/treatments/dermal-fillers'
      },
      {
        title: 'Concierge Consultation',
        description: 'Personalized assessment and planning in your home',
        image: '/images/consult_tx.webp',
        href: '/treatments/consult'
      }
    ],
    features: [
      {
        title: 'We do mobile better',
        description: 'Board-certified practitioners with specialized mobile expertise, bringing all necessary equipment and maintaining the highest safety standards in your home.'
      },
      {
        title: 'Complete privacy and comfort',
        description: 'Enjoy treatments in the privacy of your own space, with flexible scheduling that works around your life.'
      },
      {
        title: 'No compromise on quality',
        description: 'Same premium products and clinical standards as our clinic, delivered wherever you are most comfortable.'
      }
    ]
  },
  faqs: [
    {
      question: 'What areas do you serve for in-home visits?',
      answer: 'We provide in-home services throughout Brooklyn, Manhattan, and Greater NYC. Contact us to confirm availability in your specific area.'
    },
    {
      question: 'What do I need to prepare for an in-home visit?',
      answer: 'We bring all necessary equipment and supplies. You just need to provide a clean, well-lit space with a comfortable chair or bed where you can recline. We\'ll guide you through any specific preparation during booking.'
    },
    {
      question: 'Is there a minimum charge for in-home visits?',
      answer: 'Yes, there is a travel fee for in-home services to cover the practitioner\'s time and transportation. This will be discussed during your consultation and booking.'
    },
    {
      question: 'How do you maintain safety and sterility in my home?',
      answer: 'We follow the same strict safety and sterility protocols as in our clinic. All equipment is medical-grade and properly sterilized, and we bring our own sterile supplies and disposal containers.'
    },
    {
      question: 'Can I book evening or weekend appointments?',
      answer: 'Yes! One of the benefits of our concierge service is flexible scheduling, including evenings and weekends based on practitioner availability.'
    }
  ]
};