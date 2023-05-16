import z from "zod";
import { buildJsonSchemas } from "fastify-zod";

const flashCardCore = {
  title: z.string(),
  description: z.string(),
};

// const getFlashCardsResponse = z.array(getFlashCardResponse);

const flashCardSetInput = z.object({
  ...flashCardCore,
});

const flashCardSetResponse = z.object({
  ...flashCardCore,
});

export type CreateFlashCardSetInput = z.infer<typeof flashCardSetInput>;
export const { schemas: flashCardSetSchemas, $ref } = buildJsonSchemas(
  {
    // getFlashCardResponse,
    flashCardSetResponse,
    flashCardSetInput,
  },
  { $id: "flashCardSet" }
);
