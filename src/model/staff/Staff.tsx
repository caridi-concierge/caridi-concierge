export type Staff = {
    slug: string;
    name: string;
    tagline: string;   // specialty or short descriptor
    img: string;
    imgAlt: string;
    email?: string;    // optional
    bio: string[];
  };