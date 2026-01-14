import { gowanusContent } from './gowanus';
import { inHomeContent } from './in-home';
import { redHookStudioContent } from './red-hook';
import type { LocationContent } from './types';

export const locationContent: Record<string, LocationContent> = {
  'gowanus': gowanusContent,
  'in-home': inHomeContent,
  'red-hook': redHookStudioContent,
};

export function getLocationContent(slug: string): LocationContent | null {
  return locationContent[slug] || null;
}

export * from './types';