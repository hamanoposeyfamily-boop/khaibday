'use server';

import { neutralizeExcuse } from '@/ai/flows/ai-excuse-neutralizer-flow';

export async function getNeutralizedExcuse(excuse: string) {
  try {
    const result = await neutralizeExcuse({ excuse });
    return result.wittyResponse;
  } catch (error) {
    console.error('Failed to neutralize excuse:', error);
    return "Nice try, but we'll see you there anyway! 😉";
  }
}
