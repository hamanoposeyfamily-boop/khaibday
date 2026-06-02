'use server';
/**
 * @fileOverview An AI agent that generates witty, sarcastic responses to family event excuses.
 *
 * - neutralizeExcuse - A function that handles the excuse neutralization process.
 * - AiExcuseNeutralizerInput - The input type for the neutralizeExcuse function.
 * - AiExcuseNeutralizerOutput - The return type for the neutralizeExcuse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiExcuseNeutralizerInputSchema = z.object({
  excuse: z
    .string()
    .describe('The family member\u0027s excuse for not attending the party.'),
});
export type AiExcuseNeutralizerInput = z.infer<
  typeof AiExcuseNeutralizerInputSchema
>;

const AiExcuseNeutralizerOutputSchema = z.object({
  wittyResponse: z.string().describe('A witty, sarcastic response to the excuse.'),
});
export type AiExcuseNeutralizerOutput = z.infer<
  typeof AiExcuseNeutralizerOutputSchema
>;

export async function neutralizeExcuse(
  input: AiExcuseNeutralizerInput
): Promise<AiExcuseNeutralizerOutput> {
  return aiExcuseNeutralizerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiExcuseNeutralizerPrompt',
  input: {schema: AiExcuseNeutralizerInputSchema},
  output: {schema: AiExcuseNeutralizerOutputSchema},
  prompt: `You are a witty and slightly sarcastic event organizer for a family birthday party named "Two Much Fun".

A family member has provided the following excuse for not attending. Your task is to generate a short, playful, and sarcastic response that gently prods them to reconsider or at least acknowledges their excuse with a smirk, encouraging their attendance in a lighthearted manner.

Make sure the response is in a tone suitable for family communication and aims to be humorous rather than genuinely confrontational. Keep it concise, one or two sentences maximum.

Excuse: {{{excuse}}}`,
});

const aiExcuseNeutralizerFlow = ai.defineFlow(
  {
    name: 'aiExcuseNeutralizerFlow',
    inputSchema: AiExcuseNeutralizerInputSchema,
    outputSchema: AiExcuseNeutralizerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
