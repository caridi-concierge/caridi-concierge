import { COMPANY } from "./company";

export type Location = (typeof LOCATIONS)[number];

export const LOCATIONS = [
    {
        id: "gowanus",
        name: "Gowanus",
        type: "Clinic",
        visibility: "public",
        
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
        ctaSecondaryHref: "https://maps.google.com/?q=south+slope+oral+surgery+brooklyn+4th+ave",
        
        ctaPrimaryLabel: "Book in Gowanus",
        ctaPrimaryHref: "/book",
        
        badge: "New",
        
        slug: "gowanus",
        
        heroImage: {
          src: "/images/botox_appt_drcaridi.webp",
          alt: "Gowanus Botox",
        },
        
        phoneDisplay: COMPANY.phone,
        phoneHref: COMPANY.phoneHref,
        
        email: COMPANY.email,
        emailHref: COMPANY.emailHref,
        
        hours: [{label: "Wednesday", value: "9:00 AM - 7:00 PM"}]
    },
    {
        id: "concierge",
        name: "Concierge",
        type: "In-Home",
        visibility: "public",

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
          "Physician-led Botox and filler treatments delivered to your home. A convenient, discreet option for receiving care without leaving your space.",
        
        ctaPrimaryLabel: "Book In-Home Visit",
        ctaPrimaryHref: "/book",
        
        ctaSecondaryLabel: "Text Us",
        ctaSecondaryHref: COMPANY.smsHref,
        
        slug: "in-home",
        
        heroImage: {
          src: "/images/cc_headshot_white_outside_hq_800px.webp",
          alt: "Concierge Botox",
        },
        
        phoneDisplay: COMPANY.phone,
        phoneHref: COMPANY.phoneHref,
        
        email: COMPANY.email,
        emailHref: COMPANY.emailHref,
        
        hours: [
            {label: "Monday", value: "Closed"},
            {label: "Tuesday", value: "9:00 AM - 7:00 PM"},
            {label: "Wednesday", value: "9:00 AM - 7:00 PM"},
            {label: "Thursday", value: "9:00 AM - 7:00 PM"},
            {label: "Friday", value: "9:00 AM - 7:00 PM"},
            {label: "Saturday", value: "9:00 AM - 5:00 PM"},
            {label: "Sunday", value: "10:00 AM - 3:00 PM"},
        ]
    },
    {
        id: "studio",
        name: "Red Hook",
        type: "Private Studio",
        visibility: "invite_only",
        
        address: {
          complete: "Red Hook, Brooklyn, NY 11231",
          streetAddress1: "",
          streetAddress2: "",
          neighborhood: "Red Hook",
          locality: "Brooklyn",
          region: "NY",
          postalCode: "11231",
          country: "US"
        },
        
        description:
          "A private studio in Red Hook. Invite Only.",
        
        ctaPrimaryLabel: "",
        ctaPrimaryHref: "",
        
        ctaSecondaryLabel: "",
        ctaSecondaryHref: "",
        
        slug: "red-hook-studio",
        
        heroImage: {
          src: "/images/home-banner-edit.webp",
          alt: "Red Hook Studio",
        },
        
        phoneDisplay: COMPANY.phone,
        phoneHref: COMPANY.phoneHref,
        
        email: COMPANY.email,
        emailHref: COMPANY.emailHref,
        
        hours: [
            {label: "Wednesday", value: "9:00 AM - 7:00 PM"}
        ]
    },
];