export type Location = (typeof LOCATIONS)[number];

export const LOCATIONS = [
    {
        id: "gowanus",
        name: "Gowanus",
        type: "Clinic",
        address: {
          complete: "472 4th Ave, Brooklyn, NY 11215",
          streetAddress1: "472 4th Ave",
          streetAddress2: "",
          neighborhood: "Gowanus",
          locality: "Brooklyn",
          region: "NY",
          postalCode: "11215",
          country: "US"
        },
        description:
          "A quiet, clinical space in the heart of Gowanus. Available on select days. A private setting for injectable treatments.",
        ctaSecondaryLabel: "Get Directions",
        ctaSecondaryHref: "https://maps.google.com/?q=472+4Th+Ave,+Brooklyn,+NY+11215",
        ctaPrimaryLabel: "Book in Gowanus",
        ctaPrimaryHref: "/book",
        badge: "New",
        slug: "/locations/gowanus-botox",
        heroImage: {
          src: "/images/locations/gowanus-botox.jpg",
          alt: "Gowanus Botox",
        },
        phoneDisplay: "(917) 439-9470",
        phoneHref: "tel:+19174399470",
        email: "booking@caridiconcierge.com",
        emailHref: "mailto:booking@caridiconcierge.com",
        hours: [
            {
                label: "Monday",
                value: "9:00 AM - 5:00 PM"
            },
            {
                label: "Tuesday",
                value: "9:00 AM - 5:00 PM"
            },
            {
                label: "Wednesday",
                value: "9:00 AM - 5:00 PM"
            },
            {
                label: "Thursday",
                value: "9:00 AM - 5:00 PM"
            },
            {
                label: "Friday",
                value: "9:00 AM - 5:00 PM"
            },
            {
                label: "Saturday",
                value: "Closed"
            },
            {
                label: "Sunday",
                value: "Closed"
            },
        ]
    },
    {
        id: "concierge",
        name: "Concierge",
        type: "In-Home",
        address: {
          complete: "Brooklyn, Manhattan and Greater NYC",
          streetAddress1: "",
          streetAddress2: "",
          neighborhood: "",
          locality: "",
          region: "NY",
          postalCode: "",
          country: "US"
        },
        description:
          "Physician-led Botox and filler treatments delivered to your home. A convenient, private option for receiving care without leaving your space.",
        ctaPrimaryLabel: "Book In-Home Visit",
        ctaPrimaryHref: "/book",
        ctaSecondaryLabel: "Text Us",
        ctaSecondaryHref: "sms:+19174399470",
        slug: "/locations/concierge-botox",
        heroImage: {
          src: "/images/locations/concierge-botox.jpg",
          alt: "Concierge Botox",
        },
        phoneDisplay: "(917) 439-9470",
        phoneHref: "tel:+19174399470",
        email: "booking@caridiconcierge.com",
        emailHref: "mailto:booking@caridiconcierge.com",
        hours: [
            {
                label: "Monday",
                value: "9:00 AM - 5:00 PM"
            },
            {
                label: "Tuesday",
                value: "9:00 AM - 5:00 PM"
            },
            {
                label: "Wednesday",
                value: "9:00 AM - 5:00 PM"
            },
            {
                label: "Thursday",
                value: "9:00 AM - 5:00 PM"
            },
            {
                label: "Friday",
                value: "9:00 AM - 5:00 PM"
            },
            {
                label: "Saturday",
                value: "Closed"
            },
            {
                label: "Sunday",
                value: "Closed"
            },
        ]
    },
];