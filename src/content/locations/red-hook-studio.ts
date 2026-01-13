import type { LocationContent } from './types';

export const redHookStudioContent: LocationContent = {
  slug: 'red-hook-studio',
  metadata: {
    title: 'Red Hook Private Studio | Exclusive Botox & Fillers Brooklyn',
    description: 'Invitation-only private studio in Red Hook Brooklyn offering exclusive Botox and dermal filler treatments. Boutique aesthetic care in a discreet, intimate setting.',
    keywords: [
      'Red Hook Botox',
      'private Botox studio Brooklyn',
      'exclusive aesthetic treatments',
      'boutique Botox Red Hook',
      'private dermal fillers Brooklyn',
      'invitation-only Botox',
      'luxury aesthetic treatments Brooklyn',
      'discrete Botox Red Hook'
    ]
  },
  studioExperience: {
    title: 'Private studio experience unlike any other',
    description: 'Tucked away in the artistic enclave of Red Hook, our private studio offers an intimate, boutique experience for select clients. This exclusive space combines the charm of waterfront Brooklyn with the sophistication of a high-end aesthetic practice.'
  },
  offerings: {
    title: 'Exclusive Services',
    subtitle: 'Invitation-only treatments in a private setting',
    treatments: [
      {
        title: 'Exclusive Botox Treatments',
        description: 'Premium neuromodulator services in complete privacy',
        image: '/images/botox_tx.webp',
        href: '/treatments/wrinkle-reduction'
      },
      {
        title: 'Artisanal Filler Work',
        description: 'Bespoke enhancement in an intimate environment',
        image: '/images/lips_tx.webp',
        href: '/treatments/dermal-fillers'
      },
      {
        title: 'Private Consultations',
        description: 'Extended planning sessions in complete discretion',
        image: '/images/consult_tx.webp',
        href: '/treatments/consult'
      }
    ],
    features: [
      {
        title: 'We do exclusivity better',
        description: 'Invitation-only access ensures the highest level of privacy and personalized attention in our boutique Red Hook studio.'
      },
      {
        title: 'Unhurried appointments',
        description: 'Extended appointment times allow for thorough consultations and treatments without feeling rushed.'
      },
      {
        title: 'Waterfront charm',
        description: 'Experience treatments in a space that reflects the artistic and sophisticated character of Red Hook\'s waterfront community.'
      }
    ]
  },
  faqs: [
    {
      question: 'How do I gain access to the Red Hook studio?',
      answer: 'The Red Hook studio is invitation-only. Access is typically extended to existing clients who prefer a more private, boutique experience. Contact us to discuss availability.'
    },
    {
      question: 'What makes the Red Hook studio different?',
      answer: 'Our Red Hook studio offers the most private and intimate setting, with extended appointment times and a boutique atmosphere. It\'s perfect for clients who value discretion and personalized attention.'
    },
    {
      question: 'Are the services different at the Red Hook studio?',
      answer: 'We offer the same high-quality treatments as our other locations, but with more time for consultation and a more intimate, private setting.'
    },
    {
      question: 'What are the hours for the Red Hook studio?',
      answer: 'The Red Hook studio operates by appointment only on select days. Current availability is Wednesdays, with potential for additional days based on demand.'
    }
  ]
};