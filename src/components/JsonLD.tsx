"use client";

import React from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [key: string]: JsonValue }
  | JsonValue[];

type JsonLdObject = { [key: string]: JsonValue };

type JsonLdProps = {
  schema: JsonLdObject & { "@type": string | string[] };
  id?: string;
};

export function JsonLd({ schema, id }: JsonLdProps) {
    const pathname = usePathname();
    const json = JSON.stringify(schema);
  
    return (
      <Script
        key={`${pathname}-${id ?? schema["@type"]}`}  // Route-based key
        id={id ?? `${pathname}-${schema["@type"]}`}   // Route-based id
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: json }}
      />
  );
}