import { COMPANY } from '@/lib/constants/company';

export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
        "@type": "Question",
        name: "How do I schedule an appointment?",
        acceptedAnswer: {
            "@type": "Answer",
            text: `You can visit ${COMPANY.url}, call/text (${COMPANY.phoneHref.replace("tel:", "")}) or email (${COMPANY.emailHref.replace("mailto:", "")}) for availability and booking!"`,
        },
        },
        {
        "@type": "Question",
        name: "What aesthetic services do you offer?",
        acceptedAnswer: {
            "@type": "Answer",
            text: "We offer wrinkle relaxing botox treatments (Botox, Daxxify, Xeomin), dermal filler treaments (RHA, Juveau), and collagen-bulding biostimulatory fillers (Radiesse, Sculptra). All treatments are administered safely and privately in the comfort of your own space.",
        },
        },
        {
        "@type": "Question",
        name: "Do you have same-day appointments?",
        acceptedAnswer: {
            "@type": "Answer",
            text: "We offer limited same-day availability based on location and schedule. Please contact us to check availability.",
        },
        },
        {
        "@type": "Question",
        name: "Where in NYC do you offer in-home Botox and other aesthetic treatments?",
        acceptedAnswer: {
            "@type": "Answer",
            text: "We serve the greater New York City area, including Brooklyn, Manhattan, Queens, Staten Island, and parts ofLong Island",
        },
        },
        {
        "@type": "Question",
        name: "Are treatments safe to do at home?",
        acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all treatments are administered by Dr. Cristina Caridi, a licensed physician using sterile, medical-grade supplies.",
        },
        },
    ],
    };