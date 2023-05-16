import z from "zod";
import { buildJsonSchemas } from "fastify-zod";

const getFlashCardResponse = z.object({
  question: z.string(),
  answer: z.string(),
});

const getFlashCardsResponse = z.array(getFlashCardResponse);

const flashCardCreateInput = z.object({
  question: z.string(),
  answer: z.string(),
  flashcardSetId: z.number().optional(),
});

const flashCardUpdateInput = z
  .object({
    question: z.string().optional(),
    answer: z.string().optional(),
    flashCardSetId: z.number().optional(),
  })
  .refine(
    ({ question, answer, flashCardSetId }) =>
      question === undefined &&
      answer === undefined &&
      flashCardSetId === undefined,
    { message: "One of the fields must be defined" }
  );

export type CreateFlashCardInput = z.infer<typeof flashCardCreateInput>;

export type UpdateFlashCardInput = z.infer<typeof flashCardUpdateInput>;

export const { schemas: flashCardSchemas, $ref } = buildJsonSchemas(
  {
    getFlashCardResponse,
    getFlashCardsResponse,
    flashCardCreateInput,
    flashCardUpdateInput,
  },
  { $id: "Schema" }
);
