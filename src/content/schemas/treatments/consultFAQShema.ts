
const priceConsult = process.env.PRICE_CONSULT ?? 150;

export const consultFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.caridiconcierge.com/treatments/consult#faq",
  "name": "Consultation FAQs",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What happens during a consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your consultation is a physician-led evaluation focused on understanding your goals, reviewing your medical history, and assessing facial anatomy. We discuss appropriate treatment options, risks, and realistic outcomes. This is a clinical discussion, not a sales appointment."
      }
    },
    {
      "@type": "Question",
      "name": "Is a consultation required before treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In a sense, yes. Before each appointment, we'll discuss your goals, concerns, and anatomy to determine the best approach for your needs."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a consultation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most consultations take 15 to 30 minutes, depending on the complexity of your concerns and whether you are considering multiple treatment areas."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a consultation fee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Yes, there is a fee of $${priceConsult} for the consultation. If treatment is performed during the same visit, the consultation fee is typically applied toward treatment. Pricing is discussed clearly before your appointment.`
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer virtual consultations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, virtual consultations are available for select concerns and planning purposes. All injectable treatments require an in-person evaluation before proceeding."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book a consultation even if I am unsure about treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many patients book consultations to learn more, ask questions, and understand their options. There is no obligation to proceed with treatment."
      }
    },
    {
      "@type": "Question",
      "name": "Who performs the consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All consultations are performed by Dr. Cristina Caridi. There are no delegated evaluations and no sales staff involved."
      }
    }
  ]
};
