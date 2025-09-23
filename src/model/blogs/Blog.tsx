export type BlogPostLayoutProps = {
    title: string;
    author: string;
    date: string;
    coverImage: string;
    children: React.ReactNode; // the MDX body
  };