export type StaffCredential = {
    label: string;
    value: string;
};

export type Staff = {
    slug: string;
    name: string;
    tagline: string;   // specialty or short descriptor
    eyebrow?: string;  // small-caps role label (e.g. "Physician")
    subtitle?: string; // longer role line (e.g. "Founder · Aesthetic Medicine")
    img: string;
    imgAlt: string;
    email?: string;    // optional
    bio: string[];
    credentials?: StaffCredential[];
    metaDescription?: string;
    titleTag?: string;
};
